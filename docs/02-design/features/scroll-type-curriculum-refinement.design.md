# Scroll, typography and curriculum design

2026-10-15

Supersedes only the wheel momentum rule in intro-refinement and reality title sizing in reality-letter-application. Retains site-motion-polish videos and effects.

## Wheel movement

A reproduced 1.4-second decaying wheel sequence incorrectly advances two scenes because the existing760ms guard expires while momentum continues. Keep the620ms transition and760ms fixed guard. Track wheel gesture consumption, last event time/delta and whether deltas are decaying. A180ms input gap, a direction change or a clear renewed acceleration can start a new gesture. Large stable non-decaying wheel pulses remain usable for sustained deliberate scrolling after the fixed guard; decaying tails stay consumed. Never extend the fixed guard on each wheel event. Do not queue a movement during transition. Reset gesture state when navigation is cancelled. Keyboard/touch/native anchor behavior stays intact. Natural scrolling after the third scene resumes with fresh input.

## Reality typography

Two statements: desktop clamp(36px,3.9vw,66px), mobile clamp(26px,7.1vw,38px); existing1.22 line-height and shared size retained. 하지만: desktop clamp(32px,2.8vw,44px), mobile28px, weight600,line-height1.4. Preserve single warm background, central alignment and full-view minimum height.

## Curriculum paper preview

Replace dark dashed placeholder with a white paper panel: minimum440px desktop/360px mobile, rounded16px, clipped border and subtle shadow. Decorative aria-hidden document contains existing curriculum title and the three already-stated focus areas, with generic writing arranged in rows. Blur4.5px and muted ink; no real private curriculum is embedded. White translucent center gradient supports sharp text ‘상세 커리큘럼은 수강생 분들에게 공개합니다.’. Keep decorative document inaccessible to screen readers, non-interactive and unselectable. No new dependencies or generated images needed.

## Verification

Reproduce long decaying momentum before and after. Validate isolated and successive gestures, uninterrupted stable wheel pulses, renewed acceleration, reverse direction, keyboard, reduced motion, natural scrolling after third scene. Check desktop1440/1920 and mobile390/320 typography, paper dimensions, content and no overflow. Visually inspect both changed sections. Publish through Sites source workflow.
