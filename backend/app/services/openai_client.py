# # backend/app/services/openai_client.py
# import os
# from openai import OpenAI
# from dotenv import load_dotenv

# load_dotenv()
# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# def ask_chatgpt(prompt: str) -> str:
#     try:
#         response = client.chat.completions.create(
#             model="gpt-3.5-turbo",
#             messages=[
#                 {"role": "system", "content": "Eres un asistente de una empresa de reformas llamado Repair.cat. Responde de forma profesional y clara."},
#                 {"role": "user", "content": prompt}
#             ],
#             temperature=0.7,
#             max_tokens=500
#         )
#         return response.choices[0].message.content.strip()
#     except Exception as e:
#         return f"Error al contactar con el modelo: {e}"
# backend/app/services/openai_client.py
# backend/app/services/openai_client.py
from openai import OpenAI
import os
from dotenv import load_dotenv
import logging

load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY")
)

def ask_chatgpt(prompt: str) -> str:
    try:
        completion = client.chat.completions.create(
            model="mistralai/mistral-7b-instruct:free",  # Смена модели!
            messages=[
                {
                    "role": "system",
                    "content": "Eres un asistente de reformas del hogar. Responde en español de forma clara y útil."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            max_tokens=400,
            extra_headers={
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Repair.cat"
            }
        )
        return completion.choices[0].message.content

    except Exception as e:
        logging.error(f"❌ Error OpenRouter: {e}")
        return f"❌ Error OpenRouter: {e}"
