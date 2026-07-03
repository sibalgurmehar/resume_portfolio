# Gurmehar Kaur Sibal — Portfolio

A fast, responsive single-page portfolio website built from my resume.
No frameworks, no build step — just clean HTML, CSS, and a little vanilla JavaScript.

## Highlights
- Dark / light theme toggle (persisted in `localStorage`)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Fully responsive, accessible, and lightweight
- Sections: About · Experience · Projects · Publications & Patents · Skills · Contact

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)
1. Go to **Settings → Pages**
2. Set **Source** to the `main` branch, root folder
3. Your site goes live at `https://sibalgurmehar.github.io/resume_portfolio/`

## Structure
```
├── index.html   # markup & content
├── styles.css   # design system + layout
└── script.js    # nav, reveal, theme toggle
```

---
© Gurmehar Kaur Sibal · [LinkedIn](https://linkedin.com/in/gurmeharsibal) · sibalgurmehar@gmail.com
