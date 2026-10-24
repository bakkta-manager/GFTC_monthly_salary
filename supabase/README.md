# 월급반 상담 접수 운영

- 프로젝트: GFTC_월급반_고객폼 (`rpypknboeestdfvtlcad`)
- 조직: GFTC 조교단 · Free 요금제
- [신청 데이터 관리](https://supabase.com/dashboard/project/rpypknboeestdfvtlcad/editor)
- 테이블: `public.consultation_requests`
- [접수 함수](https://supabase.com/dashboard/project/rpypknboeestdfvtlcad/functions/submit-consultation)

## 신청 확인

Table Editor에서 consultation_requests를 선택하고 created_at을 최신순으로 정렬합니다.
name/phone은 이름과 연락처, consultation_slots는 희망 상담 시간입니다.
motivation은 지원 동기이며 나머지 설문 응답은 각각의 열에 저장됩니다.
created_at과 consent_at은 서버 기록 시각이며 대시보드 시간대 설정에 따라 표시됩니다.
status는 new(신규), contacted(연락 완료), completed(상담 완료), withdrawn(동의 철회)입니다.

현재 개인정보 안내의 보유 기간은 상담 종료 후 1년 또는 동의 철회 시까지입니다.
운영자가 상담 종료/철회 요청을 관리하고 기한에 맞춰 해당 행을 삭제해야 합니다.
자동 보유 기간 삭제 작업이나 외부 메시지 알림은 설정하지 않았습니다.

## 접근과 배포

RLS를 활성화하고 anon/authenticated의 테이블 권한을 제거했습니다.
공개 키로는 테이블 조회/수정/삭제와 내부 RPC 실행이 모두 차단됩니다.
접수 함수만 환경에 주입된 서버 키를 이용하여 검증된 신청을 저장합니다.
코드에는 서버 키를 넣지 않습니다. 프론트엔드 공개 키는 브라우저 사용을 위한 키입니다.

새 공개 키는 JWT가 아니므로 함수는 verify_jwt=false와 직접 apikey 검증을 함께 사용합니다.
공개 키 변경 시 프론트엔드 FORM_PUBLIC_KEY도 갱신해야 합니다.
사이트 도메인 변경 시 함수의 SITE_ORIGIN도 함께 변경합니다.

SQL은 migrations/, 함수는 functions/submit-consultation/index.ts에 보관합니다.
신청 API는 POST 전용이며 입력 검증, 원자적 재시도 처리, 기본 과다 접수 제한을 수행합니다.
브라우저가 시간 초과되어도 입력값을 바꾸지 않고 다시 제출하면 동일 요청 ID로 재시도합니다.
