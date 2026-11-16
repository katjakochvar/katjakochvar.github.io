# Katja Kochvar — personal website

Plain HTML/CSS/JS site for GitHub Pages. No build step needed.

## Publish on GitHub Pages
1. Create a free account at github.com.
2. Click **New repository** and name it exactly `YOURUSERNAME.github.io`. Make it Public.
3. Click **uploading an existing file**, drag in *all* the files from this folder, and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", pick `main` and `/ (root)`, then click Save.
5. After a minute or two the site is live at `https://YOURUSERNAME.github.io`.

## Files
- `index.html`: Home
- `vervain-hummingbird.html`, `broad-tailed-hummingbird.html`, `atlantic-puffin.html`, `song-sparrow.html`: Research pages
- `publications.html`, `outreach.html`
- `style.css`: colors, fonts and layout (colors copied from the Wix site)
- `site.js`: scroll fade-ins and the photo gallery viewer

## Notes
- **Photos** load from Wix's image server (`static.wixstatic.com`), and so does your CV PDF. These work as long as your free Wix site exists. To be fully independent of Wix, download them into an `images/` folder and change the `src=` / `href=` links.
- **Fonts:** headings use DM Sans, the same font as on Wix. Body text uses Outfit, a free look-alike of Gilroy (Gilroy is a paid font that Wix licenses).

## Editing later
Open any `.html` file on GitHub, click the pencil icon, edit the text, and commit. The site updates in about a minute.
