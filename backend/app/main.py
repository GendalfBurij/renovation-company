import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://urbanovo.xyz"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ====== Email settings (FastMail) ======
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True
)

# ====== Chat endpoint ======
class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(chat: ChatRequest):
    return {"response": f"Echo: {chat.message}"}

# ====== Email endpoint ======
class EmailSchema(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/api/send-email/")
async def send_email(data: EmailSchema):
    message = MessageSchema(
        subject=f"Сообщение от {data.name}",
        recipients=[os.getenv("MAIL_TO")],
        body=f"От {data.name} ({data.email}):\n\n{data.message}",
        subtype="plain"
    )
    fm = FastMail(conf)
    try:
        await fm.send_message(message)
        return {"message": "Письмо отправлено!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке: {str(e)}")

# ====== Health check ======
@app.get("/")
async def read_root():
    return {"message": "Backend is running!"}
