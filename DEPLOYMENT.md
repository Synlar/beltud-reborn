# Beltud Website - Deployment Guide

## Quick Deploy with Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to preview:
```bash
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

## Alternative: Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import from Git"
3. Select your repository
4. Click "Deploy"

## Alternative: GitHub Pages

1. Push code to GitHub
2. Go to Settings → Pages
3. Set source to "GitHub Actions"
4. Push to main branch - auto deploys!

## Custom Domain (beltud.be)

After deployment, add your domain:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management
- GitHub Pages: Settings → Pages → Custom Domain

Then update DNS:
- Add A record pointing to deployment IP
- Add CNAME for www subdomain
