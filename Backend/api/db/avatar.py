from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class FeedRequest(BaseModel):
    token_id: int
    wallet: str

# Mock DB
last_fed = {}

@router.post("/feed")
def feed_avatar(data: FeedRequest):
    now = datetime.utcnow()
    token = data.token_id

    if token in last_fed:
        diff = (now - last_fed[token]).total_seconds()
        if diff < 6 * 3600:
            return {"error": "You must wait 6 hours between feeds."}

    last_fed[token] = now
    return {
        "message": f"Cow #{token} fed!",
        "mood_boost": 10,
        "xp_gain": 5
    }
