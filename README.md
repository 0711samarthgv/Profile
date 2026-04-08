# Samarth G V Portfolio

Premium, recruiter-focused personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Premium Features Included

- Cursor spotlight glow interaction (desktop pointers)
- Scroll progress indicator at top
- Animated section reveal transitions
- Project filtering with animated card layout
- Polished mobile navigation menu
- GitHub live stats integration via GitHub API

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Folder Structure

```text
profile/
  src/
    components/
      About.jsx
      Achievements.jsx
      Contact.jsx
      Experience.jsx
      Hero.jsx
      Navbar.jsx
      Projects.jsx
      SectionTitle.jsx
      Skills.jsx
    data/
      portfolioData.json
    hooks/
      useTheme.js
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Setup Instructions

1. Install Node.js (LTS recommended).
2. Install dependencies:

```bash
npm install
```

3. Start local dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel auto-detects Vite settings.
4. Ensure:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

## How to Update Content Easily

Edit only `src/data/portfolioData.json`:

- Personal info and links
- Skills categories
- Projects (description, stack, features, impact, links)
- Experience and achievements
- GitHub username for live stats (`personal.githubUsername`)

No component edits required for regular content updates.

## Notes

- Replace placeholder links in `portfolioData.json` (`github`, `linkedin`, `demo`) with real URLs.
- Add your resume file to `public/Samarth_GV_Resume.pdf` for the download button.
