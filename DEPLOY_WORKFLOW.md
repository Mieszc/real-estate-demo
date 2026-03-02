# Deployment Workflow

This guide details the daily workflow for deploying updates to Netlify, along with procedures for troubleshooting and rolling back changes.

## 1. Daily Deployment Flow

1. **Develop and Test Locally:** Follow the steps in `PRE_DEPLOY_CHECKLIST.md` to ensure your code is stable.
2. **Commit Changes:** Formulate clear, descriptive commit messages.
   ```bash
   git add .
   git commit -m "feat: your descriptive message"
   ```
3. **Push to GitHub:** Push your committed changes to your main deployment branch (usually `main` or `master`). This action will automatically trigger a new build on Netlify if continuous deployment is configured.
   ```bash
   git push origin main
   ```
4. **Monitor Build:** Check the Netlify dashboard to monitor the build progress. Ensure it completes successfully.

## 2. Troubleshooting Failed Builds

If a deployment fails on Netlify, follow these steps:

1. **Review Build Logs:** In the Netlify dashboard, open the failed deploy log. Look for the specific error message near the bottom of the log output. Common issues include:
   - Missing dependencies (forgot to save to `package.json`)
   - TypeScript or ESLint errors blocking the build
   - Missing environment variables required at build time
2. **Replicate Locally:** Attempt to reproduce the error locally by running a clean build:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```
3. **Fix and Repush:** Correct the issue locally, commit the fix, and push again to trigger a new deployment.

## 3. Rollback Procedures

If a bad deployment makes it to production, you can instantly roll back to a previously stable version.

1. **Access Netlify Dashboard:** Go to your site's dashboard on Netlify.
2. **Navigate to Deploys:** Click on the "Deploys" tab.
3. **Select Stable Deploy:** Find the previous successful deployment in the list that you know is stable. Click on it to view deploy details.
4. **Publish Deploy:** Click the **"Publish deploy"** button. This will instantly revert your live site to this specific build without needing to revert your Git history immediately.
5. **Fix the Issue:** After the site is safely rolled back, investigate the broken code locally, fix it, and push a corrected version.
