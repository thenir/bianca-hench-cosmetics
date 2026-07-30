# Deployment Guide for Bianca Hench Cosmetic Studio

## 🚀 Quick Start - Complete Deployment Steps

Your luxury cosmetics website is ready! Follow these steps to get it live on Vercel.

---

## Step 1: Push to GitHub

### Option A: Using GitHub CLI (Recommended if installed)

```bash
cd /agent/bianca-hench-cosmetics

# Create a new repository on GitHub
gh repo create bianca-hench-cosmetics --public --source=. --remote=origin

# Push your code
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `bianca-hench-cosmetics`
3. Description: "Luxury cosmetics landing page for Bianca Hench Cosmetic Studio"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

Then run these commands:

```bash
cd /agent/bianca-hench-cosmetics

# Add your GitHub repository as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/bianca-hench-cosmetics.git

# Push your code
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `bianca-hench-cosmetics` repository
4. Vercel will automatically detect Next.js
5. Click **Deploy** (no configuration needed!)
6. Wait ~2 minutes for deployment
7. Your site will be live! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Navigate to project
cd /agent/bianca-hench-cosmetics

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

## Step 3: Custom Domain (Optional)

After deployment, add a custom domain:

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `biancahench.com`)
4. Follow DNS instructions provided by Vercel

---

## 📋 Pre-Launch Checklist

Before going live, consider:

- [ ] Add your actual avatar image to `/public/avatar.png`
- [ ] Update the Hero component to use the real image
- [ ] Test the form submission flow
- [ ] Set up form backend (email service like SendGrid, Resend, or Formspree)
- [ ] Add Google Analytics or tracking (optional)
- [ ] Test on mobile devices
- [ ] Add favicon (optional)

---

## 🎨 Adding Your Avatar Image

1. Save your avatar image as `/agent/bianca-hench-cosmetics/public/avatar.png`

2. Update `/agent/bianca-hench-cosmetics/components/Hero.tsx`:

Replace this section (around line 48-60):

```tsx
{/* TODO: Replace with actual avatar image */}
<div className="text-center p-8">
  <div className="text-6xl mb-4">✨</div>
  <p className="text-luxury-brown font-serif text-2xl">
    Bianca Hench
  </p>
  <p className="text-luxury-brown-light mt-2">
    Master PMU Artist
  </p>
</div>
```

With:

```tsx
<Image
  src="/avatar.png"
  alt="Bianca Hench"
  width={400}
  height={400}
  className="w-full h-full object-cover"
  priority
/>
```

3. Commit and push:

```bash
git add .
git commit -m "Add brand avatar image"
git push
```

Vercel will automatically redeploy!

---

## 📧 Setting Up Form Submissions

The lead form currently logs to console. To receive actual submissions:

### Option 1: Use Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update `components/LeadForm.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR-FORM-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option 2: Use SendGrid/Resend

1. Get API key from SendGrid or Resend
2. Create API route: `app/api/submit/route.ts`
3. Update LeadForm to POST to `/api/submit`

---

## 🔗 Your Site URLs

After deployment, you'll get:

- **Vercel URL**: `https://bianca-hench-cosmetics.vercel.app`
- **Production URL**: Your custom domain (if configured)

---

## 🎉 You're All Set!

Your luxury cosmetics website is ready to capture leads and showcase your services.

**Next Steps:**
1. Push to GitHub (see Step 1)
2. Deploy to Vercel (see Step 2)
3. Share your link on Instagram (@BiancaHenchPMU)

---

## 💡 Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ for luxury beauty services**
