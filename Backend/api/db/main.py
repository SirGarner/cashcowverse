from fastapi import FastAPI
from api import avatar

app = FastAPI()

app.include_router(avatar.router, prefix="/avatar")

@app.get("/")
def root():
    return {"message": "CashCow API is online 🐮"}
