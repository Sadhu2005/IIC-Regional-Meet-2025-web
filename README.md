# IIC Regional Meet 2025 - Coorg Institute of Technology

A beautiful, mobile-first static website showcasing CIT's innovation achievements for the IIC Regional Meet 2025. Optimized for phone viewing and perfect for GitHub Pages deployment.

## 🎯 Features

- 📱 **Mobile-First Design**: Optimized for phone viewing with responsive layout
- 🎨 **Modern UI**: Clean, professional design with gradient accents
- ⚡ **Fast Loading**: Lightweight and performant
- 📊 **Comprehensive Content**: All IIC achievements and metrics
- 🔗 **QR Code Ready**: Section for QR code linking to the page

## 📋 Content Highlights

### Core Innovation Pipeline
- 2 KSCST Funded Projects
- 4+ Early Stage Start-up Models
- Active Idea Café & Exhibitions (UTKARSH 2025)

### Capacity Building
- 3 High-Profile Industrial Visits (ISRO, HAL, Infosys)
- 3+ Long-Duration Industry-Tied Certifications
- 20+ Trained Innovation Ambassadors
- 5 Stipendiary Internships

### Outreach & Culture
- Digital Literacy Outreach Program
- Inter-Departmental Competitions
- National Level VTU Sports Representation
- Proposed YUKTI Innovation Repository

## 🚀 Setup for GitHub Pages with CI/CD

### Automatic Deployment (Recommended)

This repository includes a **GitHub Actions CI/CD pipeline** that automatically deploys to GitHub Pages whenever you push to the `main` branch.

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `IIC-Regional-Meet-2025-web` (or any name you prefer)
   - Make it **public** (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CIT IIC Regional Meet 2025"
   git branch -M main
   git remote add origin https://github.com/yourusername/IIC-Regional-Meet-2025-web.git
   git push -u origin main
   ```

3. **Enable GitHub Pages (One-time setup)**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - The CI/CD pipeline will automatically deploy your site

4. **Your site will be live at:**
   ```
   https://yourusername.github.io/IIC-Regional-Meet-2025-web/
   ```

### How CI/CD Works

- **Automatic Deployment**: Every push to `main` branch triggers the workflow
- **Manual Trigger**: You can also manually trigger deployment from the Actions tab
- **Status**: Check the Actions tab to see deployment status
- **No Manual Steps**: Once set up, just push code and it deploys automatically!

### Manual Deployment (Alternative)

If you prefer manual deployment:
1. Go to **Settings** > **Pages**
2. Under **Source**, select **main** branch
3. Select **/ (root)** folder
4. Click **Save**

## 📱 Generating QR Code

To generate a QR code that links to your GitHub Pages site:

1. **Online QR Code Generator:**
   - Visit: https://www.qr-code-generator.com/ or https://qr-code-generator.com/
   - Enter your GitHub Pages URL
   - Download the QR code image

2. **Replace QR Code Placeholder:**
   - Save the QR code image as `qr-code.png` in the root directory
   - Update `index.html` line ~280 to replace the placeholder:
   ```html
   <div class="qr-code-placeholder">
       <img src="qr-code.png" alt="QR Code" style="width: 100%; height: 100%; object-fit: contain;">
   </div>
   ```

3. **Or use a QR Code API:**
   - You can use services like `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=YOUR_URL`

## 🎨 Customization

### Colors
Edit `styles.css` to change the color scheme:
- Primary gradient: `#667eea` to `#764ba2`
- Highlight color: `#f59e0b`

### Content
Edit `index.html` to update:
- College information
- Achievement details
- Contact information
- Any additional sections

### Fonts
The site uses system fonts for fast loading. To use custom fonts:
1. Add Google Fonts link in `<head>`
2. Update `font-family` in `styles.css`

## 📁 File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Stylesheet (mobile-first)
└── README.md       # This file
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- The website is fully responsive and works on all screen sizes
- All icons use Font Awesome (loaded via CDN)
- No JavaScript required - pure HTML/CSS
- Optimized for fast loading on mobile networks

## 📧 Contact

For questions or updates, contact the IIC team at Coorg Institute of Technology, Ponnampet.

---

**© 2025 Coorg Institute of Technology. All rights reserved.**
