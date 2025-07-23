# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Method A: Using Vercel CLI (Fastest)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - Project name: **student-portfolio** (or your preferred name)
   - Directory: **.** (current directory)

5. Your portfolio will be deployed and you'll get a live URL!

### Method B: Using Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## Option 2: Deploy to Netlify

### Method A: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to the deploy area
4. Your site will be live instantly!

### Method B: Git Integration

1. Push your code to GitHub (same as Vercel Method B step 1)
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Post-Deployment Steps

1. **Custom Domain** (Optional):
   - Both Vercel and Netlify allow you to add custom domains
   - Follow their respective documentation for domain setup

2. **Environment Variables** (If needed):
   - Add any environment variables in the platform's dashboard
   - For contact form backend integration, etc.

3. **Analytics** (Optional):
   - Both platforms offer built-in analytics
   - You can also add Google Analytics

## Updating Your Portfolio

After making changes:

1. **For Vercel CLI**: Just run `vercel` again
2. **For Git-connected deployments**: Push to your main branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The deployment will happen automatically!

## Troubleshooting

### Build Errors
- Make sure `npm run build` works locally first
- Check that all dependencies are in `package.json`
- Ensure Node.js version compatibility (18+)

### Deployment Issues
- Check build logs in the platform dashboard
- Verify build command and output directory settings
- Ensure all files are committed to Git

### Performance Optimization
- Your portfolio is already optimized with:
  - Code splitting
  - CSS purging
  - Image optimization
  - Minification

## Success! 🎉

Once deployed, your portfolio will be live at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Netlify**: `https://your-project-name.netlify.app`

Share your portfolio URL and start applying for those internships!