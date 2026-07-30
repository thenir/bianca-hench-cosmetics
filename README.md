# Bianca Hench Cosmetic Studio

A luxury landing page for Bianca Hench Cosmetic Studio - offering premium permanent makeup and beauty services.

## Features

- 🎨 Modern, luxury design with warm color palette
- 📱 Fully responsive layout
- ✨ Lead capture form for client inquiries
- 🔗 Instagram integration (@BiancaHenchPMU)
- ⚡ Built with Next.js 14 and Tailwind CSS
- 🚀 Optimized for Vercel deployment

## Color Palette

- **Peach**: #E8C4B8 (Warm, welcoming)
- **Teal**: #5FB3B3 (Luxury accent)
- **Brown**: #4A3C3C (Rich, elegant)
- **Cream**: #FAF7F5 (Soft background)
- **Gold**: #C9A882 (Premium touch)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Currently, the form submission is handled client-side. To integrate with a backend API:

1. Create a `.env.local` file
2. Add your API endpoint:
   ```
   NEXT_PUBLIC_API_URL=your-api-url
   ```
3. Update the form submission logic in `components/LeadForm.tsx`

## Customization

### Adding the Avatar Image

Replace the placeholder in `components/Hero.tsx` with the actual avatar:

1. Add your image to `/public/avatar.png`
2. Update the Hero component to use:
   ```tsx
   <Image
     src="/avatar.png"
     alt="Bianca Hench"
     width={400}
     height={400}
     className="rounded-full"
   />
   ```

### Modifying Services

Edit the services array in `components/Services.tsx` to add, remove, or modify service offerings.

### Updating Contact Information

Update Instagram handle and other social links in:
- `components/Hero.tsx`
- `components/Footer.tsx`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Playfair Display (serif), Montserrat (sans-serif)
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure

```
bianca-hench-cosmetics/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Services showcase
│   ├── LeadForm.tsx        # Lead capture form
│   └── Footer.tsx          # Footer with social links
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## License

© 2026 Bianca Hench Cosmetic Studio. All rights reserved.

## Support

For questions or support, visit [@BiancaHenchPMU](https://instagram.com/BiancaHenchPMU) on Instagram.
