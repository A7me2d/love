# 🚀 Complete Deployment Guide

## GitHub Pages & Vercel Setup

This guide will help you deploy your Angular project to both **GitHub Pages** and **Vercel** for maximum flexibility.

---

## 📍 Option 1: Deploy to GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally
- Repository pushed to GitHub

### Step-by-Step

#### 1. **Build the Project**
```bash
npm install
npm run build
```

The build output will be in the `docs/` directory (already configured in `angular.json`).

#### 2. **Configure GitHub Repository Settings**

1. Go to your GitHub repository: `https://github.com/A7me2d/love`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `master` (or main)
   - **Folder**: Select `docs/`
4. Click **Save**

#### 3. **Push Your Changes**
```bash
git add .
git commit -m "Build for GitHub Pages deployment"
git push origin master
```

#### 4. **Access Your Site**
Your site will be live at: `https://A7me2d.github.io/love/`

**Note**: GitHub Pages will automatically deploy whenever you push to the `master` branch.

---

## ☁️ Option 2: Deploy to Vercel (Recommended)

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub account connected to Vercel

### Step-by-Step

#### 1. **Connect Vercel to Your GitHub Account**
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In**
3. Choose **GitHub** as your login method
4. Authorize Vercel to access your GitHub repositories

#### 2. **Create a New Project**
1. Click **Add New** → **Project**
2. Search for the `love` repository
3. Click **Import**

#### 3. **Configure Build Settings**
Vercel should auto-detect these settings:
- **Framework**: Angular
- **Build Command**: `npm run build`
- **Output Directory**: `docs`
- **Install Command**: `npm install`

If not auto-detected, enter them manually.

#### 4. **Deploy**
1. Click **Deploy**
2. Wait for the build to complete (2-5 minutes)
3. Your site will be live at: `https://love-<random>.vercel.app`

#### 5. **Custom Domain (Optional)**
1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🔄 Continuous Deployment (CD)

### GitHub Pages
- **Trigger**: Every push to `master` branch
- **Build time**: ~2-3 minutes
- **Status**: Check in repository Settings → Pages

### Vercel
- **Trigger**: Every push to `master` branch
- **Build time**: ~2-3 minutes
- **Status**: View in Vercel dashboard

---

## 📦 Local Build & Test

Before deploying, always test locally:

```bash
# Install dependencies
npm install

# Build production version
npm run build

# The output will be in: docs/
```

To preview the built site locally:
```bash
# Using a simple HTTP server (Node.js)
npx http-server docs

# Or using Python
python -m http.server 8000 --directory docs
```

Then open: `http://localhost:8000`

---

## 🛠️ Troubleshooting

### GitHub Pages Issues
**Problem**: Site not updating after push
- **Solution**: Wait 2-5 minutes for GitHub Actions to complete, then hard refresh (Ctrl+Shift+R)

**Problem**: 404 on subpages
- **Solution**: The `docs/.nojekyll` file prevents GitHub from reprocessing assets. It's already included.

### Vercel Issues
**Problem**: Build failing
- **Solution**: Check build logs in Vercel dashboard, ensure `npm run build` works locally first

**Problem**: Routing not working
- **Solution**: Vercel rewrites are configured in `vercel.json` for SPA routing

---

## 📊 Deployment Checklist

- [ ] Local build works: `npm run build`
- [ ] `docs/` folder is generated correctly
- [ ] `.nojekyll` file exists in `docs/`
- [ ] `vercel.json` is configured
- [ ] Repository is pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Vercel project imported and deployed

---

## 🎯 Summary

| Platform | URL Pattern | Auto-Deploy | Setup Time |
|----------|------------|-------------|-----------|
| GitHub Pages | `https://A7me2d.github.io/love/` | Yes (on push) | 5 mins |
| Vercel | `https://love-*.vercel.app` | Yes (on push) | 5 mins |

Both will automatically redeploy whenever you push to the `master` branch! 🚀
