# IONOS Deployment Guide

## Complete Step-by-Step Deployment Process

### Prerequisites
- Git installed on your computer
- Node.js and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- GitHub repository connected to your Lovable project
- IONOS hosting account with FTP/SFTP access

---

## Step 1: Clone Your Repository

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and navigate to where you want to work:

```bash
# Clone your repository from GitHub
git clone YOUR_GITHUB_REPO_URL

# Navigate into the project folder
cd YOUR_PROJECT_NAME
```

**Where to find YOUR_GITHUB_REPO_URL:** 
- Go to your GitHub repository page
- Click the green "Code" button
- Copy the HTTPS URL (looks like: `https://github.com/username/repository.git`)

---

## Step 2: Install Dependencies

In the same terminal, run:

```bash
npm install
```

**What this does:** Downloads all the packages your project needs to build.

**Expected output:** You'll see a progress bar and a list of packages being installed. This may take 1-3 minutes.

---

## Step 3: Build for Production

Still in the same terminal, run:

```bash
npm run build
```

**What this does:** 
- Compiles your React/TypeScript code
- Bundles all files together
- Minifies and optimizes everything
- Creates production-ready static files

**Expected output:** 
- Progress messages about building files
- Should complete in 10-30 seconds
- Final message: "✓ built in XXXms"

---

## Step 4: Locate Your Build Files

After the build completes, you'll find a new `dist` folder in your project directory:

```
your-project/
├── dist/              ← THIS IS WHAT YOU UPLOAD!
│   ├── assets/        (CSS, JS, images)
│   ├── index.html
│   └── other files
├── src/
├── public/
└── package.json
```

**The `dist` folder contains:**
- `index.html` - Your main HTML file
- `assets/` folder - Optimized JavaScript, CSS, and images
- Any files from your `public/` folder (like robots.txt)

---

## Step 5: Connect to IONOS via FTP/SFTP

### Option A: Using FileZilla (Recommended for beginners)

1. **Download FileZilla:** [https://filezilla-project.org/](https://filezilla-project.org/)

2. **Get your IONOS FTP credentials:**
   - Log into your IONOS account
   - Go to Hosting → Your package
   - Look for "FTP Access" or "SSH/FTP Access"
   - Note: Host, Username, Password, Port

3. **Connect in FileZilla:**
   - Host: Your IONOS FTP server (e.g., `ftp.yourdomain.com`)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)
   - Click "Quickconnect"

### Option B: Using Command Line (SFTP)

```bash
sftp username@yourdomain.com
# Enter password when prompted
```

---

## Step 6: Upload Files to IONOS

### Important: Find Your Web Root Directory

IONOS typically uses one of these as the web root:
- `/` (root directory)
- `/htdocs/`
- `/public_html/`
- `/www/`

**Check your IONOS documentation to confirm your web root.**

### Upload Process:

1. **Navigate to your web root** in FileZilla (right panel) or via SFTP:
   ```bash
   cd /htdocs/  # or your web root path
   ```

2. **Clear existing files** (if this is an update):
   - Delete old files in the web root
   - **Keep:** `.htaccess` (if present), database files, any custom config

3. **Upload ALL contents of the `dist` folder:**
   - In FileZilla: 
     - Left panel: Navigate to your project's `dist` folder
     - Select ALL files inside `dist` (not the `dist` folder itself)
     - Drag to the right panel (web root)
   - Via SFTP:
     ```bash
     put -r /path/to/your-project/dist/* /htdocs/
     ```

**Critical:** Upload the **contents** of `dist`, not the `dist` folder itself!

Your IONOS structure should look like:
```
/htdocs/  (or your web root)
├── assets/
├── index.html
└── other files
```

NOT like this:
```
/htdocs/
└── dist/
    ├── assets/
    └── index.html
```

---

## Step 7: Configure for Single Page Application (SPA)

React Router requires special configuration. Create/edit `.htaccess` in your web root:

### Via FileZilla:
1. Right-click in the web root → Create new file → Name it `.htaccess`
2. Right-click the file → Edit
3. Add this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Save and upload

**What this does:** Ensures all URLs (like `/sports-performance`) route to your React app instead of showing 404 errors.

---

## Step 8: Test Your Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home page
   - `/sports-performance`
   - `/injury-rehabilitation`
   - `/chronic-pain`
   - `/move-better`
   - `/what-is-dns`
3. Check that navigation works
4. Test on mobile devices

---

## Updating Your Site (Future Deployments)

When you make changes in Lovable:

1. **Pull latest changes:**
   ```bash
   cd your-project-folder
   git pull origin main
   ```

2. **Rebuild:**
   ```bash
   npm run build
   ```

3. **Upload new `dist` contents** to IONOS (overwrite old files)

---

## Troubleshooting

### Problem: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/) or use [nvm](https://github.com/nvm-sh/nvm)

### Problem: White screen after deployment
**Solution:** 
- Check browser console for errors (F12 → Console tab)
- Verify all files uploaded correctly
- Check that files are in web root, not in a subfolder

### Problem: 404 errors on page refresh
**Solution:** 
- Ensure `.htaccess` file is present and configured correctly
- Check that mod_rewrite is enabled on your IONOS server

### Problem: Images not loading
**Solution:** 
- Verify `assets` folder uploaded correctly
- Check file paths are correct (no hard-coded localhost URLs)

### Problem: Old content still showing
**Solution:** 
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Clear IONOS cache if applicable
- Verify new files actually uploaded

---

## Quick Reference Commands

```bash
# Clone from GitHub
git clone YOUR_REPO_URL
cd YOUR_PROJECT

# Install dependencies
npm install

# Build for production
npm run build

# Update existing project
git pull origin main
npm run build

# Connect via SFTP (example)
sftp username@yourdomain.com
cd /htdocs/
put -r dist/* .
```

---

## Need Help?

- IONOS Support: Check your hosting control panel for support docs
- Lovable Docs: [https://docs.lovable.dev/](https://docs.lovable.dev/)
- GitHub Issues: Create an issue in your repository for code-related problems
