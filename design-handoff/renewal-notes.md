# 월급반 랜딩페이지 하단 리뉴얼 노트 (2026-10-24)

레퍼런스: https://gftc-landing.vercel.app/ (속성반), https://gftc-membership.vercel.app/ (멤버십)
기준 브리프: claude-design-brief.txt

## 파일
- `../index.html` — 리뉴얼 적용본
- `index.before-claude-renewal.html` — 적용 전 원본 (md5 ec09e9cedc278064315a890a9d4a1277)
- `renewal-desktop-1440-full.png`, `renewal-mobile-390-full.png` — 전체 시안

## 보존 범위 (바이트 동일)
- CSS 1~160행: 토큰, 내비, 편지형 기본, 영상 3장면, 종이 질감 현실 섹션
- 본문 `<body>`부터 `#intro-reality` 닫힘까지
- 상담 폼: input/select/textarea 45개의 name·value·required·id 전부 동일, 검증/전송 JS·Supabase 엔드포인트 동일

## 리뉴얼 범위 (`<div class="renew">` 내부 + 모바일 고정 CTA)
1. 증거 섹션 — 중앙 제목 + 흰 편지 카드, 인용은 블루 좌측선 콜아웃
2. 제공 혜택 6개 — 아이콘 타일 3×2 카드 (호버 리프트), 틴트 배경
3. 상담 신청 — 수강료 "월 29만 원" 캡슐, 흰 폼 카드, 캡슐 칩/그라데이션 CTA
4. 안내 사항 — 레퍼런스 푸터와 같은 저채도 노티스 카드

## 디자인 토큰 (레퍼런스와 동일 계열, `--r-*` 접두)
배경 #fafbff / #f3f5fa · 잉크 #1b1f27 · 본문 #3b4252 · 블루 #1c69d4 (딥 #0a4ba1) · 그라데이션 #0653b6→#1c69d4
라운드 18/26px · 카드 그림자 0 4px 12px -6px rgba(11,29,54,.10) · 서체 Pretendard (기존 로컬 폰트)

## 삭제 (사용자 요청, 2026-10-24)
- '월급반 과정은 결코 만만하지 않을 겁니다' 세 가지 특성 섹션
- '95% 이상 동일 / 소수 정예' 네이비 블록

## 변경하지 않은 것
- 문구, 혜택 수, 수강료, 기간/약정 조건 (첫째 카드의 강제 줄바꿈 `<br>`만 공백으로 치환)
- `sites/gftc-wolgeupban/dist/index.html` 배포본 — 검증 후 복사해서 배포
