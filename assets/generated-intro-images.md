# 도입 배경 이미지

## 도입 배경 영상 v2 — 실제 피사체 움직임 (2026-10-15)

v1 영상을 교체했습니다. 기존 생성 이미지를 참조하여 Higgsfield Kling 3.0 Turbo로 각각 8초, 1080p, 16:9 영상을 새로 생성했습니다. 집은 구름·나뭇잎 움직임, 자동차는 바퀴 회전과 도로 흐름이 있는 주행, 신문은 윗장의 가장자리가 들리고 내려오는 움직임입니다. 생성 비용은 각 16크레딧, 합계 48크레딧입니다.

집 생성 영상에서 별빛이 충분히 보이지 않아 Higgsfield sandbox의 FFmpeg로 하늘의 12개 점광원을 서로 다른 주기와 밝기로 반짝이도록 합성했습니다. 별빛은 AI 생성 결과만으로 구현된 효과가 아니라 영상 후처리입니다.

동일 sandbox에서 1600×900, 24fps, H.264 CRF24, 무음, faststart로 내보냈습니다. 마지막 0.6초를 시작 부분과 디졸브하여 약 7.4초로 반복합니다. 역방향 재생은 사용하지 않습니다. 원본 이미지는 로딩 실패·저감 모션 대체용으로 유지합니다.

### house
- 웹 자산: intro-house-loop-v2.mp4
- 작업 ID: 368010fa-49b6-4ec7-890d-ee4b063c2286
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_095206_368010fa-49b6-4ec7-890d-ee4b063c2286.mp4
- 최종 MP4: https://d2ol7oe51mr4n9.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/45211698-8d0c-4e74-98f7-4158c31b67e2.mp4
- 최종 프롬프트:

Create an 8-second photorealistic cinematic video from this nighttime black mansion reference. ACTUAL SCENE MOTION is essential, not a zoom of a still. Camera locked completely still, same framing, same building geometry. In the open dark sky above and beside the roof, a sparse field of small realistic white stars is clearly visible and gently twinkles at different slow irregular rates; individual stars fade brighter and softer independently throughout the shot. Thin wisps of cloud slowly drift past the moon, and the treetops lightly sway in a night breeze. The mansion stays perfectly solid, its warm window lights steady. Elegant restrained night atmosphere, visible but calm motion, no flashing or strobing, no shooting stars, no time-lapse rotation, no camera zoom/pan, no new buildings/people/text. Preserve reference dark photographic exposure and 16:9 composition. Maintain consistent composition from beginning to end for a seamless atmospheric background loop.

### car
- 웹 자산: intro-car-loop-v2.mp4
- 작업 ID: ecf0de6a-4ba9-4c7b-8949-92275fbe40e4
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_095224_ecf0de6a-4ba9-4c7b-8949-92275fbe40e4.mp4
- 최종 MP4: https://d2ol7oe51mr4n9.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/9f621675-7d48-4b97-87c2-309fd514316e.mp4
- 최종 프롬프트:

Create an 8-second photorealistic automotive commercial VIDEO from this black sports coupe reference. The car must be visibly DRIVING forward toward the LEFT at a smooth moderate speed on a smooth unmarked dark road, not parked and not a zoomed photo. A perfectly stabilized camera tracks parallel at exactly the car's speed, maintaining the original full side profile, whole car fully visible and nearly fixed in the frame. Both wheels continuously rotate naturally as the road surface flows to the RIGHT underneath; subtle realistic tire motion blur. Fine cool mist at road level slips rearward and curls behind the rear bumper, gentle reflections travel along the black body. Keep the same two-door low silhouette, exact proportions, dark dusk horizon and quiet empty background. No racing, drifting, burnout, flames, hard acceleration, shaking, cuts, doors opening, traffic, people, logos or text. The car stays level, fully in frame, constant scale and position. Continuous clear real subject motion, restrained premium mood, 16:9.

### news
- 웹 자산: intro-news-loop-v2.mp4
- 작업 ID: 2d6a279c-0b95-4ecb-be95-e2b04410f715
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_095222_2d6a279c-0b95-4ecb-be95-e2b04410f715.mp4
- 최종 MP4: https://d2ol7oe51mr4n9.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/78a3608b-133e-469f-9019-bc9370214518.mp4
- 최종 프롬프트:

