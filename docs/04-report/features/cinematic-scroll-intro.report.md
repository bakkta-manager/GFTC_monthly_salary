# 스크롤 도입부 게시 완료

2026-10-15 · cinematic-scroll-intro

공유 URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site

도입부를 세 화면으로 구성했다.

1. 고급 건물·외제차 배경과 크게 표시한 두 인용문.
2. 검은 배경에 화면을 채우는 ‘누구나 꿈꾸지만, 아무나 이룰 수 없는 목표입니다.’.
3. ‘비현실적인 수익은 약속할 수 없습니다.’ → 세로 연결과 ‘하지만’ → 현실적인 수입 제목과 9년간 3,165명 문장.

‘트레이딩을 가르치는 입장이지만’은 삭제했다. 도입 이후의 본문·문제·혜택·상담 미리보기 기능은 유지했다. PC, 모바일, 가로 화면 및 스크롤 동작 검증 완료.

배경 제작: built-in image_gen. 원본 및 게시 자산 assets/wealth-intro.png. 최종 프롬프트: docs/02-design/features/cinematic-scroll-intro-image-prompt.md.

## 게시 정보
- 접근: public
- 상태: succeeded
- Site ID: appgprj_6ad0598bc47481918748d724e60f7a2c
- Version: 2
- Version ID: appgprj_6ad0598bc47481918748d724e60f7a2c~appgver_8cfe3ebcf15881918d206ab7edf0950e
- Deployment ID: appgdep_6ad05ca659948191bab220c0d04a8e79
- Source commit: 983b6456368b2e1ab3a0484020f746056e59194b
- 사이트 소스: sites/gftc-wolgeupban

후속 수정은 동일 Site ID를 사용한다. root index.html과 assets/wealth-intro.png를 사이트 dist의 동일 상대 경로에 동기화하고 source helper로 패키징·게시한다. 다음 단계는 공유 페이지의 스크롤 흐름 검토다.
