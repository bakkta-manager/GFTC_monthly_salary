# D안 적용 및 공개 공유 검증

2026-10-15 · intro-d-public-share

- 1440/390/320px에서 선택한 D 시안과 실제 도입부의 원문, 상대 배치, 글자 크기·행간·정렬·여백 차이 없음.
- 가로 넘침 및 브라우저 오류 없음. 두 문단 등장 효과 정상.
- 공개용 dist/index.html과 실제 index.html 내용 일치.
- 전송처가 비어 있는 상담 제출 버튼 비활성화, 안내 표시, 다음 단계 버튼 유지. submit 이벤트에도 접수 완료가 표시되지 않음.
- 배포 아카이브에는 정적 HTML 및 Sites hosting manifest만 포함.
- Sites 접근 설정 public 확인. 저장 버전 1의 배포 succeeded 확인.

검증 데이터: /tmp/gftc-d-public-check.json. PC/모바일 렌더: /tmp/gftc-d-applied-1440.png, /tmp/gftc-d-applied-390.png.

설계 대비 미해결 차이 없음. 상담 실접수는 현재 범위에 포함되지 않으며 공유 페이지에 해당 상태를 안내했다.
