# Working on bridgecivictech.org

A static site built with [Eleventy](https://www.11ty.dev/). No client framework, no CSS framework; the only browser JavaScript is `site/assets/email.js`.

```sh
pnpm install
pnpm dev     # http://localhost:8080, reloads on save
pnpm build   # writes _site/
```

Pushing to `main` builds the site, checks accessibility, then deploys to GitHub Pages (`.github/workflows/site.yml`). Pull requests run the same build and check without deploying.

Every pull request also gets a preview build on Cloudflare Pages (project `the-bridge`, preview only; the live site stays on GitHub Pages). Cloudflare comments the preview URL on the PR. Share that link for review instead of running the site locally.

## Accessibility

Every built page is checked with [Pa11y CI](https://github.com/pa11y/pa11y-ci) against WCAG 2 AA, using both the axe and HTML_CodeSniffer runners (`.pa11yci.json`). Any violation fails the workflow and blocks the deploy. To run it locally after `pnpm build`:

```sh
python3 -m http.server 8080 --directory _site &
npx pa11y-ci@4 --config .pa11yci.json http://localhost:8080/ http://localhost:8080/procurement/
```

Automated checks miss things. After changing layout or interaction, also tab through the page with the keyboard and check it with a screen reader (VoiceOver on macOS).

## Where things are

| To change | Edit |
| --- | --- |
| Home page copy, buttons, photos | Front matter in `site/index.md` |
| Procurement vehicles and copy | Front matter in `site/procurement.md` |
| Page title, meta tags, header nav, footer | `site/_includes/base.njk` |
| Home page structure | `site/_includes/home.njk` |
| Procurement page structure | `site/_includes/procurement.njk` |
| Colors, fonts, spacing, all styling | `site/assets/style.css` (tokens at the top) |
| 404 page | `site/404.md` |

## Conventions

- Copy lives in front matter or Markdown; layouts in `site/_includes` only arrange it. Text fields in front matter are Markdown (`**bold**`, `[link](url)`).
- A new page is a new `.md` file in `site/` with `layout: base.njk`, `title` and `description`. Its URL follows the file name (`site/about.md` becomes `/about/`).
- Styling goes in `site/assets/style.css` using the custom properties at the top. Keep class names plain and meaningful; don't add a CSS framework.
- Photos: grayscale WebP at 800, 1600 and 2400 px wide, named `<name>-<width>.webp` in `site/assets/img/`, quality around 68. Pages tint them with `tint: peach | lime | lavender`. Full-resolution originals live in `source-images/`, which is not published.
- Never put a plain `mailto:` or email address in the HTML; use `{% include "email.njk" %}`.
- Keep dependencies to Eleventy alone unless there's a strong reason.
- Check a change by running `pnpm build` and viewing the page at phone and desktop widths, in light and dark mode.