Create an 8-second photorealistic video of these overlapping Korean financial newspaper stacks. ACTUAL PAPER MOTION is essential: a gentle continuous breeze clearly lifts and flutters the exposed corners and top sheets of several newspapers, making small waves travel across the paper. Three or four loose page edges rise a few centimeters, flex, ripple and settle at different times. Stacks remain in place; no sheets fly away and no pages disappear. Camera is locked in the exact supplied overhead/oblique composition, no zoom/pan, no scene cuts. Printed headlines and photographs remain physically printed on the same paper, moving and bending only with the sheets, never changing words or morphing. Tactile newsprint and believable moving paper shadows, muted charcoal monochrome, dark premium editorial atmosphere. Motion must be readily apparent but gentle enough behind a webpage heading. No hands, people, extra objects, extra overlay text or logos. Finish close to initial paper positions for a soft seamless loop. Landscape16:9.


## 도입 배경 영상 — 2026-10-15

기존 집·스포츠카·신문 이미지를 시작 프레임으로 Higgsfield Kling 3.0 Turbo에서 각각 5초, 1080p로 생성했습니다. 세 작업 모두 10크레딧, 합계30크레딧입니다. 생성 영상의 정방향/역방향을 연결하고 재생 시간을 1.25배로 늘려 12.5초의 잔잔한 반복 영상으로 만들었습니다. 웹 자산은 1600×900/24fps/H.264/CRF25/faststart이며 오디오 트랙을 제거했습니다. 원본 이미지는 로딩·실패·저감 모션용으로 계속 보관합니다.

### 집
- 웹 자산: intro-house-loop-v1.mp4
- 작업 ID: 604c490c-9de4-42f7-8e3e-1bdaba098ba6
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_085516_604c490c-9de4-42f7-8e3e-1bdaba098ba6.mp4
- 프롬프트:

Animate the supplied image into an extremely calm premium website background video, 5 seconds, landscape 16:9. Preserve the reference composition, materials, proportions, dark low-key exposure, and photographic realism throughout. One continuous shot. Camera makes only a very slow, tiny stabilized push-in, at most 2 percent over the entire shot. No cuts, no fast motion, no shaking, no flash, no sudden lighting changes, no added objects, people, lettering or logos. Keep the scene quiet enough for large white webpage text to be overlaid separately. The subject is the same black modern mansion at night. The building and windows are completely still; warm interior lights stay steady. Only very slight natural leaf movement and subtle cloud drift. No new windows, doors, cars or people. Maintain the same building silhouette and framing.

### 스포츠카
- 웹 자산: intro-car-loop-v1.mp4
- 작업 ID: 7ba13d11-ba39-4e4c-9965-2be3012afbb6
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_085516_7ba13d11-ba39-4e4c-9965-2be3012afbb6.mp4
- 프롬프트:

Animate the supplied image into an extremely calm premium website background video, 5 seconds, landscape 16:9. Preserve the reference composition, materials, proportions, dark low-key exposure, and photographic realism throughout. One continuous shot. Camera makes only a very slow, tiny stabilized push-in, at most 2 percent over the entire shot. No cuts, no fast motion, no shaking, no flash, no sudden lighting changes, no added objects, people, lettering or logos. Keep the scene quiet enough for large white webpage text to be overlaid separately. The subject is the same glossy jet-black low two-door sports coupe in full side profile, facing left on smooth unstriped dark ground. The car remains PARKED and stationary. Wheels do not rotate. Preserve exact wheel/body geometry and the whole car in frame. A soft restrained studio reflection slowly glides across the hood and flank, barely noticeable. No driving, smoke, engine effects, doors opening or headlights flashing.

### 신문
- 웹 자산: intro-news-loop-v1.mp4
- 작업 ID: 0cbec42e-fe48-405c-a5f7-eca6ff8913a4
- 생성 원본: https://d8j0ntlcm91z4.cloudfront.net/user_393hEFk70OXnIUoKWBTFNLM4jQP/hf_20261015_085545_0cbec42e-fe48-405c-a5f7-eca6ff8913a4.mp4
- 프롬프트:

