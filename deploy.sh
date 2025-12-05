#!/bin/bash
# Deployment helper script for GitHub Pages and Vercel

echo "🚀 Building Love Celebration Website..."
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building project..."
npm run build

# Check if docs folder exists
if [ -d "docs" ]; then
    echo "✅ Build successful! Output in: docs/"
    echo ""
    echo "📍 Next steps:"
    echo ""
    echo "For GitHub Pages:"
    echo "  1. Commit: git add . && git commit -m 'Build for deployment'"
    echo "  2. Push: git push origin master"
    echo "  3. Visit: https://A7me2d.github.io/love/"
    echo ""
    echo "For Vercel:"
    echo "  1. Go to: https://vercel.com"
    echo "  2. Import your GitHub repository"
    echo "  3. Vercel will auto-detect and deploy!"
    echo ""
    echo "For local testing:"
    echo "  npx http-server docs"
    echo ""
else
    echo "❌ Build failed! docs/ folder not found."
    exit 1
fi
