# D안 적용과 공유 설계

2026-10-15 · intro-d-public-share

## D 시안 반영
previews/intro-connection-concepts.html?concept=d&embed=1&still=1 기준. 첫 두 letter 영역을 .intro-d로 묶고 앞 도입과 두 번째 제목·결론 문장을 중앙 정렬한다. 세로선 / 하지만 / 세로선은 두 문단 사이 정상 문서 흐름에 둔다. 하단 상세는 최대 560px 왼쪽 정렬.

폭 736px 및 좌우 24px. 위쪽 76px, 아래 64px. 제목 36px, 본문 17px. 연결선 높이 32px, 간격 14px, 위아래 여백 32px. 모바일은 좌우 20px, 위 52px/아래 44px, 제목 28px/1.45, 본문 16px, 연결선 28px·간격 12px·여백 28px. 다음 letter 본문의 기존 상단 구분선 유지.

## 공유
- 정적 Sites 프로젝트: sites/gftc-wolgeupban. 소스 manifest .openai/hosting.json, 정적 결과 dist/index.html.
- 새 사이트 ID를 즉시 manifest에 보관하고 같은 ID로만 저장·배포한다. 인증정보는 메모리와 숨겨진 stdin으로만 전달.
- 사용자가 요청한 외부 공유를 위해 public 접근을 설정한다. 메일 발송은 하지 않는다.
- 실제 사이트 HTML만 게시한다. 동작하지 않는 상담 전송은 접수 완료로 표시하지 않고 접수 미지원 안내와 비활성 제출 버튼으로 처리한다. 기존 양식의 검토는 가능하다.
- PC/모바일 시안 일치, 원문 보존, 연결선 겹침 및 JS 오류, Sites 배포 성공을 확인한다.
