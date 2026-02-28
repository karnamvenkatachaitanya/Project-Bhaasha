# Project Bhaasha

Project Bhaasha is a full‑stack language learning platform designed to help users reclaim and celebrate their linguistic heritage through immersive lessons, live interaction, and AI‑assisted speaking practice. The repository contains separate **backend** and **frontend** applications.

---

## 🚀 Key Features

- **Multi‑role authentication** (super_admin, admin, trainer, learner) with mock login for development.
- **AI speaking practice** – users upload audio, receive transcription, feedback and a score (simulated via `ai_engine`).
- **Responsive React frontend** built with Vite that includes: landing page, about, contact, services, and various dashboards for different roles.
- **Support for Supabase schema** outlining users, lessons, and progress tables with row‑level security policies.
- **Modular architecture** using FastAPI routers and React components.
- **Client‑side routing** with `react-router-dom` and animated interactions via `framer-motion`.
- **Unit tests** for critical UI components using Vitest and React Testing Library.

---

## 🧱 Tech Stack

### Backend
- [Python](https://www.python.org/) & [FastAPI](https://fastapi.tiangolo.com) for RESTful API
- CORS middleware configured for local development
- Pydantic models for request/response validation
- Mock authentication service and AI engine (placeholder for real AI4Bharat integration)
- SQL schema for Supabase (PostgreSQL + RLS policies)

### Frontend
- [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) build tool
- [Tailwind CSS](https://tailwindcss.com/) for utility‑first styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for illustrations
- [Supabase JS](https://supabase.com/docs/reference/javascript/introduction) and [Axios](https://axios-http.com/) for API calls
- Client‑side routing using `react-router-dom`
- ESLint and Tailwind for linting/style enforcement
- Testing with [Vitest](https://vitest.dev/) and React Testing Library

### Development Tools
- Node.js, npm (or yarn) for frontend
- Python 3.11+ for backend
- Git for version control

---

## 🛠️ Installation & Running

### Backend
1. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
2. Install dependencies (add them to `requirements.txt` as needed):
   ```bash
   pip install fastapi[all]
   ```
3. Start the API server:
   ```bash
   uvicorn backend.main:app --reload --port 8000
   ```
4. The root endpoint is available at `http://localhost:8000/`.

### Frontend
1. Change into the frontend directory and install packages:
   ```bash
   cd frontend
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:5173` to view the app.

### Testing
- Frontend tests: `npm run test`
- Backend tests: (none currently included)

---

## 🗂️ Repository Structure

```
backend/                  # FastAPI application
  main.py                 # application entrypoint
  routers/                # API routers (auth, AI)
  services/               # business logic (ai_engine)
  supabase_schema.sql     # PostgreSQL schema for Supabase

frontend/                 # React & Vite application
  src/                    # source code (components, pages, context)
  public/                 # static assets
  package.json            # npm configuration
  README.md               # Vite-generated placeholder

```

---

## 📝 Notes
- Authentication, AI processing, and database interactions are currently mocked for development; they should be replaced with real implementations when connecting to Supabase / AI4Bharat or another backend service.
- The Supabase schema defines basic tables and row‑level security policies which can be applied to a Supabase project.

---

## 📚 Contributing
Feel free to open issues or pull requests. The code is organized to allow expanding with real data models, authentication, and AI inference logic.

---
