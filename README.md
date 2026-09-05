# Full-Stack Personal Portfolio

A professional, dynamic, and responsive personal portfolio built with modern full-stack web technologies.

## Tech Stack

- **Frontend**: React.js, Vite, React Router DOM, Framer Motion, Vanilla CSS (CSS Variables for Theming).
- **Backend**: Node.js, Express.js.
- **Database**: PostgreSQL (via Prisma ORM).

## Features

- **Dark Mode**: Seamless light/dark mode toggling with persistence.
- **Dynamic Content**: Projects and Contact messages are driven by a PostgreSQL database.
- **Admin Panel**: A protected dashboard for managing projects (Create, Read, Delete).
- **Responsive Design**: Mobile-first grid layouts.
- **Animations**: Scroll-based animations using Framer Motion.

## Local Setup

### 1. Prerequisites
- Node.js (v18+)
- PostgreSQL installed and running locally (or use a cloud provider like Supabase/Neon).

### 2. Backend Setup
1. Open terminal and navigate to `backend/`.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in `backend/` based on `.env.example`:
   ```
   PORT=5000
   DATABASE_URL="postgresql://user:password@localhost:5432/portfolio?schema=public"
   ```
4. Run Prisma Migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. (Optional) Seed the database:
   ```bash
   node prisma/seed.js
   ```
6. Start the backend development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to `frontend/`.
2. Run `npm install`.
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the provided `localhost` URL in your browser.

## Deployment Guide

### Backend (Render, Railway, or Heroku)
1. Set up a PostgreSQL database on your chosen provider.
2. Deploy the `backend` folder as a Node.js web service.
3. Add the `DATABASE_URL` environment variable in your provider's dashboard.
4. Ensure the build command includes `npx prisma generate`.
5. Run migrations (`npx prisma db push`) during the build process or manually via the provider's CLI.

### Frontend (Vercel or Netlify)
1. Deploy the `frontend` folder to Vercel/Netlify.
2. Add a `VITE_API_URL` environment variable pointing to your deployed backend URL (e.g., `https://my-backend.onrender.com/api`).
3. Set the build command to `npm run build` and output directory to `dist`.

## Admin Access
To access the admin panel, navigate to `/admin`.
The default password for local development is `admin123`. For production, ensure you set the `VITE_ADMIN_PASSWORD` environment variable in your frontend deployment configuration.
