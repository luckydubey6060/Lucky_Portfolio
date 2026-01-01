# Portfolio Website - Lucky Dubey

## Overview

A modern, professional Data Scientist portfolio website built with React and Vite. The site showcases Lucky Dubey's work as a Data Scientist / Data Analyst / AI Engineer, featuring projects, skills, certifications, and professional experience. The design follows a dark-mode-first approach with recruiter-ready presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18 with Vite**: Chosen for fast development experience and optimized production builds. Vite provides instant hot module replacement and efficient bundling.
- **Component Structure**: React functional components with hooks for state management and side effects.

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent design system.
- **Custom Fonts**: Plus Jakarta Sans for body text and Outfit for headings, imported via Google Fonts.
- **Dark Mode Default**: Site designed primarily for dark theme with light mode toggle capability.

### Animation System
- **Framer Motion**: Used for smooth animations and transitions throughout the site.
- **Custom useInView Hook**: Intersection Observer-based hook for scroll-triggered animations and lazy loading effects.

### UI Components
- **Lucide React**: Icon library for consistent, clean iconography.
- **Recharts**: Data visualization library for project-related charts and graphs.

### Build Configuration
- **Vite Config**: Development server configured for host `0.0.0.0` on port `5000` with open host access for Replit compatibility.
- **PostCSS**: Configured with Tailwind CSS and Autoprefixer for CSS processing.

### Project Structure
```
src/
├── main.jsx          # Application entry point
├── index.css         # Global styles with Tailwind imports
└── hooks/
    └── useInView.js  # Custom intersection observer hook
```

## External Dependencies

### Core Libraries
- **react / react-dom**: UI component library
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite

### Styling & Animation
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: CSS vendor prefixing
- **postcss**: CSS transformation tool
- **framer-motion**: Animation library

### UI Components
- **lucide-react**: Icon library
- **recharts**: Charting library for data visualizations

### External Services
- **Google Fonts**: Plus Jakarta Sans and Outfit font families
- **GitHub Integration**: Links to https://github.com/luckydubey6060
- **LinkedIn Integration**: Professional profile linking

### Legacy Assets (Unused)
The repository contains legacy files from a previous HTML/CSS/jQuery template (script.js, style.css) that are not used in the current React implementation. These can be safely removed.