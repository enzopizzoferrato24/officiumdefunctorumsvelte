# Office of the Dead - Svelte Application

A modern Svelte implementation of the traditional Roman Office of the Dead website, featuring liturgical prayers, meditations, and commission services.

## Project Structure

This Svelte application has been rebuilt from the original HTML website with the following improvements:

### Component Architecture
- **Reusable Components**: Common elements like headers, footers, and liturgical text have been extracted into reusable Svelte components
- **Consolidated CSS**: All styles have been consolidated into utility classes and component-specific styles
- **Responsive Design**: Mobile-first approach with responsive layouts

### Key Components

- `Header.svelte` - Site navigation and branding
- `Footer.svelte` - Footer with contact information and branding
- `PageImage.svelte` - Decorative image component
- `TwoColumnLayout.svelte` - Latin/English parallel text layout
- `Lettrine.svelte` - Drop cap component for liturgical text
- `Rubric.svelte` - Liturgical instruction styling
- `PsalmVerse.svelte` - Psalm verse formatting
- `LiturgicalText.svelte` - General liturgical text processing

### Utility Functions

The `src/lib/utils.js` file contains utility functions for:
- Processing liturgical markup
- Formatting rubrics and antiphons
- Creating drop caps (lettrines)
- CSS class utilities
- Common liturgical patterns

### Pages

- `/` - Home page with mission statement
- `/about` - Meditation on the Office of the Dead
- `/preparation` - Preparation instructions (placeholder)
- `/vespers` - Vespers prayers (sample content)
- `/matins` - Matins prayers (placeholder)
- `/lauds` - Lauds prayers (placeholder)
- `/purchase` - Book purchase and prayer commission form

## Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

### Responsive Design
- Mobile-first approach
- Collapsible two-column layout on small screens
- Optimized typography for different screen sizes

### Liturgical Typography
- Custom font loading for EB Garamond and Libre Baskerville
- Proper liturgical markup with rubrics
- Drop cap (lettrine) support
- Responsive text sizing

### Interactive Elements
- Commission prayer form with email integration
- Active navigation highlighting
- Smooth transitions and hover effects

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## Assets Required

The following assets need to be added to the `static/` directory:

### Fonts (`static/caligraphy/`)
- EBGaramond font files (.woff2)
- LibreBaskerville-Bold.woff2
- LasanceInitials.woff2

### Images (`static/visuals/`)
- souls.jpeg
- crucifixion.png
- animeinpurgatorio.jpeg
- requiem.jpeg
- CS_LOGO_Full_white.png

## Deployment

This Svelte application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Traditional web hosting

The build output will be in the `build/` directory after running `npm run build`.

## Original HTML Structure

This Svelte application maintains the same visual design and functionality as the original HTML website while providing:
- Better code organization
- Reusable components
- Improved maintainability
- Modern development workflow
- Enhanced performance

## License

Based on the original Office of the Dead website content.
