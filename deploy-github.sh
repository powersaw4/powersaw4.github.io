#!/bin/bash

# Brickit Designs Website - GitHub Pages Deployment Script
# This script automates the deployment to GitHub Pages

echo "=================================================="
echo "  Brickit Designs - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed."
    echo "Please install Git first: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Get repository URL
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/brickit-designs.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Repository URL cannot be empty"
    exit 1
fi

echo ""
echo "📦 Initializing Git repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "📝 Adding files to Git..."

# Add all files
git add .

echo "✅ Files added"
echo ""

# Commit
echo "💾 Creating commit..."
git commit -m "Initial commit - Brickit Designs website"

echo "✅ Commit created"
echo ""

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

echo "✅ Main branch set"
echo ""

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

echo "✅ Remote repository added"
echo ""

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=================================================="
    echo "  ✅ Deployment Successful!"
    echo "=================================================="
    echo ""
    echo "Next Steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click 'Settings' → 'Pages'"
    echo "3. Source: 'Deploy from a branch'"
    echo "4. Branch: 'main' / '/ (root)'"
    echo "5. Click 'Save'"
    echo ""
    echo "Your site will be live at:"
    echo "https://YOUR-USERNAME.github.io/REPO-NAME/"
    echo ""
    echo "Wait 2-3 minutes for deployment to complete."
    echo "=================================================="
else
    echo ""
    echo "❌ Error: Push failed"
    echo "Please check:"
    echo "1. Repository URL is correct"
    echo "2. You have push access to the repository"
    echo "3. Your GitHub credentials are configured"
    echo ""
    echo "Run: git push -u origin main"
fi
