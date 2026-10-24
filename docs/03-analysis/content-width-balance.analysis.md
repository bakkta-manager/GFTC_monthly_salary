# Content width balance — validation

2026-10-15

Design comparison complete. Expanded evidence/problems use centered 896px content width, reduced from1280px. Text remains left-aligned. Standard reading/form/nav shells remain narrower and centered. Full-width section backgrounds retained.

Chromium checked eight content shells at1920,1440,1024,768,390,320px. Equal left/right content margins within1px; no horizontal overflow. Evidence/problems content gutters are respectively512,272,64,40,20,20px. Body HTML and JavaScript are byte-identical to deployed v32; only CSS changed.

Desktop evidence/problems and mobile evidence screenshots visually reviewed. Existing fonts and minimum heights retained. No browser JavaScript errors.

Artifacts: /tmp/gftc-width-checks.json, /tmp/gftc-width-evidence-stage-1920.png, /tmp/gftc-width-problems-1920.png, /tmp/gftc-width-evidence-stage-390.png.

No remaining layout gaps found. Supabase setup remains a separate task.
