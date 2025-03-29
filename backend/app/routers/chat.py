# backend/app/routers/chat.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.context_loader import get_company_context
from app.services.openai_client import ask_chatgpt

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat_endpoint(request: ChatRequest):
    try:
        context = get_company_context()
        full_prompt = f"{context}\n\nUsuario: {request.message}"
        response = ask_chatgpt(full_prompt)
        return {"response": response}
    except Exception as e:
        print("🔴 Ошибка в /chat:", e)
        raise HTTPException(status_code=500, detail=str(e))