Animate the supplied image into an extremely calm premium website background video, 5 seconds, landscape 16:9. Preserve the reference composition, materials, proportions, dark low-key exposure, and photographic realism throughout. One continuous shot. Camera makes only a very slow, tiny stabilized push-in, at most 2 percent over the entire shot. No cuts, no fast motion, no shaking, no flash, no sudden lighting changes, no added objects, people, lettering or logos. Keep the scene quiet enough for large white webpage text to be overlaid separately. The subject is the same overlapping Korean financial newspapers. All printed pages, headlines and photographs remain fixed and legible exactly as in the reference; do not redraw, morph or animate any text. No pages flying, turning, sliding or added coins. Almost still overhead camera with a tiny smooth push-in and subtle natural raking-light parallax across the paper texture.


## 검은 종이 위 흰 손글씨 편지 (적용 취소, 원본 보관)
- 후속 사용자 요청으로 사이트 본문은 텍스트 버전으로 복원했습니다.
- 웹 자산: [letter-handwritten-gpt-2-5-v1.webp](letter-handwritten-gpt-2-5-v1.webp), 2336×3504, 621540 bytes.
- 원본: [letter-handwritten-gpt-2-5-v1.png](letter-handwritten-gpt-2-5-v1.png).
- 생성: Higgsfield, GPT Image 2.5 (`gpt_image_2_5`), flare / high / 4k / 2:3.
- 작업 ID: 9531fc20-c757-4275-a23e-6f8e9a38db2b.
- 사용자의 본문을 검은 종이에 흰 젤펜으로 쓴 모습으로 새로 생성했습니다. 실제 친필 사진은 아닙니다. 생성 원본을 검수한 뒤 같은 크기의 웹용 WebP로 압축했으며, 원문은 웹페이지에서 텍스트로도 읽을 수 있습니다.
- 최종 생성 프롬프트:

Create a premium photorealistic scan of a PERSONAL HANDWRITTEN KOREAN LETTER written with opaque WHITE GEL PEN on a BLACK MATTE SHEET OF PAPER. Vertical portrait 2:3 aspect ratio. This is a standalone website asset, not a screenshot or website mockup. The page itself fills the image edge to edge, straight-on scan, no perspective, no table, no hands, no pen, no extra objects, no border. Subtle finely textured black archival paper, nearly black #0b0c10, understated organic paper grain. Crisp softly off-white handwritten strokes with natural pressure variation, ink pooling at turns, slightly irregular letter sizes, small baseline variations, consistent handwriting by one adult author. Authentic neat everyday Korean handwriting, thoughtful and calm, not a typeset font, not brush calligraphy, not chalkboard lettering. Large readable Hangul, generous side margins around 7%, paragraph breathing room; fill the sheet evenly with all the text. No masthead, no added title, no signature, no date, no flourishes. Every word must match exactly. Do not invent, omit or change any Korean characters. All the text is WHITE, including any emphasis. Add only one subtle hand-drawn white underline under '트레이딩 수입이 월급을 앞지릅니다.' and a small underline under '월급반'. Preserve these line and paragraph breaks as closely as possible. Ensure final sentence is fully inside the sheet. Render ONLY the following letter text, with no quotation marks around the full letter:

글로벌트레이더협회는 늘 애널리스트,
코치진 인력난에 시달립니다.

제가 직접 양성한 애널리스트와 코치들은
입사 후 얼마 지나지 않아
트레이딩 수입이 월급을 앞지릅니다.
시간이 흘러 월급과의 격차가 더욱 벌어지면
자본주의 논리에 따라 근로소득이 아닌
투자소득을 택하게 됩니다.

억대 연봉을 뒤로하고 협회를 떠나
개인 트레이더로서의 삶에
집중하는 분들도 있습니다.

협회를 이끄는 대표로서는 안타까운 일이지만,
트레이딩 코치로서는 좋은 영감과 자극이 됩니다.

협회 내부 양성 과정을 체계화하여 제공했을 때,
근로소득을 앞지르는 투자소득을 만드는 분들,
월 수입이 2배로 늘어나 삶의 질이 올라가는 분들,
더 많은 시간적·공간적 자유를 누리는 분들이 생긴다면

