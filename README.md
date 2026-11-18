# Akash Kumar — Creative Modern Portfolio

A dark, creative-hybrid developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Requirements
- Node.js 20.9+ (Node 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before publishing — personalize these items
1. The cinematic portfolio portrait is already included at `public/images/akash-cinematic-portrait.png`.
2. The hero already uses the supplied portrait through `next/image`.
3. The contact email and phone are populated from the supplied resume; verify they are current before publishing.
4. GitHub and LinkedIn links are populated from the supplied profile URLs.
5. Your supplied resume is included as `public/Akash-Kumar-Resume.pdf` and linked from the hero.
6. Verify each project description and status. The current entries are marked **In development**; update only when features are genuinely complete.
7. Update `metadataBase` in `src/app/layout.tsx` after choosing your domain.
8. Add real project screenshots and repository/demo links when available.

## Portrait implementation (already configured)
The hero portrait is already implemented. To change it, replace `public/images/akash-cinematic-portrait.png` and retain the same filename.
```tsx
import Image from "next/image";
// ...
<div className="portrait-photo">
  <Image src="/images/akash-portrait.jpg" alt="Akash Kumar" fill priority
    sizes="(max-width: 850px) 80vw, 40vw" style={{objectFit:"cover", objectPosition:"center top"}} />
</div>
```
Add `.portrait-photo { position:relative; width:76%; height:88%; overflow:hidden; border-radius:46% 46% 24px 24px; border:1px solid #ffffff35; }` to `globals.css`.

## Deployment
Push the repository to GitHub, import it into Vercel, and deploy with the default Next.js settings.


## Ultra animation system
Includes an AK preloader, scroll progress, pointer spotlight and cursor trail, optional sound accent toggle, hero 3D orbit, floating portrait treatment, tilt/glow cards, reveal-on-scroll, animated stats and timeline glow. Motion respects reduced-motion settings and touch layouts.
