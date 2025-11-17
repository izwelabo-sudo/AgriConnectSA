# AgriConnectSA - Complete (Frontend + Backend)

This package is a minimal full-stack scaffold ready to deploy on Render.

## What it contains
- Express backend serving API at `/api/farms`
- Static frontend served from `/` that calls the API
- Sample data returned by the API

## Deploy on Render (quick)
1. Upload the repository to GitHub.
2. Create a new Web Service on Render, connect the repo.
   - Root Directory: leave empty
   - Build Command: `npm install`
   - Start Command: `npm start`
3. Ensure `Root Directory` is empty and Render uses the repo root.
4. Render will set `PORT` automatically. Do **not** change server.js to use a fallback port.
5. Deploy.

## Local testing
- Install dependencies:
  ```
  npm install
  ```
- Start locally (you must set PORT locally, e.g.):
  ```
  PORT=5000 npm start
  ```
- Open `http://localhost:5000`

## Notes
- This scaffold is intentionally simple. For production, add database, auth, file storage, and CI.
