# A 웜 페이퍼 적용 검증

2026-10-15 · 설계4/4항목 일치

- A 배경/본문/제목/강조/포인트 색상 일치.
- 1440/900/390/320px에서 항목3개 세로 나열, 아이콘/글자 시작선 일치. 목록 컨테이너 중앙 정렬.
- Pretendard 및 동일한 제목 크기40px/28px 유지. 가로 넘침/JavaScript 오류 없음. 최초진입scrollY0.
- 소스 diff는 reality-stage CSS로 제한. 본문/다른섹션/JS 동일. 별도 안내사항3개 유지.

시각 확인: previews/screenshots/warm-paper-applied/1440.png 및390.png. 측정: checks.json.

추가 검증: 근거·관리 안내·체크 항목·결과 문장6개 선택자에서 실제 computed font-size 동일.1440/900px는 모두17px,390/320px는 모두16px. 가로넘침/JavaScript 오류 없음. uniform-checks.json 및 uniform-1440.png/390.png로 기록.
