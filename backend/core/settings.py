# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    # Security
    API_KEY: str = ""
    SECRET: str = ""
    ALGORITHM: str = ""

    # PostgreSQL
    POSTGRES_URL: str = ""

    # Sentry
    SENTRY_DSN: str = ""

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()