협회의 오랜 고민이 오히려
가장 큰 보람이 될 것입니다.
이런 고민 끝에 내놓은 것이 월급반입니다.


2026-10-15. 집·자동차는 내장 image_gen 도구로 생성했습니다. 웹용 WebP는 생성 원본과 같은 크기로 압축했습니다.

## 검은 주택
- 웹 자산: [intro-house-generated-v1.webp](intro-house-generated-v1.webp)
- 원본: /Users/jfounders/Library/Application Support/orca/codex-accounts/2332ce93-c844-4dbe-9e17-e412ee604330/home/generated_images/01a13dab-3e14-71d1-a2aa-a2afcc0afedd/exec-27af5403-6f54-4da9-9072-a8cb9ec516bc.png
- 최종 생성 프롬프트:

Use case: ads-marketing. Asset type: cinematic full-screen website hero BACKGROUND PHOTOGRAPH. Create one NEW photorealistic widescreen 16:9 architecture image. Subject: a prestigious contemporary three-story detached mansion in a quiet Korean hillside residential neighborhood, seen from a slightly low street-level three-quarter angle. Architecture inspired by a compact stacked-box modern luxury home: strong rectangular flat-roof volumes, one taller vertical block on the left, recessed long upper terrace with glass railings on the right, narrow vertical windows, low solid perimeter wall and discreet gate. Make the exterior BLACK and dark charcoal natural stone, absolutely not white or cream. Nighttime with a nearly black slate-blue sky; extremely restrained warm interior and small architectural wall lights outline the dark building, elegant cool moonlit edges, deep shadows. The house fills the middle 60% of the composition and remains recognizable, whole rooftop visible, some foliage at the base, a quiet dark stone street in foreground. Match a dark black-luxury-sedan advertisement mood: cinematic premium photography, understated black/graphite palette, subtle warm light accents only, realistic materials and natural perspective. Keep the image dark enough for a large centered WHITE webpage heading placed separately in HTML, no glaring bright windows at center. No cars, no people, no lettering, no text, no logos, no watermark, no border, no UI, do not render a webpage. Output a polished real-photo-like background asset, landscape 16:9.

## 검은 세단
- 웹 자산: [intro-car-generated-v1.webp](intro-car-generated-v1.webp)
- 원본: /Users/jfounders/Library/Application Support/orca/codex-accounts/2332ce93-c844-4dbe-9e17-e412ee604330/home/generated_images/01a13dab-3e14-71d1-a2aa-a2afcc0afedd/exec-f63ba10d-d749-4423-81b1-9c23519ae444.png
- 최종 생성 프롬프트:

Use case: ads-marketing. Asset type: full-screen website hero BACKGROUND PHOTOGRAPH, widescreen 16:9 landscape. Generate a new photorealistic premium automotive photograph: a glossy jet-black, sleek four-door luxury sports sedan in exact full side profile facing LEFT, parked on the upper landing of broad dark stone architectural steps. Complete car visible, both wheels and front/rear bumpers in frame, car about 68% of image width, roofline around 57% of image height, wheels around 75%; lower quarter consists of thin horizontal step edges descending into black. Empty atmospheric charcoal/slate dusk sky fills the upper half, smooth and quiet with a subtle desaturated violet-gray glow behind the car and near-black top edge. The reference mood is an understated, very dark luxury-car advertisement, minimal composition, delicate cool rim light defining roof, windows, hood and wheels; tasteful white LED headlight on left and faint red rear light on right. Low-angle 85mm commercial photography, realistic black metal and glass reflections, crisp restrained detail, elegant and believable, no people, no buildings, no street traffic. Keep the middle band sufficiently dark and uncluttered for a large WHITE HTML heading placed separately by the website. No lettering, no text, no typography, no logo, no watermark, no borders, no UI. Do not draw the webpage or a screenshot. Output just one polished photographic background asset, landscape 16:9.

## 대표님 사진
- 사용자 제공 대표님사진.JPG를 사용했습니다. 생성 도구로 인물을 수정하지 않았습니다.
- 웹 자산: [mentor-trading-v1.webp](mentor-trading-v1.webp), 2400×1600.
- 어두운 오버레이는 CSS로 적용했습니다.

