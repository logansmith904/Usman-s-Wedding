# Usman & Fajar Wedding Invitation

A polished static wedding invitation website for Usman and Fajar. The invite includes event details, Google Maps directions, WhatsApp RSVP, a live countdown, refined animations, and responsive layouts for mobile and desktop.

## Features

- Premium emerald, ivory, rose, and gold visual system
- Animated hero, reveal transitions, petals, and sparkles
- Countdown to the Mehndi celebration on 31 July 2026
- WhatsApp RSVP button linked to `+92 321 7111555`
- Google Maps buttons for Mehndi, Barat, and Waleema venues
- Mobile-first responsive design
- Reduced-motion support for visitors who prefer less animation

## Event Links

- Mehndi: 88 Mian Colony, Ferozepur Road, Lahore
- Barat: Rida Marquee, Main GT Road, Near DHA, Gujranwala
- Waleema: Viva La Vida, Garrison Events Complex, Lahore Cantt

## Preview Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server preview, run one of these commands from the repository root:

```bash
python -m http.server 8080
```

or:

```bash
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/static.yml` that deploys the static site to GitHub Pages.

To enable or verify deployment:

1. Open the repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push changes to the `main` branch.
5. Open the **Actions** tab and wait for **Deploy static content to Pages** to finish.
6. The published site URL appears in the workflow summary and the Pages settings screen.

## Editing Content

- Update invitation text and event details in `index.html`.
- Update visuals, spacing, and responsive behavior in `style.css`.
- Update countdown and animation behavior in `script.js`.
