# Smelly Cat Games

A mobile-friendly static landing page for Smelly Cat Games.

## Included

- Responsive landing page with hero, games, community, token, and signup sections.
- Existing logo: `Screenshot_20260927_142949_Google(2).jpg`.
- Contract address intentionally shown as `HL7eSXzfXWL1Dwx6EueW6Qm3djSF1KbQCXAvdLWErvqj`.
- Netlify Forms-ready email signup form.
- `netlify.toml` configured for a zero-build static deployment.

## Deploy on Netlify

1. Open Netlify and choose **Add new site → Import an existing project**.
2. Select `smellycatgme/smellycat-games`.
3. Leave the build command empty.
4. Set the publish directory to `.` (the repository root).
5. Deploy.

Netlify will serve `index.html` directly. No npm install or build step is required.

## Local check

From the repository root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
