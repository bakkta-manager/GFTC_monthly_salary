# A 웜 페이퍼 적용 설계

2026-10-15

기준: reality-color-concepts.design.md의 A안 및 선택안 적용 항목.

1. reality-stage만 배경#f4f1eb, 제목/체크/근거강조#202329, 본문/하지만#59616c, 포인트/체크#285dc2, 하이라이트#cfdef5, 구분선#20232926, 연결선/체크테두리#285dc266 적용.
2. three 목록은 모든 화면에서 flex-direction:column, align-items:flex-start, gap3px, max-width234px, margin-inline:auto. 기존 항목 padding9px/모바일8px 유지.
3. 본문/글꼴/폰트크기/강조영역/다른섹션/JS 보존.
4. 1440/900/390/320px에서 색상·수직목록·가로넘침·폰트크기·첫접속scrollY0 확인. 스크린샷 시각 검토.
5. helper로 저장/공개배포하고 해시 없는 기존사이트 URL 전달.

## 추가 요청: 하단 본문 글자 크기 통일
근거 문장(9년간3,165명), 관리 시스템 안내, 세 체크 항목, 마지막 결과 문장을 동일한 본문 크기로 통일한다. PC17px, 모바일16px. proof는 별도20px/17px 값을 제거하여 섹션 글자 크기를 상속한다. 숫자의 굵기/하이라이트 및 제목 크기는 유지한다.
