# Deployment

## Netlify frontend

The root `netlify.toml` sets the frontend base directory to `frontend/Task-Manager`, runs `npm run build`, and publishes the Vite `build` directory. Its redirect rule serves the React app entry point for client-side routes.

Set `VITE_API_URL` in the Netlify site's environment variables to the deployed Render service origin, without an `/api` suffix (for example, `https://your-render-service.onrender.com`). The development fallback is `http://localhost:5000`.

## Render backend and MongoDB Atlas

The root `render.yaml` configures a Node web service rooted at `backend`. Set `MONGO_URI`, `JWT_SECRET`, `ADMIN_INVITE_TOKEN`, and `CLIENT_URL` in Render's environment settings. Set `CLIENT_URL` to the deployed Netlify site origin. Render supplies `PORT`.

Create a MongoDB Atlas database and put its connection string in `MONGO_URI`. Ensure the Atlas network access list permits connections from the Render service.

## Uploaded images

Multer stores uploaded files under `backend/uploads`, and Express serves them from `/uploads`. This directory is local filesystem storage: files can disappear when a Render instance restarts or is redeployed unless the service has persistent storage mounted at that path. Render persistent disks are a paid option; no external or paid storage provider is configured here. Without persistent storage, use uploads only when losing them on a restart/deploy is acceptable.

## Local environment files

Copy `backend/.env.example` to `backend/.env` for local backend settings. The frontend's `VITE_API_URL` is optional locally because the app defaults to `http://localhost:5000`. Never put backend secrets in frontend environment variables.
