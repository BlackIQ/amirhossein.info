# Datetime
from datetime import datetime, timedelta, timezone

# JWT
import jwt

# UUID
import uuid

# Application
from core.settings import settings  # Settings

# Secret and Algo
SECRET = settings.SECRET
ALGORITHM = settings.ALGORITHM


def create_token(user_id: uuid.UUID) -> str:
    expire = datetime.now(timezone.utc) + timedelta(days=1)

    payload = {
        "sub": str(user_id),
        "exp": int(expire.timestamp()),
    }

    return jwt.encode(payload=payload, key=SECRET, algorithm=ALGORITHM)
