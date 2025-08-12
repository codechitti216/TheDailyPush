# 🚀 GitHub Pages Setup Guide

This guide helps you deploy your research portfolio template to GitHub Pages.

## ⚠️ IMPORTANT: One-Time Setup Required

GitHub Actions **cannot automatically enable GitHub Pages** due to security restrictions. You must manually enable it once per repository.

---

## 📋 Step-by-Step Setup

### **Step 1: Enable GitHub Pages**

1. **Go to your repository on GitHub**
   ```
   https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
   ```

2. **Navigate to Settings**
   - Click the **"Settings"** tab (rightmost tab in repository navigation)

3. **Configure Pages**
   - Scroll down and click **"Pages"** in the left sidebar
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - **Custom domain**: Leave blank (unless you have a custom domain)
   - **Enforce HTTPS**: ✅ Enable (recommended)
   - Click **"Save"**

### **Step 2: Trigger Deployment**

After enabling Pages, the deployment will happen automatically when you:
- Push to the `main` branch
- Or manually trigger via **Actions** → **Deploy to GitHub Pages** → **Run workflow**

### **Step 3: Access Your Site**

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

---

## 🔧 Troubleshooting

### **Error: "Resource not accessible by integration"**
✅ **FIXED**: Make sure you've enabled GitHub Pages manually (Step 1 above)

### **Error: "Not Found - Pages site"**
✅ **FIXED**: This means Pages isn't enabled yet. Follow Step 1.

### **Build Fails**
Check the **Actions** tab for detailed error logs:
1. Go to **Actions** tab in your repository
2. Click on the failed workflow run
3. Check build logs for specific errors

### **Site Shows 404**
- Ensure `dist/index.html` exists after build
- Check that build script runs successfully
- Verify Vite builds to `dist/` directory

---

## 🎯 Expected Result

After setup, you should see:

1. **✅ Successful Workflow**: Green checkmark in Actions tab
2. **✅ Live Site**: Portfolio accessible at your GitHub Pages URL
3. **✅ Automatic Updates**: New pushes trigger automatic redeployment

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/marketplace?type=actions&query=pages)
- [Vite Static Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🆘 Need Help?

If you encounter issues:

1. **Check Actions logs** for detailed error messages
2. **Verify all steps** in this guide were completed
3. **Open an issue** in the original template repository with error logs

---

**✨ Template by [Surya GS Chitti](https://github.com/codechitti216)**
