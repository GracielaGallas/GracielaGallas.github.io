# GracielaGallas.github.io

Graciela Gallas's personal landing page. Static site, no build step, no framework. Replaces `graciela.is-a.dev`. Style and conventions modeled on the sibling projects `dbohry.github.io` and `dkgg.de`.

## Design brief

Personal bio/contact page for a Senior QA Engineer. Professional front door, but it borrows the visual language of `dbohry.github.io` (neubrutalist/retro cards, hard shadows, theme toggle) and loosens the copy with light QA-flavored humor (bug jokes, the subtitle reroll, the glitch easter egg).

Non-negotiables:
- Real name, real contact links (email `graciela.carmen@gmail.com`, GitHub `GracielaGallas`, LinkedIn `graciela-gallas-075a1735`).
- Content parity with the old `graciela.is-a.dev` page: name, "Senior Quality Assurance Engineer", 10+ years, the QA blurb, three contact links.
- Real GitHub avatar (`images/avatar.webp`, fetched from `github.com/GracielaGallas`), swapping to a 🐞 on click/hold.
- Hold the avatar 10s → hidden glitch easter egg (`body.glitch-mode`, red Impact-font shake).

Open items:
- "10+ years" is hardcoded. Start year unknown; once known, compute it like `dbohry.github.io` does.
- No game mode (Press Start 2P), unlike `dbohry.github.io`. Add only if asked.

## Stack

- Plain HTML/CSS/JS. No bundler, no framework, no package.json.
- Fonts: Google Fonts `Rubik` (body, 400-700) + `Space Mono` (eyebrow accent) + `Bebas Neue` (glitch-mode easter egg only).
- Deployed as-is (GitHub Pages). No `CNAME` set; add one if a custom domain is wired up.

## Visual style

Playful neubrutalist look, shared with `dbohry.github.io` and `dkgg.de`:
- Thick borders (`3px solid var(--border)`), hard offset drop shadows (`6px 6px 0 var(--border)`, no blur).
- Avatar and contact buttons lift + pop shadow further out on hover; buttons press toward the shadow on `:active`.
- Light/dark via CSS custom properties + `prefers-color-scheme`, overridable by `#theme-toggle` which sets `data-theme` on `<html>` and persists the choice in `localStorage`.
- Differs from Daniel's page: teal avatar backdrop, teal→coral name gradient, yellow pill for the job title (`.role`).

## Colors

CSS custom properties on `:root`, redefined under `@media (prefers-color-scheme: dark)` and mirrored in `[data-theme]` overrides. Never hardcode a color in a rule — add/reuse a var instead (the glitch-mode red is the one exception).

```
--bg, --ink, --card, --border, --shadow, --coral, --teal, --yellow
```

## Interaction pattern (keep consistent)

```css
.thing{transition:transform .15s ease, box-shadow .15s ease}
.thing:hover{transform:translateY(-6px); box-shadow:8px 10px 0 var(--border)}
```

Buttons with a pressed state (`.btn`, `#theme-toggle`) translate toward the shadow and shrink it on `:active` instead.

## CSS conventions

- Single stylesheet (`css/style.css`), no preprocessor, no CSS-in-JS.
- Compact rule bodies (`selector{prop:val; prop:val}`) for simple rules; multi-line, one declaration per line, 2-space indent for complex ones.
- Sections ordered to match the DOM (reset/vars, theme toggle, hero, actions, footer, glitch-mode override, media queries).

## HTML conventions

- Semantic sectioning (`main > section`, `footer`), no div soup.
- External links get `target="_blank" rel="noopener"` (or `rel="me noopener"` for profile links).
- Cache-bust `style.css`/`script.js` via `?v=X.Y`; bump on visible changes.

## JS conventions

- Vanilla JS, no dependencies, `js/script.js` loaded at end of `body`.
- Small, self-contained behaviors (theme toggle, subtitle reroll, avatar hold easter egg) — no framework, keep it that way unless explicitly asked to add one.

## Tone

Professional but not stiff. Subtitle copy is a rotating set of QA one-liners (bugs, edge cases, "works on my machine") — match that voice when adding new lines. The first subtitle is the real blurb from the old site and is the default shown in the HTML.
