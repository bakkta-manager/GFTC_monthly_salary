const SITE_ORIGIN = 'https://gftc-wolgeupban.secretpoppy1.chatgpt.site';
const MAX_BODY_BYTES = 32768;
const CHOICES: Record<string, string[]> = {
  age: ['20대', '30대', '40대', '50대', '60대 이상'],
  job: ['회사원', '자영업', '전문직', '프리랜서', '전업 트레이더', '학생', '무직 또는 준비 중', '기타'],
  exp: ['없음', '1년 미만', '1~3년', '3년 이상'],
  result: ['경험 없음', '손실', '본전 수준', '수익'],
  goal: ['100만 원 이하', '300만 원', '500만 원', '1,000만 원 이상'],
  hours: ['1시간 미만', '1~2시간', '2~4시간', '4시간 이상'],
  commit: ['가능', '어려움'],
  duration: ['있음', '고민 중'],
};
const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
const TIMES = ['오전 (10~12시)', '오후 (13~15시)', '오후 (15~18시)', '저녁 (18~21시)'];
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

class InputError extends Error {
  constructor(message: string, public field = '', public status = 400) { super(message); }
}

function textField(data: Record<string, unknown>, field: string, max: number, required = true): string {
  const value = data[field];
  if (typeof value !== 'string') {
    if (!required && value === undefined) return '';
    throw new InputError('입력 항목을 확인해 주세요.', field);
  }
  const trimmed = value.trim();
  if ((required && !trimmed) || trimmed.length > max || trimmed.includes('\u0000')) {
    throw new InputError('입력 항목의 내용과 길이를 확인해 주세요.', field);
  }
  return trimmed;
}

export function validateSubmission(raw: unknown) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new InputError('입력 내용을 확인해 주세요.');
  const data = raw as Record<string, unknown>;
  const id = textField(data, 'request_id', 36);
  if (!UUID.test(id)) throw new InputError('페이지를 새로고침한 후 다시 신청해 주세요.');
  if (data.consent !== 'on') throw new InputError('개인정보 수집·이용에 동의해 주세요.', 'consent');
  if (textField(data, 'website', 200, false)) throw new InputError('신청 내용을 확인해 주세요.');
  const payload: Record<string, unknown> = {
    name: textField(data, 'name', 50),
    phone: textField(data, 'phone', 20).replace(/[\s()-]/g, ''),
  };
  if (!/^01[016789]\d{7,8}$/.test(payload.phone as string)) {
    throw new InputError('휴대전화 번호를 정확하게 입력해 주세요.', 'phone');
  }
  for (const [field, values] of Object.entries(CHOICES)) {
    const value = textField(data, field, 40);
    if (!values.includes(value)) throw new InputError('선택 항목을 확인해 주세요.', field);
    payload[field] = value;
  }
  payload.job_etc = payload.job === '기타' ? textField(data, 'job_etc', 100) : '';
  payload.essay = textField(data, 'essay', 5000);
  const slots: {day: string; time: string}[] = [];
  for (let i = 1; i <= 3; i++) {
    const day = textField(data, 'day' + i, 10, i === 1);
    const time = textField(data, 'time' + i, 40, i === 1);
    if (!day && !time) continue;
    if (!DAYS.includes(day) || !TIMES.includes(time)) {
      throw new InputError('상담 가능한 요일과 시간을 함께 선택해 주세요.', !DAYS.includes(day) ? 'day' + i : 'time' + i);
    }
    slots.push({day, time});
  }
  payload.slots = slots;
  return {id, payload};
}

async function readBody(req: Request) {
  const reader = req.body?.getReader();
  if (!reader) throw new InputError('입력 내용이 없습니다.');
  let size = 0;
  const parts: Uint8Array[] = [];
  while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new InputError('입력 내용이 너무 깁니다.', '', 413);
    }
    parts.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const part of parts) { bytes.set(part, offset); offset += part.length; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); }
  catch { throw new InputError('입력 형식을 확인해 주세요.'); }
}

function hex(value: ArrayBuffer) {
  return Array.from(new Uint8Array(value), b => b.toString(16).padStart(2, '0')).join('');
}

export async function handleRequest(req: Request): Promise<Response> {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store',
    'Vary': 'Origin', 'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'apikey, content-type',
  };
  if (origin === SITE_ORIGIN) headers['Access-Control-Allow-Origin'] = origin;
  const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), {status, headers});
  if (origin && origin !== SITE_ORIGIN) return reply(403, {ok: false, message: '이 사이트에서는 신청할 수 없습니다.'});
  if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers});
  if (req.method !== 'POST') return reply(405, {ok: false, message: '지원하지 않는 요청입니다.'});
  try {
    // Public submissions use a publishable API key, not a visitor login.
    // Explicit key validation replaces the gateway's legacy JWT-only check.
    const publishableKeys = Object.values(JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS') || '{}'));
    const apiKey = req.headers.get('apikey');
    if (!apiKey || !publishableKeys.includes(apiKey)) return reply(401, {ok: false, message: '연결을 확인하고 다시 시도해 주세요.'});
    if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return reply(415, {ok: false, message: '입력 형식을 확인해 주세요.'});
    }
    const {id, payload} = validateSubmission(await readBody(req));
    const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}');
    const secretKey = secretKeys.default;
    const url = Deno.env.get('SUPABASE_URL');
    if (!secretKey || !url) throw new Error('Backend configuration unavailable');
    const encoder = new TextEncoder();
    const fingerprint = hex(await crypto.subtle.digest('SHA-256', encoder.encode(JSON.stringify(payload))));
    const hmacKey = await crypto.subtle.importKey('raw', encoder.encode(secretKey), {name: 'HMAC', hash: 'SHA-256'}, false, ['sign']);
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    const clientHash = hex(await crypto.subtle.sign('HMAC', hmacKey, encoder.encode(new Date().toISOString().slice(0, 10) + ':' + ip)));
    const result = await fetch(url + '/rest/v1/rpc/submit_consultation', {
      method: 'POST', headers: {'apikey': secretKey, 'Content-Type': 'application/json'},
      body: JSON.stringify({p_id: id, p_payload: payload, p_client_hash: clientHash, p_fingerprint: fingerprint}),
      signal: AbortSignal.timeout(15000),
    });
    const stored = await result.json();
    if (!result.ok) {
      if (stored.message === 'RATE_LIMITED') return reply(429, {ok: false, message: '신청이 여러 번 접수되었습니다. 잠시 후 다시 시도해 주세요.'});
      if (stored.message === 'REQUEST_CONFLICT') return reply(409, {ok: false, message: '신청 내용을 변경했다면 다시 제출해 주세요.'});
      throw new Error('Storage unavailable');
    }
    if (stored.ok !== true || stored.id !== id) throw new Error('Unexpected storage response');
    return reply(200, {ok: true, id});
  } catch (error) {
    if (error instanceof InputError) return reply(error.status, {ok: false, message: error.message, field: error.field});
    // Do not log names, phone numbers, form bodies, or credentials.
    console.error('consultation_submission_failed');
    return reply(503, {ok: false, message: '접수를 완료하지 못했습니다. 입력 내용은 유지되어 있으니 잠시 후 다시 시도해 주세요.'});
  }
}

if (import.meta.main) Deno.serve(handleRequest);
