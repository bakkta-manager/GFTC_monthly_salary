# 월급반 상담 접수 연결 완료

2026-10-15 · v34 공개 배포 성공

## 결과

- 사이트: https://gftc-wolgeupban.secretpoppy1.chatgpt.site/#apply
- Supabase: GFTC 조교단 / GFTC_월급반_고객폼 (`rpypknboeestdfvtlcad`)
- 데이터: `public.consultation_requests`
- 관리: https://supabase.com/dashboard/project/rpypknboeestdfvtlcad/editor
- 함수: `submit-consultation`, v1, ACTIVE

Codex CLI에 Supabase MCP를 등록하고 공식 OAuth 로그인을 완료했다.
실제 조직/프로젝트 조회 결과 이미 생성된 빈 전용 프로젝트가 있어 추가 프로젝트/비용 없이 사용했다.
기존 3단계 상담 폼의 모든 답변과 서버 접수 시각/동의 시각을 저장한다.
데이터 조회와 내부 저장 RPC는 방문자에게 차단하고, 접수 함수가 입력 검증 후 저장한다.
실패 응답을 성공으로 처리하던 코드를 수정했으며 입력 유지/재시도/중복 방지를 제공한다.

## 검증

- Deno 타입 검사, JavaScript 구문 검사, Git diff 검사 통과.
- 실제 API 22개 항목 검증 통과. 비인가 조회/RPC 접근은 401 차단.
- Chromium에서 입력 검증, 서버 실패, 입력 유지, 재시도, 실제 저장 성공 확인.
- 비 JSON 서버 오류도 기술 메시지 대신 한국어 오류 안내로 처리함을 추가 확인.
- 데스크톱/모바일 3단계 폼, 가로 넘침, 페이지 오류 확인 완료.
- DB에 실제 테스트 4건이 저장되었고 요청 ID 중복 없음/동의 기록/RLS 활성화 확인.
- 해당 테스트 4건만 삭제하고 남은 테스트 행이 0개임을 확인했다.
- 보안 검사 ERROR/WARN 없음. RLS 기본 거부의 의도한 INFO 1건은 분석 문서에 기록.

## 배포 기록

- Project: `appgprj_6ad0598bc47481918748d724e60f7a2c`
- Commit: `ace5c6848ef1ffca05065c0389991aadb07e02c3`
- Version: `appgprj_6ad0598bc47481918748d724e60f7a2c~appgver_3276b2cc12c88191b06f3661f66b45df`
- Deployment: `appgdep_6ad0af3c5e3881919c37bfe7b7e0ff27`
- Status: succeeded at `2026-10-15T10:47:39.669813Z`

운영 방법과 개인정보 보유 기한 관리, 키/도메인 변경 시 조치는 `supabase/README.md`에 기록했다.
설계 대비 구현 항목 12/12를 충족했으며 실제 공개 배포까지 완료했다.
