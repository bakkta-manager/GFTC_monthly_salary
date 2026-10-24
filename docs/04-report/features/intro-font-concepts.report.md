# 도입·본문 정리와 폰트 시안 6개 완료

2026-10-15 · intro-font-concepts

도입부 행간과 하이라이트를 정리하고 대표 서명을 삭제했다. 마무리 두 문장은 동일한 본문 위계의 한 문단으로 묶었다. 첫 문제 점 위의 세로선을 제거하고 문제 설명을 의미 단위로, 혜택 카드 설명을 마침표마다 줄바꿈했다. W.E.T 제목·기존 스크롤·카드 hover 동작은 유지했다.

폰트 시안: A Pretendard, B SUIT, C Noto Sans KR, D Wanted Sans, E 나눔스퀘어 네오, F Noto Serif KR. 6종 모두 실제 폰트 렌더링을 확인했다. 2열 비교·큰 보기·PC/모바일 전환 제공. 선택 전 메인 폰트는 유지한다.

6종×3개 뷰포트 18개 검사, 메인 3개 뷰포트, 링크 및 보기 전환 검증 완료. 콘솔 오류·가로 넘침 없음. 설계 대비 누락 없음.

공개 배포 version 9 · succeeded
메인: https://gftc-wolgeupban.secretpoppy1.chatgpt.site
시안: https://gftc-wolgeupban.secretpoppy1.chatgpt.site/previews/font-concepts.html
Source: b8abd6c51b04f6f37d58b0a1eb4131e3955866df
Deployment: appgdep_6ad06dd677148191bf50e967fd6761d1

다음: 사용자 폰트 선택 후 적용.

## A Pretendard 선택 및 적용 완료

메인 전체 글꼴을 A 시안의 Pretendard로 통일했다. 로컬 가변 폰트를 preload하여 제목·본문·폼에서 같은 글꼴을 사용한다. PC/390/320px 렌더링·넘침·도입 글자 크기 일치 검증 완료. 기존 콘텐츠·스크롤·hover 스크립트는 수정 전과 동일하다.

공개 배포 version 10 · succeeded
URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site
Source: 83333b32452ad6c718e1a03fba8eb9db71bf2b8b
Deployment: appgdep_6ad06f167a44819193971c9f92bc13ce
