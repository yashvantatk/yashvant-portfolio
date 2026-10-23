# Yashvant A T K — Developer Portfolio

React 19 + Vite + Tailwind CSS + Framer Motion + React Three Fiber.
A standalone rebuild of the Emergent template, with no backend needed.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # output in dist/
```

## Deploy to Vercel
Push this folder to a GitHub repo, import it on vercel.com (framework: Vite), and deploy. No environment variables needed.

## Editing content
Every word on the site comes from `src/data/portfolioData.js`.
- Resume: replace `public/Yashvant_ATK_Resume.pdf`.
- Contact form opens the visitor's email app (mailto), so no server is required.
- Project images: replace the `IMAGES` URLs or add screenshots to `public/` and point `image` at them.
