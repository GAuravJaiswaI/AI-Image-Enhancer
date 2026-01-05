# 🚀 GitHub Push Steps (Quick Guide)

## Step 1: Terminal me yeh commands chalao

```bash
# Project folder me jao
cd /Users/gauravjaiswal/Desktop/Projects/personal/AI-Image-Enhancer

# Git initialize karo (agar nahi hai)
git init

# Sab files add karo
git add .

# Commit karo
git commit -m "Initial commit: AI Image Enhancer project"

# GitHub repository URL (apna username dalo)
git remote add origin https://github.com/GAuravJaiswal/AI-Image-Enhancer.git

# Push karo
git push -u origin main
```

## Step 2: Agar password mangta hai

GitHub ab password accept nahi karta. **Personal Access Token** chahiye:

1. GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" click karo
3. Name: `Vercel Deploy`
4. Scopes: `repo` select karo
5. Generate karo
6. Token copy karo (ek baar hi dikhega!)
7. Push command chalao → password ki jagah token paste karo

---

## Step 3: Environment Variables (Vercel me)

Jab code push ho jaye, phir Vercel me:

### Vercel Screen me yeh add karo:

1. **"EXAMPLE_NAME" wali row delete karo** (minus button click karo)

2. **"+ Add More" click karo** → 3 variables add karo:

   **Variable 1:**
   - Key: `VITE_API_BASE_URL`
   - Value: `https://techhk.aoscdn.com`
   - Environment: ✅ Production, ✅ Preview, ✅ Development (sab select)

   **Variable 2:**
   - Key: `VITE_API_KEY`
   - Value: `wxfbyckwupscddy5a`
   - Environment: ✅ Production, ✅ Preview, ✅ Development (sab select)

   **Variable 3:**
   - Key: `VITE_MAX_RETRIES`
   - Value: `20`
   - Environment: ✅ Production, ✅ Preview, ✅ Development (sab select)

3. **Deploy button click karo**

---

## ✅ Complete Checklist

- [ ] Code GitHub par push ho gaya
- [ ] Vercel me environment variables add kiye
- [ ] Deploy button click kiya
- [ ] Live URL mil gaya

---

**Pehle GitHub push karo, phir Vercel deploy! 🚀**

