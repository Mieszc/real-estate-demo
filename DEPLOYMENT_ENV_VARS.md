# Environment Variables

This document lists the environment variables required for the application to function correctly in the production environment (e.g., Netlify).

> **SECURITY WARNING:** Never place actual secret values (API keys, passwords, database URLs) in this file or any file committed to version control. Always configure them securely in your hosting provider's dashboard.

## Required Variables

Please ensure the following environment variables are set in your Netlify Environment settings before deploying:

- `NEXT_PUBLIC_SITE_URL` - The canonical URL of your deployed site (e.g., `https://example.com`)
  - Used for generating absolute URLs in meta tags, sitemaps, and structured data.
- (Add any other required variables here, e.g., `EMAIL_PROVIDER_API_KEY`, `CRM_WEBHOOK_URL`, etc., depending on your integrations.)
