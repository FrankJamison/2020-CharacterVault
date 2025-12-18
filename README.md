# 2020 In-Class App (Characters + Tasks)

A small, full-stack JavaScript app that demonstrates **authentication + CRUD** in a clean, beginner-friendly way.

After a user registers and logs in, they can:
- Create and delete **RPG-style characters**
- Create and delete **to-do tasks**
- Update basic **account settings** (username/email/password)

This project is designed as a portfolio item: it’s intentionally simple, readable, and easy to run locally.

---

## Features

- **Auth**
  - Register + login
  - JWT-based authentication stored in browser `localStorage`
  - Route guarding (redirects unauthenticated users to login)

- **Characters CRUD**
  - Add characters with: name, race, class, level, build, sheet, image
  - List characters per user
  - Delete characters

- **Tasks CRUD**
  - Add tasks with: name + status (pending/completed)
  - List tasks per user
  - Delete tasks

- **Settings**
  - Update username/email/password

---

## Tech Stack

- **Frontend:** HTML + CSS + vanilla JS (Bootstrap 4 styling)
- **Backend:** Node.js + Express
- **Auth:** JWT (`jsonwebtoken`)
- **Password hashing:** `bcryptjs`
- **Persistence:** simple JSON file database (`server/data/db.json`) for easy local use

---

## Project Structure

```
public/                 # Frontend pages + JS modules
  index.html
  login.html
  about.html
  characters/
  todo/
  settings/
  lib/
server/                 # Node server (static + API)
  index.js              # Serves /public and mounts /api
  api.js                # API routes
  data/db.json          # JSON persistence
```

---

## Getting Started (Local)

### Prerequisites

- **Node.js (LTS)** installed (Windows/macOS/Linux)

### Install

From the `server/` folder:

```bash
cd server
npm install
```

### Run

```bash
cd server
npm start
```

Then open:

- http://localhost:4000/

This single server:
- Hosts the frontend at `http://localhost:4000/`
- Exposes the API at `http://localhost:4000/api/...`

---

## API Overview

The frontend calls the API using a same-origin base URL:

- `BASE_API_URL = ${window.location.origin}/api`

Key routes:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/user/me`
- `PUT /api/user/me/update`

- `GET /api/tasks`
- `POST /api/tasks`
- `DELETE /api/tasks/:taskId`

- `GET /api/characters`
- `POST /api/characters`
- `DELETE /api/characters/:characterId`

---

## Data Storage

For local simplicity, the backend stores data in:

- `server/data/db.json`

This includes users, tasks, characters, and ID counters. If you want a clean slate, you can stop the server and reset `db.json` back to an empty structure.

---

## Configuration

Optional environment variables:

- `PORT` (default `4000`) — HTTP server port
- `HTTPS_PORT` (default `4443`) — HTTPS server port
- `JWT_SECRET` (default `dev-secret-change-me`) — JWT signing secret
- `ACCESS_TOKEN_EXPIRES_IN_SECONDS` (default `3600`) — token lifetime

Example (PowerShell):

```powershell
$env:PORT=4000
$env:JWT_SECRET="replace-this"
cd server
npm start
```

---

## Common Issues / Troubleshooting

### “Cannot GET /”

Make sure the Node server is running from `server/` and you’re visiting:

- `http://localhost:4000/`

### “Failed to register” or “Failed to login”

This usually means the API is unreachable. In this project, the API is hosted by the same Node server:

- `http://localhost:4000/api/...`

Also ensure your browser isn’t accidentally calling a different port.

### “Could not get the current user”

This message comes from a frontend helper that tries to display the signed-in username. If you are logged out, log in again; if you’re logged in and still see it, clear `localStorage` and retry.

---

## Notes (Portfolio Context)

- This is a learning-focused project: clarity and approachability are prioritized over advanced patterns.
- The JSON file database is intentional for easy setup; in a production app you’d likely use a real database and stronger session/token handling.

---

## Author

- Frank Jamison — https://fcjamison.com
