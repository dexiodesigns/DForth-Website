# DFORTH Website — Project Instructions

Static marketing site (HTML + CSS + vanilla JS, no build step) for **DFORTH**, the brand
of **Dexio LabX Pvt. Ltd.** Pages: `index`, `services`, `about`, `blog`, `blog-detail`, `contact`.

New design system lives in `assets/css/dforth.css`; `index.html` is the flagship. Other
pages still use the legacy `assets/css/styles.css` until migrated. JS hooks in
`assets/js/main.js`: `.reveal` scroll reveal, `[data-count]` counters, nav burger, FAQ, form.

## Design Context

### Users
Primary visitor is **enterprise procurement / vendor-evaluation teams** vetting DFORTH as an
outsourcing & dedicated-tech-talent partner. Due-diligence mindset; they value credibility,
process maturity, scale, and proof over hype.

### Brand Personality
**Confident · technical · precise.** Engineering-led and restrained. Trust through evident craft.

### Aesthetic Direction
**Editorial light.** Magazine-grade typography, asymmetric grids, generous whitespace, clear
hierarchy, one sharp accent used sparingly. Light theme.

- **Anti-references (NEVER):** gradient text, gradient buttons, decorative blobs, glassmorphism,
  neon-on-dark, purple→blue gradients, identical icon-card grids, centered-everything templates.

### Design Principles
0. Fonts: **Archivo Expanded** (display) + **Archivo** (labels/UI) + **Spectral** (serif body).
   Brand color = logo violet (#9370DB ≈ 300°) as a deep plum-ink; magenta (#EA4EE3 ≈ 350°) is
   the single rare accent. OKLCH tokens, neutrals tinted toward 300°. No gradients.
1. Type carries the design — hierarchy via scale/weight, not color.
2. Whitespace is structure — asymmetric, left-aligned, not everything is a card.
3. One accent, earned (~10% weight max).
4. Evidence over adjectives — process, numbers, specifics.
5. No AI tells — if it reads as "an AI made this," rebuild it.

See `.impeccable.md` for the full context.
