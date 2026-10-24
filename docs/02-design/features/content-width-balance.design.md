# Content width balance — design

## 2026-10-24: 현재 적용 기준 (이전 높이/크기 기준보다 우선)

- 사용자가 복원한 버전 37(eae03a4d7d413818f3a975167db19051547ff165)을 작업 기준으로 사용한다. 로컬 HEAD의 월억반 리뉴얼을 재배포하지 않는다. 버전 37 대비 HTML 문구·스크립트·폼·미디어를 보존하고 CSS만 변경한다.
- 전체 화면 연출은 종이 질감의 ‘월급만큼의 수입은 현실적으로 가능합니다’ 섹션까지 유지한다. 이후 evidence/proble​​ms의 viewport 최소 높이와 중앙 수직 정렬을 없애고 콘텐츠 높이에 맞춘다.
- 증거/훈련 두 섹션의 콘텐츠 외곽 폭 52rem, 데스크톱 좌우 안쪽 여백 24px, 모바일 20px를 통일한다. 글은 왼쪽 정렬, 컨테이너는 중앙 배치한다.
- 제목 clamp(28px,3vw,40px), 본문 clamp(17px,1.35vw,19px), 행간 1.85, 제목 아래 36px, 문단 간격 24px. 모바일도 같은 토큰을 사용한다.
- 훈련 소제목은 clamp(21px,1.8vw,24px)와 행간 1.45. 타임라인 들여쓰기 및 인용문 구조는 유지하고 본문/강조문의 크기를 같게 맞춘다.
- 그 아래 편지/커리큘럼/혜택/신청 영역의 콘텐츠 폭과 제목 크기/세로 간격도 같은 기준을 적용한다. 폼 내부, 혜택 카드, 커리큘럼 블러 자료의 세부 글자 크기는 유지한다.
- 서두 배경·문구·영상·종이 질감과 데이터 저장 동작은 수정하지 않는다.
- 검증: 버전 37 대비 HTML/스크립트 일치, 320/390/768/1440/1920px에서 너비·크기 일치 및 가로 넘침 없음, 큰 높이에서도 하단 섹션 강제 확장 없음, 데스크톱/모바일 스크린샷 확인.

2026-10-15

## Layout

Add a shared --wide-measure:56rem (896px) content-width token. Retain --measure:46rem for standard reading/form blocks. Explicitly give .wrap width:100%, max-width:var(--measure), margin-inline:auto and text-align:left so section content shares a centered shell.

Evidence remains full-width/full-height as a section. Change horizontal padding from max(40px,calc((100% - 1280px)/2)) to max(40px,calc((100% - var(--wide-measure))/2)). This places its left-aligned content inside a centered 896px reading area.

Problems .wrap uses max-width:calc(var(--wide-measure) + 80px) including 40px gutters on each side, matching the evidence content edges. Keep existing 20px mobile gutters. Standard .letter has explicit text-align:left and retains its narrower centered 46rem shell. Intro text keeps its current centered presentation. Backgrounds, minimum section heights, responsive typography, user copy and videos remain intact.

## Expected desktop positions

At1920px: evidence/problems content left512px, right512px. At1440px: left272px, right272px. At1024px: left64px, right64px. At768px:40px each side. On mobile:20px each side.

## Validation

Check content bounds and computed alignment of every primary section at1920,1440,1024,768,390,320px. Verify equal left/right container margins, no horizontal overflow, minimum full-screen section heights and unchanged text. Inspect evidence/problems desktop and mobile screenshots. Publish using Sites workflow.

## 2026-10-15 follow-up: slightly smaller evidence section

For the evidence section only, use a max-content reading wrapper capped at800px and100% of available width, centered with automatic horizontal margins and left text alignment. This centers the actual text block instead of a wide container with unused space on the right. Keep40px desktop and20px mobile section gutters. Reduce desktop heading from clamp(36px,3.2vw,60px) to clamp(32px,2.8vw,52px), and body from clamp(19px,1.35vw,26px) to clamp(18px,1.2vw,23px). Mobile heading becomes30px and body16px. Keep section height, vertical rhythm, copy and blue emphasis; extend the existing reveal selector to the reading wrapper's children. Check equal side margins, readable desktop/mobile layout and unchanged adjacent sections.
