# Scroll, typography and curriculum verification

2026-10-15

Compared against docs/02-design/features/scroll-type-curriculum-refinement.design.md.

- Original bug reproduced: a single decaying1.4-second wheel sequence (28events,50ms apart) advanced to scrollY1670, skipping the car stop835.
- Same sequence after correction remains at835, including a further idle second. Fresh wheel input advances to1670; following natural scroll reaches1970.
- Continuous deliberate120px ticks advance through both sections instead of becoming locked. Renewed push during a momentum tail and reverse movement passed.
- Reduced-motion sequence stops correctly; PageDown navigation passed. No runtime page errors in tested cases. Keyboard/touch handlers unchanged.
- At1440px, statements56.16px and 하지만40.32px; at1920px,66px/44px. At390px,27.69px/28px; at320px,26px/28px. Paired statement sizes match at every width.
- White preview background rgb(247,246,242), document blur4.5px, sharp notice, decorative aria-hidden writing. Paper actual height531px desktop,448px at390 and562px at320; all greater than the former compact placeholder. No horizontal overflow at any tested width.
- Desktop/mobile screenshots of both sections reviewed. Original content order, videos, overlays, form, and other section copy preserved; only decorative curriculum preview text added.

All requested design outcomes implemented; no blocking gaps found. Browser QA used Chrome and mobile viewport emulation; physical trackpad hardware and real-device Safari were not separately tested.
