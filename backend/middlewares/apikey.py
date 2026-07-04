# FastAPI
from fastapi import status, Security, HTTPException
from fastapi.security import APIKeyHeader

# Settings
from settings import settings

# Header Schema for API Key
header_schema = APIKeyHeader(name="X-API-KEY", description="API Key in header")


# API-KEY middleware
async def apikey_middleware(api_key: str = Security(header_schema)):
    if not api_key:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing API key"
        )

    if api_key != settings.API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key"
        )
