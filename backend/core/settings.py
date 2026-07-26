# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    # Security
    API_KEY: str = ""

    # Production PostgreSQL
    POSTGRES_URL: str = ""

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()
