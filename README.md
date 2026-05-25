# Gokul Jayachandran Portfolio

## Overview
Personal portfolio website for Gokul Jayachandran, an Aspiring Techno-Functional Business Analyst.
Built with React + Vite frontend and Express backend, using the dark theme from a Figma template.

## Architecture
- **Frontend**: React 18 + Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express 5 (minimal, serves frontend)
- **Styling**: Dark theme (black/purple accent #a78bfa), DM Sans + Inter fonts, glass-card design pattern
- **Routing**: wouter (single page with anchor navigation)

## Structure
```
client/src/
  pages/
    FrameScreen.tsx          - Main portfolio page (composes all sections)
    sections/
      NavSection.tsx         - Fixed navigation bar
      HeroSection.tsx        - Hero with background photo, profile pic, social links
      AboutSection.tsx       - About me with highlight cards
      SkillsSection.tsx      - Skills grid (programming, databases, tools, BA, concepts, soft skills)
      ProjectsSection.tsx    - Project cards (4 featured projects)
      ExperienceSection.tsx  - Experience timeline + certifications
      ContactSection.tsx     - Contact CTA and footer
  components/ui/             - shadcn/ui components
  lib/queryClient.ts         - TanStack Query setup
server/
  routes.ts                  - API routes (currently empty)
  storage.ts                 - Storage interface
```

## Key Details
- **Name**: Gokul Jayachandran
- **Email**: gokuljai2006@gmail.com
- **GitHub**: gokeeel
- **LinkedIn**: gokeeel
- **Location**: Chennai, India
- **Photos**: background-photo and profile-photo in attached_assets/
- **Color scheme**: Black bg (#000), Cards (#1e1e1e), Accents (#a78bfa purple), Text (#fff, #a9a9a9)
