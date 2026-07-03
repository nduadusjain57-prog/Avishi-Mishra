# Avishi Mishra — Personal Brand Website

A 5-page static website built for an academic personal-branding case study, styled as a cozy pastel "study journal" — polaroid photos, washi tape, and a planner-tab navigation.

## Pages
- `index.html` — Home
- `about.html` — About / story / timeline
- `content.html` — Platform breakdown (YouTube / Instagram / LinkedIn) with interactive tabs
- `press-kit.html` — Brand overview, audience snapshot, SWOT
- `contact.html` — Contact form (JS-validated) + FAQ accordion

## Structure
```
avishi-site/
├── index.html
├── about.html
├── content.html
├── press-kit.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── selfie-candid.png
│   ├── taj-portrait.png
│   ├── campus-formal.png
│   └── outdoor-formal.png
└── README.md
```

## Features
- Fully responsive (mobile hamburger menu, fluid grids down to 360px)
- Scroll-reveal animations via IntersectionObserver
- Interactive platform tabs on the Content page
- Gallery lightbox on the About page
- Client-side validated contact form
- FAQ accordion
- Accessible: skip link, visible focus states, `prefers-reduced-motion` respected

## How to publish on GitHub Pages
1. Create a new repository (e.g. `avishi-portfolio`) on GitHub.
2. Upload/push all files in this folder, **keeping the folder structure intact** (`css/`, `js/`, `images/` must stay alongside the `.html` files).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Notes for the case study
- All statistics on the Brand & Press Kit page are intentionally qualitative (platform count, audience age range, content pillars) rather than fabricated subscriber/engagement numbers, since private analytics aren't publicly available — consistent with the source case study's own methodology note.
- Social links point to Avishi's publicly listed YouTube (`youtube.com/@avishi`) and Instagram (`@avishimishh`) handles found via public search; the LinkedIn link is left as a placeholder (`#`) — swap in the real profile URL before publishing.
- The email address in the Contact page is a placeholder — replace with a real inbox if this site will actually be used to collect messages.
