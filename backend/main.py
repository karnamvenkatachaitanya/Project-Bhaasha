from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import ai_router, auth_router

app = FastAPI(title="Project Bhaasha API")

# CORS Configuration
origins = [
    "http://localhost:5173",  # React Frontend
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(ai_router.router, prefix="/api/ai", tags=["AI"])
app.include_router(auth_router.router, prefix="/api/auth", tags=["Auth"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Project Bhaasha API"}
