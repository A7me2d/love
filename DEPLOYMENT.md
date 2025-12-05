# Love Celebration Website - Deployment Guide

## 📋 Project Overview
A beautiful, modern love celebration website built with Angular. Enter the name "Aman-Ahmed" to see an interactive celebration with animations, slides, and heartfelt messages.

**Made and Developed with 🤝 by Ahmed Hany**

---

## 🚀 Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Repository pushed to GitHub

### Step-by-Step Deployment

#### 1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Select the `love` repository from GitHub
   - Vercel will auto-detect it's an Angular project

#### 2. **Configure Build Settings**
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `docs`
   - **Install Command**: `npm install`

#### 3. **Environment Variables** (if needed)
   - No environment variables required for this project
   - Leave blank and proceed

#### 4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

---

## 📦 Local Development

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`

### Build for Production
```bash
npm run build
```
Output will be in `docs/`

---

## 🎨 Features

✨ **Interactive Celebration**
- Enter "Aman-Ahmed" to unlock the celebration
- Beautiful animated slides with 6 different messages
- Floating heart animations
- Smooth transitions and hover effects

🎯 **Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Gradient backgrounds and animations
- Professional navbar and footer
- Accessibility features

---

## 📁 Project Structure

```
webtest/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main component logic
│   │   ├── app.html        # Template
│   │   └── app.scss        # Styles
│   ├── styles.scss         # Global styles
│   └── main.ts
├── package.json
├── angular.json
├── vercel.json             # Vercel configuration
└── DEPLOYMENT.md           # This file
```

---

## 🔧 Technologies Used

- **Angular 20.1.0** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling
- **RxJS** - Reactive programming
- **Vercel** - Hosting platform

---

## 🌐 Live Demo

Once deployed on Vercel, your site will be accessible at:
```
https://your-vercel-project-name.vercel.app
```

### How to Use
1. Open the website
2. Enter the name: **Aman-Ahmed**
3. Click "Celebrate"
4. Enjoy the animated celebration with slides!
5. Use arrow buttons or dots to navigate through slides
6. Click "Try new" to celebrate another person

---

## 📝 Notes

- The website only accepts the name "Aman-Ahmed"
- All other names will show an error message
- The design is fully responsive and works on all devices
- Animations are smooth and optimized for performance

---

## 👨‍💻 Developer

**Made and Developed with 🤝 by Ahmed Hany**

---

## 📄 License

This project is created for celebration purposes. Feel free to customize and deploy!

---

## 🆘 Troubleshooting

### Build fails on Vercel
- Ensure `package.json` has all dependencies
- Check that `angular.json` is properly configured with `"outputPath": "docs"`
- Verify Node.js version compatibility (18+ recommended)

### Site shows blank page
- Check browser console for errors
- Ensure `docs/` is the correct output directory
- Verify `vercel.json` has `"outputDirectory": "docs"`

### Animations not working
- Clear browser cache
- Check that SCSS is properly compiled
- Ensure CSS animations are supported in your browser

---

## 📞 Support

For issues or questions, please check the GitHub repository or contact the developer.

Happy celebrating! 💖
