# ART PROJEKT Project Documentation

## Project Overview

ART PROJEKT is a modern Next.js website for a Slovak architectural and project design company (ART PROJEKT s.r.o.) based in Dolné Dubové, Slovakia. The website showcases their services including architectural design, engineering, construction supervision, budgeting, legalization of unauthorized constructions, and 3D rendering/modeling. The company has over 20 years of experience with 500+ completed projects.

## Project Structure

```
artprojekt/
├── public/                    # Static assets
│   └── images/               # All images (hero, logos, icons, references)
│       └── referencie/       # Project reference images
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout with Header, Footer, SmoothScroll
│   │   ├── page.tsx          # Homepage with services grid
│   │   ├── globals.css       # Global styles and Tailwind
│   │   ├── kontakt/          # Contact page
│   │   ├── referencie/       # Portfolio/references
│   │   │   ├── page.tsx      # References listing
│   │   │   └── [slug]/       # Dynamic project detail pages
│   │   ├── sluzby/           # Service pages
│   │   │   ├── architektonicke-projekcne-prace/
│   │   │   ├── inziniering/
│   │   │   ├── legalizacia-ciernych-stavieb/
│   │   │   ├── rozpoctovanie-stavieb/
│   │   │   ├── stavebny-autorsky-dozor/
│   │   │   └── 3d-rendering-modeling/
│   │   └── ochrana-osobnych-udajov/  # Privacy policy
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   ├── SmoothScroll.tsx  # Lenis smooth scroll wrapper
│   │   ├── PageTransition.tsx # Page transition animations
│   │   └── ServicePageLayout.tsx # Shared layout for service pages
│   └── lib/
│       └── projects.ts       # Project data and helper functions
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tailwind.config.ts
```

## Technologies Used

- **Next.js 16**: App Router, React Server Components
- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety
- **Tailwind CSS 4**: Utility-first styling
- **Framer Motion**: Page transitions and animations
- **GSAP + ScrollTrigger**: Advanced scroll animations
- **Lenis**: Smooth scroll experience
- **ESLint**: Code linting

## Architecture Overview

### App Router Structure
The project uses Next.js App Router with:
- `layout.tsx` - Root layout wrapping all pages with Header, Footer, and SmoothScroll
- Dynamic routes for project details (`/referencie/[slug]`)
- Dedicated folders for each service page under `/sluzby/`

### Component System
Components are modular and reusable:
- **SmoothScroll** - Wraps entire app for smooth scrolling via Lenis + GSAP
- **Header** - Responsive navigation with mobile menu
- **Footer** - Site footer with contact info and links
- **ServicePageLayout** - Shared layout component for all service pages
- **PageTransition** - Framer Motion page transitions

## Key Components

### SmoothScroll (`src/components/SmoothScroll.tsx`)
- Uses Lenis for buttery-smooth scrolling
- Integrated with GSAP ScrollTrigger for scroll-based animations
- Configuration: duration 1.2s, exponential easing, vertical orientation

### Header (`src/components/Header.tsx`)
- Responsive navigation
- Mobile hamburger menu
- Active link highlighting

### Footer (`src/components/Footer.tsx`)
- Company contact information
- Navigation links
- Social media links

### ServicePageLayout (`src/components/ServicePageLayout.tsx`)
- Reusable layout for all 6 service pages
- Consistent styling and structure

## Data Management

### Projects (`src/lib/projects.ts`)
```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  year: string;
  location: string;
  client: string;
  folder: string;
  images: string[];
  thumbnail: string;
}
```

Helper functions:
- `getProjectBySlug(slug)` - Get project by URL slug
- `getAllProjectSlugs()` - Get all project slugs for static generation

## Styling

### Tailwind CSS 4
- Utility-first approach
- Custom configuration for design tokens
- Responsive design with mobile-first approach

### Global Styles (`src/app/globals.css`)
- Lenis smooth scroll styles
- Base reset and typography
- Custom utility classes

### Design Tokens
- Font: Montserrat (300-700 weights)
- Colors: Dark theme with #222, #333, #444 backgrounds
- Language: Slovak (sk)

## Pages

### Homepage (`/`)
- 6-tile services grid with hover effects
- Background images with gradient overlays
- Stats bar: 500+ projects, 20+ years experience
- Link to references/portfolio

### Service Pages (`/sluzby/*`)
- Architektonické a projekčné práce
- Inžiniering
- Legalizácia čiernych stavieb
- Rozpočtovanie stavieb
- Stavebný a autorský dozor
- 3D rendering, 3D modeling

### References (`/referencie`)
- Project portfolio grid
- Dynamic project detail pages via `[slug]`

### Contact (`/kontakt`)
- Contact form
- Company information
- Map integration

### Privacy Policy (`/ochrana-osobnych-udajov`)
- GDPR-compliant privacy policy

## Content and Localization

- **Language**: Slovak (SK)
- **Business**: Architectural and project design company in Dolné Dubové
- **Services**:
  - Architektonické a projekčné práce (architectural design)
  - Inžiniering (engineering)
  - Legalizácia čiernych stavieb (construction legalization)
  - Rozpočtovanie stavieb (construction budgeting)
  - Stavebný a autorský dozor (construction supervision)
  - 3D rendering, 3D modeling
- **Website**: https://artprojekt.sk/

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Development Guidelines

### Adding New Pages
1. Create folder under `src/app/` with `page.tsx`
2. Use existing components (Header, Footer auto-included via layout)
3. For service pages, use `ServicePageLayout` component

### Adding New Projects
1. Add project data to `src/lib/projects.ts`
2. Add images to `public/images/referencie/`
3. Project will automatically appear on `/referencie` and get its own detail page

### Styling Guidelines
- Use Tailwind utility classes
- Follow existing responsive patterns (mobile-first)
- Use consistent spacing and color tokens

### Performance Considerations
- Images use Next.js `<Image>` for optimization
- Lenis provides smooth scrolling without jank
- GSAP animations are GPU-accelerated
- App Router enables automatic code splitting
