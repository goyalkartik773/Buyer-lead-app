# ✅ Quick Deployment Checklist

## 🚀 Deploy to Vercel in 10 Minutes

### Pre-Deployment (5 minutes)

- [ ] **Code pushed to GitHub**
  ```bash
  git add .
  git commit -m "Ready for deployment"
  git push origin main
  ```

- [ ] **Choose database provider**
  - ✅ Vercel Postgres (easiest)
  - ⬜ Neon (free PostgreSQL)
  - ⬜ Supabase (free PostgreSQL)

- [ ] **Update Prisma schema**
  ```prisma
  datasource db {
    provider = "postgresql"  // Change from "sqlite"
    url      = env("DATABASE_URL")
  }
  ```

### Deployment Steps (5 minutes)

1. **[ ] Go to Vercel**
   - https://vercel.com/signup
   - Sign up with GitHub

2. **[ ] Import Project**
   - Click "Add New..." → "Project"
   - Select `buyerlead-app` repository
   - Click "Import"

3. **[ ] Configure Build**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Leave other settings as default

4. **[ ] Add Database**
   - Click "Storage" tab
   - "Create Database" → "Postgres"
   - Select "Hobby" (free)
   - Click "Create"

5. **[ ] Environment Variables**
   - `DATABASE_URL` (auto-added by Vercel Postgres)
   - Or add manually if using Neon/Supabase

6. **[ ] Deploy**
   - Click "Deploy"
   - Wait 2-5 minutes
   - Get your live URL!

### Post-Deployment (2 minutes)

- [ ] **Test the app**
  - Visit your live URL
  - Create a test lead
  - Test all features

- [ ] **Update README**
  ```markdown
  ## 🌐 Live Demo
  **Live URL:** https://your-app.vercel.app
  ```

- [ ] **Commit and push**
  ```bash
  git add README.md
  git commit -m "Add live demo link"
  git push
  ```

---

## 🎯 Quick Commands

```bash
# 1. Ensure everything is committed
git status
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Update Prisma for PostgreSQL
# Edit prisma/schema.prisma - change provider to "postgresql"

# 3. After deployment, push database schema
npx prisma db push
```

---

## 🔗 Quick Links

- **Vercel Signup:** https://vercel.com/signup
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon (Free DB):** https://neon.tech/
- **Deployment Guide:** See DEPLOYMENT_GUIDE.md

---

## ⚡ Super Quick (2 Minutes)

If you just want to deploy NOW:

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Import `buyerlead-app`
4. Click "Deploy"
5. Done! (Database will need setup later)

---

**Total Time: ~10 minutes** ⏱️

**See DEPLOYMENT_GUIDE.md for detailed instructions!**
