# Pre-Deployment Checklist

Before pushing code that will trigger a production deployment, run through this checklist to ensure stability.

## 1. Local Build Verification
Always verify that the application can build successfully on your local machine before pushing.
```bash
npm run build
```
Verify that the output finishes without structural errors or missing dependency issues.

## 2. Start Production Server locally
After a successful build, start the production server locally to simulate the deployed environment.
```bash
npm run start
```
Visit `http://localhost:3000` and perform a quick manual sanity check of critical paths (e.g., loading the homepage, testing internationalization, ensuring contact forms or calculators render without crashing).

## 3. Linting and Type Checking
Run the linter and type checker to catch potential issues that might fail the build pipeline.
```bash
npm run lint
# If applicable
npm run type-check
```

## 4. Environment Variables
Check that no actual `.env` files with production secrets are staged for commit. Ensure that any *new* environment variables required by your recent changes have been added to the Netlify dashboard and documented in `DEPLOYMENT_ENV_VARS.md`.

## 5. Git Status Check
Ensure only the intended files are staged for commit.
```bash
git status
```
Verify that `.next/`, `node_modules/`, and `.env` files are correctly ignored and not staged.
