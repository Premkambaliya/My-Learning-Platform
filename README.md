# My Learning Platform

A full‑stack learning platform with a modern React (Vite) frontend and a Node.js/Express + MongoDB backend.

It provides free courses, interactive quizzes, and an AI query solver (chatbot) with session‑only history. Clean UI built with Tailwind.

## Features
- **Authentication**
- **Courses**
- **Course Detail**
- **Joined Courses**
- **Quizzes by Language**
- **AI Query Solver (Chatbot)**
- **Responsive UI**

## Tech Stack
- **Frontend**: Vite + React 19, React Router, Tailwind CSS, Axios, React‑Toastify
- **Backend**: Node.js, Express, Mongoose/MongoDB, JWT, Bcrypt, CORS, Dotenv, Nodemailer
- **AI**: Google Gemini API (optional OpenAI fallback)

## Monorepo Structure
```
Learning/
├─ Backend/
│  ├─ server.js
│  ├─ controllers/
│  ├─ routes/
│  ├─ models/
│  ├─ config/
│  └─ package.json
└─ Frontend/
   └─ vite_app/
      ├─ src/
      ├─ index.html
      └─ package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1) Backend setup
1. Open a terminal in `Backend/` and install dependencies:
   ```bash
   npm install
   ```
2. Create `Backend/.env`:
   ```env
   PORT=5000
   MONGO_URI="your-mongodb-connection-string"
   JWT_SECRET="your-strong-jwt-secret"
   ```
3. Start the API server:
   ```bash
   npm run dev
   ```
   The API serves at `http://localhost:5000` by default with routes under `/api`.

### 2) Frontend setup
1. Open another terminal in `Frontend/vite_app/` and install dependencies:
   ```bash
   npm install
   ```
2. Create `Frontend/vite_app/.env`:
   ```env
   VITE_GOOGLE_GEMINI_API_KEY=your_gemini_key
   # Optional fallback
   VITE_OPENAI_API_KEY=your_openai_key
   ```
   Notes:
   - In Vite, only variables prefixed with `VITE_` are exposed to the client.
   - The Query Solver persists chat only in `sessionStorage` and clears when the tab/window closes.
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite usually runs on `http://localhost:5173` (or similar).

## API Endpoints (Backend)
Base URL: `/api`

- `POST /api/auth/signup` — Create account
- `POST /api/auth/login` — Login
- `GET  /api/auth/me` — Get current user (requires `Authorization: Bearer <token>`)

- `GET    /api/courses` — List courses
- `GET    /api/courses/:id` — Course detail
- `POST   /api/courses/join/:courseId` — Join course (auth)
- `DELETE /api/courses/leave/:courseId` — Leave course (auth)
- `GET    /api/courses/user/joined` — Joined courses (auth)

- `GET /api/quizzes?language=<lang>` — Get quizzes for a language

> Some frontend files currently use a hosted API base (Render). For local development, you can point those fetch/axios calls to `http://localhost:5000` as needed.

## Environment Variables Summary

Backend (`Backend/.env`):
- `PORT` — API server port (default 5000)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for signing JWT tokens

Frontend (`Frontend/vite_app/.env`):
- `VITE_GOOGLE_GEMINI_API_KEY` — Google Generative Language API key (Gemini)
- `VITE_OPENAI_API_KEY` — Optional OpenAI API key for fallback

## AI Query Solver (Chatbot)
- Calls Google Gemini using the key in `VITE_GOOGLE_GEMINI_API_KEY`.
- Optionally falls back to OpenAI if configured.
- Chat state is saved in `sessionStorage` under `chatSession`.
  - Persists during page refreshes within the same tab.
  - Clears automatically when the tab/window is closed.
  - Not stored on the server or in `localStorage`.

Security tips:
- Frontend API keys are visible to users; restrict your Gemini key by HTTP referrers in Google Cloud and rotate if exposed.
- For maximum security, proxy AI calls through the backend and keep keys server‑side.

## Scripts

Backend (`Backend/`):
- `npm run dev` — Start server with nodemon
- `npm start` — Start server with node

Frontend (`Frontend/vite_app/`):
- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Highlights
- Clean, modern UI with Tailwind
- Clear route structure and modular controllers on the backend
- Session‑only AI chat to respect user privacy
- Ready for local dev or deployment (e.g., Render for backend)

## Contributing
- Fork the repo, create a feature branch, commit with clear messages, open a PR.

## License
This project is provided as‑is for learning and personal use. Add a license file if you want to distribute under a specific license.
