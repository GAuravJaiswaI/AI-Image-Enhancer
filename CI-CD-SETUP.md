# CI/CD Pipeline Setup Guide

Haan, yeh CI/CD pipeline hai. Yeh aapke local changes ko automatically online deploy kar sakta hai. Yahan workflow:

## 🔄 CI/CD Pipeline Workflow

### Current Setup (Manual)
```
Local Changes → Manual Deploy → Production
```

### With CI/CD (Automatic)
```
Local Changes → Git Push → GitHub → Vercel → Production (Auto Deploy)
```

## 🚀 How It Works

### Step 1: Local Development
```bash
# Aap local me changes karte ho
npm run dev  # Test locally
```

### Step 2: Git Push
```bash
git add .
git commit -m "Added new feature"
git push origin main
```

### Step 3: Automatic Deployment
1. GitHub receives your push
2. CI pipeline runs (builds & tests)
3. Vercel automatically detects the push
4. Vercel builds your project
5. Vercel deploys to production
6. Live site updates automatically

## 📋 Complete Setup Guide

### 1. GitHub Repository Setup

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/yourusername/ai-image-enhancer.git
git push -u origin main
```

### 2. Vercel Automatic Deployment

Vercel ko GitHub se connect karein:

1. **Vercel.com par login**
2. **"Add New Project" click karein**
3. **GitHub repository select karein**
4. **Auto-detect settings:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables add karein** (pehle bataya tha)
6. **Deploy**

Ab har push par automatic deploy hoga.

### 3. CI Pipeline (GitHub Actions)

`.github/workflows/ci.yml` file create karein:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  # Build & Test Job
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build project
        run: npm run build
        env:
          VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
          VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
          VITE_MAX_RETRIES: 20

      - name: Check build output
        run: |
          if [ ! -d "dist" ]; then
            echo "Build failed - dist folder not found"
            exit 1
          fi
          echo "Build successful!"
```

### 4. GitHub Secrets Setup

**GitHub repository → Settings → Secrets and variables → Actions:**

Add these secrets:
- `VITE_API_BASE_URL` = `https://techhk.aoscdn.com`
- `VITE_API_KEY` = `wxfbyckwupscddy5a`

## 💡 Complete Workflow Example

### Scenario: New Feature Add Karna

```bash
# 1. Local me kaam karo
git checkout -b feature/new-upload-button
# ... code changes ...

# 2. Test locally
npm run dev
# Browser me check karo

# 3. Commit & Push
git add .
git commit -m "Added new upload button feature"
git push origin feature/new-upload-button

# 4. GitHub Actions automatically:
# ✅ Runs tests
# ✅ Builds project
# ✅ Checks for errors

# 5. Create Pull Request (optional)
# GitHub me PR create karo → Review → Merge

# 6. Vercel automatically:
# ✅ Detects push to main branch
# ✅ Builds with production env vars
# ✅ Deploys to production
# ✅ Your site is live! 🚀
```

## 🎯 Vercel Automatic Deployment Features

### Branch-based Deployments
- `main` branch → Production (live site)
- `develop` branch → Preview URL
- Feature branches → Preview URLs (for testing)

### Automatic Previews
Har PR/feature branch ke liye Vercel ek unique preview URL banata hai:
```
https://ai-image-enhancer-git-feature-branch.vercel.app
```

## ✅ Quick Setup Checklist

### GitHub Setup
- [ ] Repository create karo
- [ ] Code push karo
- [ ] GitHub Secrets add karo
- [ ] CI workflow file add karo

### Vercel Setup
- [ ] Vercel account create karo
- [ ] GitHub repository connect karo
- [ ] Environment variables add karo
- [ ] Deploy button click karo

### First Deployment
```bash
# Local changes
git add .
git commit -m "Ready for deployment"
git push origin main

# Vercel automatically:
# 1. Detects push
# 2. Builds project
# 3. Deploys to production
# 4. Gives you live URL
```

## 🎁 Benefits

1. **Automatic deployment**: Push karo, deploy ho jayega
2. **Preview URLs**: Har branch ka preview milta hai
3. **Rollback**: Purana version wapas la sakte ho
4. **Build checks**: Error aane par deploy nahi hota
5. **Team collaboration**: Sabko preview milta hai

## 📊 Production Workflow

```
┌─────────────┐
│ Local Code  │
│  (Your PC)  │
└──────┬──────┘
       │ git push
       ▼
┌─────────────┐
│   GitHub    │
│  Repository │
└──────┬──────┘
       │
       ├───► GitHub Actions (CI)
       │     ✅ Build & Test
       │
       └───► Vercel (CD)
             ✅ Auto Deploy
             ✅ Live Site
```

## ⚡ Quick Commands

```bash
# Daily workflow
git add .
git commit -m "Your changes"
git push origin main
# That's it! Vercel handles the rest 🚀
```

## 🔧 Environment Variables Setup

### Local `.env` File
```env
VITE_API_BASE_URL=https://techhk.aoscdn.com
VITE_API_KEY=wxfbyckwupscddy5a
VITE_MAX_RETRIES=20
```

### Vercel Environment Variables

**Production:**
- `VITE_API_BASE_URL` = `https://techhk.aoscdn.com`
- `VITE_API_KEY` = `wxfbyckwupscddy5a`
- `VITE_MAX_RETRIES` = `20`

**Preview:**
- Same as Production

**Development:**
- Same as Production

## 📝 Notes

- Always test locally before pushing
- Use meaningful commit messages
- Check GitHub Actions for build status
- Monitor Vercel deployment logs
- Keep environment variables secure

## 🆘 Troubleshooting

### Build Fails on Vercel
1. Check environment variables are set
2. Verify `package.json` scripts
3. Check build logs in Vercel dashboard
4. Ensure all dependencies are in `package.json`

### CI Pipeline Fails
1. Check GitHub Secrets are configured
2. Verify Node.js version matches
3. Review GitHub Actions logs
4. Test build locally first

---

**Happy Deploying! 🚀**

