# Scene action and full-screen content design

2026-10-15

## Generated video replacement

Generate three8-second1080p16:9 clips using the current start images and Kling3.0Turbo. House: static camera and building, naturally twinkling stars, slow cloud/tree movement. Car: steady side tracking shot keeping the whole car visible, actual wheel rotation and ground movement, restrained road mist. News: locked view with several top paper corners visibly lifting/rippling/settling, printed matter remains attached to sheets. Avoid rapid cuts, flashes and global zoom-only movement. Preserve existing overlay strengths, text and video behavior. Review multiple frames and temporal differences, then export H.264/no-audio/faststart with a short end-to-start dissolve; do not reverse driving or paper movement. Use versionedv2asset URLs to avoid old cache. Record prompts and provenance.

## Full-screen sections

Evidence: add a dedicated evidence-stage class while retaining letter semantics/reveal targets. Full width section, min-height calc(100svh -65px), content max1280px, responsive side gutters. Title clamp(36px,3.2vw,60px), body/pull clamp(19px,1.35vw,26px), line-height1.75, more room between paragraphs. Dark background stays edge-to-edge. Short viewports naturally grow with content.

Problems: same full-screen minimum height, inner content max1280px and larger type. Title clamp(36px,3.2vw,60px), item titles clamp(24px,1.8vw,32px), descriptions and keys clamp(19px,1.35vw,26px),1.75line-height. Preserve vertical numbered flow, light background, blue dot/line/highlights and existing intentional line breaks. Atmobile keep20px gutters,32px main titles,22px item titles,17px body; do not force everything into one screen.

## Copy

Replace with: 편하게 앉아서 영상만 시청하거나, 책 한두번만 읽어도 된다면 편할겁니다.

## Validation

Review visible video movement, stable geometry and loop transition; verify actual video URL/playback/control/fallback and corrected wheel gesture remains intact. Check both expanded sections at1440,1920,390,320px for width/font/minimum height and overflow. Exact copy assertion. Compare design with screenshots before publishing through Sites workflow.

## Evidence copy replacement (latest user correction)

Retain evidence heading and enlarged layout. Replace all body paragraphs with the user's GFTC staffing explanation, preserving submitted paragraph groups and line breaks. Highlight only ‘필연적으로 월급보다 트레이딩 수입이 높아집니다.’ with the existing blue strong style. The association/coach contrast remains the existing pull quote. Conclusion ends with ‘이번 월급반 커리큘럼이 나오게 되었습니다’. Remove the superseded salary/lifestyle conclusion completely.

Video export refinement: the generated house clip preserves the building but does not supply sufficiently visible stars. Composite a sparse field of twelve soft, independently twinkling points in the open sky in the actual MP4 using FFmpeg inside Higgsfield sandbox. Record this post-production step explicitly. Export every clip with a0.6-second forward end-to-start dissolve, no reversed playback.
