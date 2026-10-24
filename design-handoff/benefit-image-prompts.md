# 제공 혜택 블루 박스 이미지 프롬프트 (6종)

용도: index.html `#benefits` 섹션 C-2 레이아웃의 블루 패널(가로 16:9, 권장 1600×900). 패널 배경이 블루(#1c69d4 / #0a4ba1)이므로 이미지는 어두운 네이비 톤 + 블루 하이라이트로 통일하면 자연스럽게 섞입니다. 텍스트·로고·실제 종목명은 넣지 않습니다.

공통 스타일 접미어:
"Premium fintech editorial illustration, dark navy background (#0b1d36) with electric blue (#1c69d4) and sky blue (#7cb0ff) highlights, soft volumetric glow, clean minimal composition, no text, no logos, no watermark, 16:9, high detail."

1. market (시황) — `assets/benefit-market.webp`
   "Three stacked translucent glass panels showing a candlestick chart at dawn, midday and dusk, light shifting from cool blue to warm, floating over a dark navy surface." + 공통

2. entry (타점 교육) — `assets/benefit-entry.webp`
   "A precise crosshair reticle locking onto a single candlestick on a price chart, thin guide lines and a glowing entry marker, depth of field, calm and focused." + 공통

3. live (협회장 라이브 트레이딩) — `assets/benefit-live.webp`
   "A live trading desk seen from behind: two monitors with glowing charts, a small red REC dot on screen edge, headset on the desk, cinematic rim light, no visible faces." + 공통

4. wet (W.E.T) — `assets/benefit-wet.webp`
   "An abstract AI loop: a ring of glowing nodes analysing a trail of trade dots, one dot being corrected back onto a path, neural glow, sense of feedback and correction." + 공통

5. news (뉴스) — `assets/benefit-news.webp`
   "Floating glass news cards with blurred headlines and small market sparklines, one card lit brighter than the rest, subtle motion blur, dark newsroom atmosphere." + 공통

6. community (수강생·졸업생 채팅방과 커뮤니티) — `assets/benefit-community.webp`
   "A cluster of glowing chat bubbles and avatar circles connected by thin light lines, one conversation thread in focus, warm but still blue-dominant palette." + 공통

적용 방법: 각 `.r-panel` 안의 `<span class="r-bignum">` 앞에
`<img src="assets/benefit-<slug>.webp" alt="" width="1600" height="900" loading="lazy" decoding="async">`
를 넣으면 CSS가 아이콘과 숫자를 자동으로 숨기고 이미지를 꽉 채웁니다. (slug는 각 `<li data-benefit="…">` 값)
