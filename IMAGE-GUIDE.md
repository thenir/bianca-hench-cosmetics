# Adding Images to Your Site

## Required Images

You need to add the following images to make your site complete:

### 1. Logo (Signature)
**File**: The signature logo you provided
**Location**: `/agent/bianca-hench-cosmetics/public/images/logo.png`

**Steps**:
1. Save your signature logo as `logo.png`
2. Copy it to: `/agent/bianca-hench-cosmetics/public/images/logo.png`

The logo will appear in:
- Navigation bar (top of every page)
- Mobile menu

---

### 2. Avatar/Profile Image
**File**: The woman illustration from the first image
**Location**: `/agent/bianca-hench-cosmetics/public/images/avatar.jpg`

**Steps**:
1. Save the avatar image as `avatar.jpg`
2. Copy it to: `/agent/bianca-hench-cosmetics/public/images/avatar.jpg`

The avatar will appear in:
- Hero section (homepage)
- Products page testimonial section

---

### 3. Additional Image (IMG_4392.HEIC)
**File**: `/Users/nircohen/Downloads/IMG_4392.HEIC`
**Location**: `/agent/bianca-hench-cosmetics/public/images/studio.jpg`

**Steps**:
1. Convert the HEIC file to JPG (if needed)
2. Copy it to: `/agent/bianca-hench-cosmetics/public/images/studio.jpg`

This image can be used for:
- About section background
- Gallery/portfolio section
- Additional promotional content

---

## Quick Copy Commands

If you're on Mac/Linux, use these commands:

```bash
# Navigate to your project
cd /agent/bianca-hench-cosmetics

# Create images directory (if not exists)
mkdir -p public/images

# Copy your logo (update the source path)
cp /path/to/your/signature-logo.png public/images/logo.png

# Copy your avatar (update the source path)
cp /path/to/avatar-image.jpg public/images/avatar.jpg

# Copy and convert HEIC to JPG
# First install imagemagick if needed: brew install imagemagick
magick /Users/nircohen/Downloads/IMG_4392.HEIC public/images/studio.jpg

# OR if you already converted it:
cp /Users/nircohen/Downloads/IMG_4392.jpg public/images/studio.jpg
```

---

## After Adding Images

Once you've added all images:

```bash
cd /agent/bianca-hench-cosmetics

# Commit the changes
git add public/images/
git commit -m "Add logo, avatar, and studio images"

# Push to GitHub
git push

# Vercel will automatically redeploy!
```

---

## Converting HEIC to JPG

If you need to convert the HEIC file:

### Option 1: Online Converter
- Go to https://heictojpg.com
- Upload your HEIC file
- Download as JPG

### Option 2: Mac Preview
1. Open the HEIC file in Preview
2. File → Export
3. Format: JPEG
4. Save

### Option 3: Command Line (Mac)
```bash
sips -s format jpeg /Users/nircohen/Downloads/IMG_4392.HEIC --out /agent/bianca-hench-cosmetics/public/images/studio.jpg
```

---

## Image Specifications

For best results:

- **Logo**: Transparent PNG, ~1000x300px
- **Avatar**: Square JPG, 400x400px minimum
- **Studio Image**: JPG, 1920x1080px or larger

---

## Need Help?

The site will work with placeholder images, but adding your real images will make it look professional and branded!

After adding images, test locally:
```bash
npm run dev
```
Then visit http://localhost:3000
