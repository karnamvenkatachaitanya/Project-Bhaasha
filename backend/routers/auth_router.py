from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class LoginResponse(BaseModel):
    token: str
    role: str
    name: str

@router.post("/login", response_model=LoginResponse)
async def login(credentials: LoginRequest):
    # Mock database lookup
    users = {
        "super@bhaasha.com": {"role": "super_admin", "name": "Super Admin"},
        "admin@bhaasha.com": {"role": "admin", "name": "Admin User"},
        "trainer@bhaasha.com": {"role": "trainer", "name": "Guru Ji"},
        "learner@bhaasha.com": {"role": "learner", "name": "Arjun Learner"},
    }

    user = users.get(credentials.email)
    
    if user and credentials.password == "password":
        return {
            "token": "mock-jwt-token",
            "role": user["role"],
            "name": user["name"]
        }
    
    raise HTTPException(status_code=401, detail="Invalid credentials")
