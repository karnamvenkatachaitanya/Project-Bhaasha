from fastapi import APIRouter, UploadFile, File, HTTPException
from services import ai_engine
from pydantic import BaseModel

router = APIRouter()

class PracticeResponse(BaseModel):
    transcription: str
    feedback: str
    score: int

@router.post("/practice", response_model=PracticeResponse)
async def practice_speaking(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No audio file provided")
    
    # In a real app, we would save the file and pass the path
    # For now, we just simulate processing
    result = ai_engine.process_audio(file.filename)
    return result
