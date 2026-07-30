#!/bin/bash

# Quick Deploy Script for Bianca Hench Cosmetic Studio
# This script helps you push to GitHub and deploy to Vercel

set -e

echo "🎨 Bianca Hench Cosmetic Studio - Deployment Script"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if git is configured
if ! git config user.email > /dev/null 2>&1; then
    echo "⚙️  Configuring git..."
    read -p "Enter your email: " email
    read -p "Enter your name: " name
    git config user.email "$email"
    git config user.name "$name"
fi

echo "📝 Current git status:"
git status --short
echo ""

# Ask for GitHub username
read -p "Enter your GitHub username: " github_username

# Create remote
echo "🔗 Adding GitHub remote..."
git remote add origin "https://github.com/$github_username/bianca-hench-cosmetics.git" 2>/dev/null || echo "Remote already exists"

echo ""
echo "📤 Ready to push to GitHub!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "   - Name: bianca-hench-cosmetics"
echo "   - Make it public or private"
echo "   - DO NOT initialize with README"
echo ""
echo "2. After creating the repo, run:"
echo "   git push -u origin main"
echo ""
echo "3. Then deploy to Vercel:"
echo "   - Go to https://vercel.com/new"
echo "   - Import your GitHub repository"
echo "   - Click Deploy"
echo ""
echo "🎉 Your site will be live in ~2 minutes!"
