# DFORTH Technologies — Website

A responsive, multi-page marketing website for DFORTH Technologies, built as a
self-contained static site (HTML + CSS + vanilla JS). No build step required.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, services, process, testimonials, CTA |
| `services.html` | Services detail + engagement models |
| `about.html` | Company story, values, team |
| `blog.html` | Blog listing (featured + grid) |
| `blog-detail.html` | Single article layout |
| `contact.html` | Contact form + details |

## Structure
```
dforth-site/
├── index.html, services.html, about.html, blog.html, blog-detail.html, contact.html
├── assets/
│   ├── css/styles.css   # full design system
│   ├── js/main.js       # nav, scroll reveal, counters, FAQ, form
│   └── img/             # (logo / local images, if added)
└── README.md
```

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
cd dforth-site
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy
Drag the `dforth-site` folder into Netlify, or run `vercel` from inside it — it's
plain static files, so any host works.

## Brand
- Gradient: violet `#7c5cfc` → magenta `#e14eca`
- Fonts: Poppins (display) + Inter (body)
- Contact: info@dforth.in · Temple Tower, Nandanam, Chennai

## Notes
- Article/blog/team images load from Unsplash CDN. Swap the `src` URLs for your own
  assets (drop files in `assets/img/`) when you have final photography.
- The contact form is front-end only (shows a success message). Wire it to a backend,
  Formspree, or Netlify Forms to receive submissions.