2026-10-15 후속 수정: 대표님 사진은 요청에 따라 웹 화면에서 제거했습니다.

## 검은 스포츠카 — v2 (현재 적용)
- 웹 자산: [intro-car-generated-v2.webp](intro-car-generated-v2.webp), 1672×941.
- 도구: 내장 image_gen. 기존 생성 세단을 참고해 낮은 2도어 스포츠카로 새로 생성하고 계단·가로 줄무늬를 제거했습니다.
- 원본: /Users/jfounders/Library/Application Support/orca/codex-accounts/2332ce93-c844-4dbe-9e17-e412ee604330/home/generated_images/01a13dab-3e14-71d1-a2aa-a2afcc0afedd/exec-993ed4cc-3073-4dbc-be49-5360c4a9380b.png
- 최종 생성 프롬프트:

Use case: precise-object-edit. Edit the supplied generated automotive background. Replace the four-door luxury sedan with a photorealistic jet-black two-door exotic sports coupe: dramatically low roof and nose, short sleek cabin, wide rear haunches, sculpted aerodynamic body, large performance wheels, restrained side air intake, front facing LEFT in clean full side profile. It must unmistakably read as a sleek supercar, not a sedan. Keep the whole car visible at a similar horizontal position and width, preserve the existing widescreen 16:9 composition, moody dark charcoal/slate dusk sky, cool restrained rim light and premium photographic realism. Completely REMOVE the staircase/platform and ALL horizontal stripes, step edges, ridges, tiled lines, or repeated bands from the foreground. Replace the entire lower foreground with a smooth seamless flat dark matte ground that softly fades to near-black toward the bottom, with only a subtle natural contact shadow under the tires. No sharp horizon stripe. Keep a quiet dark center for a large WHITE heading that will be added separately in HTML. No people, no buildings, no text, no logos, no watermarks, no webpage UI. The two required changes are the sporty low two-door car and the plain unstriped smooth ground.

## 코인·투자 신문 더미 (현재 적용)
- 웹 자산: [intro-news-gpt-image-2-5-v1.webp](intro-news-gpt-image-2-5-v1.webp), 2688×1520.
- 원본: [intro-news-gpt-image-2-5-v1.png](intro-news-gpt-image-2-5-v1.png).
- 생성: Higgsfield, GPT Image 2.5 (`gpt_image_2_5`), flare / high / 2k / 16:9.
- 작업 ID: aea3c873-11e9-4036-8e42-8bbe4110f210.
- 실제 기사를 재사용하지 않고 가상의 금융 신문 이미지를 새로 생성했습니다. 웹용 WebP 압축 외 추가 이미지 편집은 하지 않았습니다. 어두운 오버레이는 CSS입니다.
- 최종 생성 프롬프트:

Use case: ads-marketing. Asset type: widescreen 16:9 full-screen website background photograph, NOT a website mockup. Create a photorealistic editorial still life of many printed Korean financial newspapers and news clippings piled and overlapping across a large dark desk. Visually convey the flood of sensational stories about people making fortunes from cryptocurrency and investing. Layered broadsheet newspapers, folded corners, thick uneven stacks, beautiful realistic matte paper grain, dense Korean article columns and black-and-white financial photography, occasional small Bitcoin imagery and stock-market charts printed ON the papers. Some headline fragments can read '코인 투자로 인생 역전', '투자로 거둔 성공', '가상자산 열풍', '새로운 부의 탄생'. Use invented generic editorial pages, no actual publication mastheads or logos and no real identifiable people; this is an illustrative news collage. Top-down camera with a slight oblique angle to show paper stack depth. Papers fill the entire frame with varying natural diagonals and overlap, no single dominant newspaper or central portrait, no hands or loose physical coins. Restrained grayscale and muted charcoal tones, dim dramatic directional studio light, dark falloff at the edges; low-key photographic realism, tactile archival feel. Keep the central area lower contrast and visually quiet enough to support a large white webpage heading added separately in HTML, yet still visibly newsprint. No colored advertising, no browser UI, no extra big overlay slogan, no watermark, no border. Output a polished photographic landscape 16:9 asset.

