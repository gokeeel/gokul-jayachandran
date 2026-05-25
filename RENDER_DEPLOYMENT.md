# Render Deployment Guide

This guide explains how to deploy your full-stack application to Render.

## Prerequisites

1. A Render account (https://render.com)
2. Your repository pushed to GitHub
3. The `render.yaml` file in your repository root

## Deployment Steps

### 1. Connect Your Repository

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Select your GitHub repository
4. Render will automatically detect the `render.yaml` file

### 2. Configure Environment Variables

The following environment variables are automatically set:
- `NODE_ENV`: production
- `PORT`: 10000
- `DATABASE_URL`: Automatically provided by the PostgreSQL database

### 3. Deploy

1. Click "Deploy Blueprint"
2. Render will:
   - Build your application (`npm run build`)
   - Create a PostgreSQL database
   - Run migrations (`npm run db:push`)
   - Start your application (`npm start`)

## What Gets Deployed

- **Web Service**: Your Express + React application
- **PostgreSQL Database**: Free tier database for user data
- **Static Files**: React frontend built and served by Express

## Important Notes

### Database Migrations

Migrations run automatically on first deployment via the `initializer` in `render.yaml`. For subsequent deployments:

1. Update your schema in `shared/schema.ts`
2. Generate migrations: `npm run db:push` (locally)
3. Commit and push to GitHub
4. Render will automatically run migrations on redeploy

### Environment Variables

If you need additional environment variables (API keys, etc.):

1. Go to your service settings on Render
2. Add them under "Environment"
3. Redeploy the service

### Monitoring

- View logs: Service Dashboard → "Logs"
- Check database: Service Dashboard → "Database" tab
- Monitor performance: Service Dashboard → "Metrics"

## Troubleshooting

### Build Fails

Check the build logs in Render dashboard. Common issues:
- Missing dependencies: Run `npm install` locally and commit `package-lock.json`
- TypeScript errors: Run `npm run check` locally to verify

### Database Connection Issues

1. Verify `DATABASE_URL` is set in environment
2. Check database is running in Render dashboard
3. Ensure migrations ran successfully

### Application Won't Start

1. Check logs for errors
2. Verify `npm start` works locally: `NODE_ENV=production npm start`
3. Ensure all environment variables are set

## Costs

- **Web Service**: Free tier available (limited resources)
- **PostgreSQL Database**: Free tier available (limited storage)
- Upgrade anytime from Render dashboard

## Next Steps

1. Push this repository to GitHub
2. Go to Render and create a Blueprint deployment
3. Monitor the deployment in the Render dashboard
