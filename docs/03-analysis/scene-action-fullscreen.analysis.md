# Scene action and full-screen validation

2026-10-15

Design comparison completed against docs/02-design/features/scene-action-fullscreen.design.md. No outstanding requirements found.

- Latest evidence heading and six body groups match user copy exactly; intentional line breaks preserved. Blue emphasis is the trading-income sentence. Previous lifestyle/salary conclusion removed.
- Evidence and problems span the viewport width with minimum height of viewport minus 65px header. Desktop body scales to 26px and titles to 60px; mobile body is 17px and titles 32px.
- Chromium layout checks at 1440×900, 1920×1080, 390×844 and 320×640: no horizontal overflow. Evidence heights: 835, 1015, 779, 946px. Problems heights: 953, 1114, 999, 1169px. Taller content flows naturally.
- Desktop/mobile screenshots inspected for new evidence paragraphs, dark house overlay and car framing. Prior fullscreen problems screenshots also reviewed before v31 publication.
- Three generated motion sources and final contact sheets inspected. Car wheels rotate and road flows; newspaper corners flex; house geometry remains stable. House stars were added by documented FFmpeg compositing after generation.
- All three versioned MP4s are 1600×900, 24fps, H.264, no audio, 7.375 seconds. Short forward-only dissolve at loop boundary; no reverse motion. Combined size 3,066,337 bytes.
- Browser verified all three v2 URLs actually load/play and advance time; muted playback, pause/resume, offscreen pause and reduced-motion image fallback pass. No page JavaScript errors.
- Existing wheel gesture handling and dark overlay settings unchanged; regression checks for wheel momentum were completed in the preceding refinement.
- Second problem paragraph matches: 편하게 앉아서 영상만 시청하거나, 책 한두번만 읽어도 된다면 편할겁니다.

QA artifacts: /tmp/gftc-final-evidence-1440.png, /tmp/gftc-final-evidence-390.png, /tmp/gftc-final-intro-wealth.png, /tmp/gftc-final-intro-car.png, /tmp/gftc-final-intro-statement.png, /tmp/gftc-final-car-mobile.png.
