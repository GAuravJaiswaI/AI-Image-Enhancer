# ✅ Deployment Checklist

## 🚀 Quick Deployment Steps

### PART-A: GitHub Setup
- [ ] Local project tested (`npm run dev` works)
- [ ] Git initialized (`git init`)
- [ ] Initial commit done (`git commit -m "initial commit"`)
- [ ] GitHub repository created
- [ ] Local repo connected to GitHub (`git remote add origin`)
- [ ] Code pushed to GitHub (`git push -u origin main`)

### PART-B: Vercel Setup
- [ ] Vercel account created (GitHub login)
- [ ] Project imported from GitHub
- [ ] Build settings verified (auto-detected)
- [ ] Deploy button clicked
- [ ] Live URL received
- [ ] Site tested on live URL

### PART-C: Environment Variables (If Needed)
- [ ] `.env.example` file created
- [ ] `.env` added to `.gitignore`
- [ ] Vercel environment variables added
- [ ] Production env vars set
- [ ] Preview env vars set
- [ ] Development env vars set
- [ ] Redeployed after adding env vars

### PART-D: CI/CD Testing
- [ ] Local code changed
- [ ] Changes committed (`git commit`)
- [ ] Changes pushed (`git push`)
- [ ] Vercel auto-deploy verified
- [ ] Live site updated automatically

### PART-E: Preview URLs (Optional)
- [ ] Feature branch created
- [ ] Changes pushed to branch
- [ ] Pull Request created
- [ ] Preview URL received
- [ ] Preview tested

---

## 📝 Quick Commands Reference

### First Time Setup
```bash
# Initialize git
git init
git add .
git commit -m "initial commit"

# Connect to GitHub
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### Daily Workflow
```bash
# Make changes, then:
git add .
git commit -m "your message"
git push origin main
# Vercel auto-deploys! 🚀
```

### Feature Branch
```bash
git checkout -b feature/name
# Make changes
git add .
git commit -m "feature added"
git push origin feature/name
# Create PR on GitHub
```

---

## 🔗 Important Links

- **GitHub:** https://github.com
- **Vercel:** https://vercel.com
- **Your Live Site:** https://your-project.vercel.app

---

## 🆘 Common Issues

### Build Fails
- Check Vercel build logs
- Verify `npm run build` works locally
- Check environment variables

### Changes Not Showing
- Wait 1-2 minutes
- Hard refresh browser (Ctrl+Shift+R)
- Check deployment status

### Environment Variables Not Working
- Verify `VITE_` prefix
- Redeploy after adding vars
- Check Vercel dashboard

---

**Keep this checklist handy while deploying! 📋**

