from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv

load_dotenv()  # Загружаем переменные окружения

app = FastAPI()

# Настройка почты (Gmail SMTP или любой другой сервис)
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=587,  # Порт SMTP (Gmail)
    MAIL_SERVER="smtp.gmail.com",
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True
)

# Модель данных для запроса
class EmailSchema(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/send-email/")
async def send_email(data: EmailSchema):
    message = MessageSchema(
        subject=f"Сообщение от {data.name}",
        recipients=[os.getenv("MAIL_TO")],  # Получатель (из .env)
        body=f"От {data.name} ({data.email}):\n\n{data.message}",
        subtype="plain"
    )
    fm = FastMail(conf)
    try:
        await fm.send_message(message)
        return {"message": "Письмо отправлено!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке: {str(e)}")

# Разрешаем запросы с фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Адрес React-приложения
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Renovation Company API is working!"}