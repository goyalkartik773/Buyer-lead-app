# 🚀 Deployment Guide - BuyerLead

## 📋 Table of Contents
1. [Vercel Deployment](#vercel-deployment-recommended) (Recommended)
2. [Database Setup](#database-setup)
3. [Environment Variables](#environment-variables)
4. [Alternative Platforms](#alternative-deployment-platforms)
5. [Post-Deployment](#post-deployment-checklist)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Vercel Deployment (Recommended)

Vercel is the **best choice** for Next.js applications - it's made by the Next.js team!

### ✅ Why Vercel?
- ✅ **Free tier** - Perfect for portfolio projects
- ✅ **Zero configuration** - Automatic Next.js detection
- ✅ **Fast deployment** - Deploy in 2 minutes
- ✅ **Automatic HTTPS** - Free SSL certificates
- ✅ **Global CDN** - Fast worldwide
- ✅ **Preview deployments** - Every git push
- ✅ **Easy database integration** - Vercel Postgres available

---

## 🚀 Step-by-Step Vercel Deployment

### Step 1: Create Vercel Account

1. **Go to Vercel**
   - Visit: https://vercel.com/signup
   
2. **Sign Up**
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Complete Setup**
   - Follow the onboarding steps

### Step 2: Import Your Project

1. **Go to Dashboard**
   - Visit: https://vercel.com/new

2. **Import Git Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find your `buyerlead-app` repository
   - Click "Import"

3. **Configure Project**
   
   **Framework Preset:** Next.js (auto-detected)
   
   **Root Directory:** `./` (leave as is)
   
   **Build Command:** 
   ```bash
   npm run build
   ```
   
   **Output Directory:** 
   ```
   .next
   ```
   
   **Install Command:**
   ```bash
   npm install
   ```

### Step 3: Set Environment Variables

**IMPORTANT:** Before deploying, add environment variables!

1. **In Vercel Dashboard**
   - Scroll to "Environment Variables" section

2. **Add DATABASE_URL**
   
   **For Development (SQLite won't work on Vercel):**
   ```
   Key: DATABASE_URL
   Value: (See Database Setup section below)
   ```

3. **Click "Deploy"**

### Step 4: Wait for Deployment

- ⏱️ First deployment: 2-5 minutes
- 📊 Watch the build logs
- ✅ Success: You'll get a live URL!

### Step 5: Get Your Live URL

Your app will be live at:
```
https://buyerlead-app.vercel.app
```
(or similar - Vercel assigns a unique URL)

---

## 🗄️ Database Setup

**IMPORTANT:** SQLite doesn't work on Vercel (serverless). You need a hosted database.

### Option 1: Vercel Postgres (Recommended)

**Free Tier:** 256 MB storage, 60 hours compute

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Storage" tab
   - Click "Create Database"
   - Select "Postgres"
   - Choose "Hobby" (free tier)
   - Click "Create"

2. **Get Connection String**
   - Vercel automatically adds `DATABASE_URL` to your environment variables
   - Format: `postgresql://user:password@host:5432/database`

3. **Update Prisma Schema**
   
   **Edit `prisma/schema.prisma`:**
   ```prisma
   datasource db {
     provider = "postgresql"  // Changed from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

4. **Push Schema to Database**
   ```bash
   npx prisma db push
   ```

5. **Redeploy**
   - Commit changes
   - Push to GitHub
   - Vercel auto-deploys

### Option 2: Neon (Free PostgreSQL)

**Free Tier:** 512 MB storage, unlimited projects

1. **Go to Neon**
   - Visit: https://neon.tech/
   - Sign up with GitHub

2. **Create Database**
   - Click "Create Project"
   - Name: `buyerlead`
   - Region: Choose closest to you
   - Click "Create Project"

3. **Get Connection String**
   - Copy the connection string
   - Format: `postgresql://user:password@host/database?sslmode=require`

4. **Add to Vercel**
   - Go to Vercel project settings
   - Environment Variables
   - Add `DATABASE_URL` with Neon connection string

5. **Update Prisma Schema** (same as Option 1)

6. **Deploy Database Schema**
   ```bash
   npx prisma db push
   ```

### Option 3: Supabase (Free PostgreSQL)

**Free Tier:** 500 MB database, unlimited API requests

1. **Go to Supabase**
   - Visit: https://supabase.com/
   - Sign up

2. **Create Project**
   - New Project
   - Name: `buyerlead`
   - Database password: (create strong password)
   - Region: Choose closest
   - Click "Create Project"

3. **Get Connection String**
   - Settings → Database
   - Connection string → URI
   - Copy the connection string

4. **Add to Vercel** (same as Neon)

---

## 🔐 Environment Variables

### Required Variables:

```env
# Database (choose one option above)
DATABASE_URL="postgresql://user:password@host:5432/database"

# Optional: For production optimizations
NODE_ENV="production"
```

### How to Add in Vercel:

1. Go to project settings
2. Click "Environment Variables"
3. Add each variable:
   - **Key:** `DATABASE_URL`
   - **Value:** Your database connection string
   - **Environments:** Production, Preview, Development (select all)
4. Click "Save"

---

## 📦 Build Configuration

### Vercel Settings (Auto-configured)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Custom Build Script (if needed)

Create `vercel.json` in project root:

```json
{
  "buildCommand": "prisma generate && next build",
  "devCommand": "next dev",
  "installCommand": "npm install"
}
```

---

## 🎯 Post-Deployment Checklist

After successful deployment:

### 1. Test Your App
- [ ] Visit your live URL
- [ ] Create a test lead
- [ ] Edit a lead
- [ ] Test search/filter
- [ ] Try CSV import
- [ ] Test CSV export
- [ ] Check all pages load

### 2. Set Custom Domain (Optional)

**In Vercel:**
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration steps

### 3. Update README

**Add live demo link:**
```markdown
## 🌐 Live Demo

**Live Application:** https://buyerlead-app.vercel.app

Try it out! (Add demo credentials if needed)
```

### 4. Enable Analytics (Optional)

**Vercel Analytics:**
1. Go to project
2. Click "Analytics" tab
3. Enable Vercel Analytics (free)

### 5. Set Up Monitoring

**Vercel Logs:**
- Real-time logs in dashboard
- Error tracking
- Performance monitoring

---

## 🔄 Continuous Deployment

### Automatic Deployments

Every time you push to GitHub:
- ✅ Vercel automatically deploys
- ✅ Preview URL for each branch
- ✅ Production deployment on `main` branch

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from terminal
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Alternative Deployment Platforms

### Option 2: Netlify

**Steps:**
1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. "Add new site" → "Import from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Deploy

**Note:** Requires additional configuration for Next.js

### Option 3: Railway

**Steps:**
1. Go to https://railway.app/
2. Sign up with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select repository
5. Add PostgreSQL database (built-in)
6. Add environment variables
7. Deploy

**Pros:** Includes free PostgreSQL database

### Option 4: Render

**Steps:**
1. Go to https://render.com/
2. Sign up with GitHub
3. "New" → "Web Service"
4. Connect repository
5. Build command: `npm install && npm run build`
6. Start command: `npm start`
7. Add environment variables
8. Create PostgreSQL database (separate)
9. Deploy

---

## 🐛 Troubleshooting

### Issue 1: Build Fails - "Module not found"

**Solution:**
```bash
# Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Issue 2: Database Connection Error

**Solution:**
1. Check `DATABASE_URL` is set in Vercel
2. Verify connection string format
3. Ensure database is accessible (not localhost)
4. Check Prisma schema provider matches database type

### Issue 3: Prisma Client Not Generated

**Solution:**

Add to `package.json`:
```json
{
  "scripts": {
    "postinstall": "prisma generate",
    "build": "prisma generate && next build"
  }
}
```

### Issue 4: Environment Variables Not Working

**Solution:**
1. Check variable names match exactly
2. Redeploy after adding variables
3. Check "Production" environment is selected
4. Clear cache and redeploy

### Issue 5: 404 on Routes

**Solution:**
- Ensure `next.config.ts` is correct
- Check file structure matches Next.js conventions
- Verify all pages are in `src/app/` directory

### Issue 6: Slow Performance

**Solution:**
1. Enable Vercel Analytics
2. Check database query performance
3. Add database indexes
4. Optimize images
5. Enable caching

---

## 📊 Performance Optimization

### 1. Database Optimization

**Add indexes to Prisma schema:**
```prisma
model Buyer {
  id        String   @id @default(cuid())
  phone     String   @unique
  email     String?
  
  @@index([city])
  @@index([status])
  @@index([updatedAt])
}
```

### 2. Enable Caching

**In `next.config.ts`:**
```typescript
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 3. Optimize Images

- Use Next.js Image component
- Compress images before upload
- Use WebP format

---

## 🎉 Success!

Your BuyerLead app is now live! 🚀

### Next Steps:

1. ✅ Share your live URL
2. ✅ Update README with demo link
3. ✅ Add to portfolio
4. ✅ Share on LinkedIn
5. ✅ Monitor performance
6. ✅ Collect feedback

---

## 📞 Need Help?

- 📖 [Vercel Documentation](https://vercel.com/docs)
- 📖 [Next.js Deployment](https://nextjs.org/docs/deployment)
- 📖 [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Neon (Database):** https://neon.tech/
- **Supabase (Database):** https://supabase.com/
- **Vercel CLI:** https://vercel.com/docs/cli

---

**Your app is ready for the world!** 🌍✨

Good luck with your deployment! 🚀
