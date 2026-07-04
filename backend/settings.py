# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    # Application
    APP_MODE: str = ''  # development | production

    # Security
    API_KEY: str = ''

    # Development PostgreSQL URL
    POSTGRES_DEV_URL: str = ''

    # Production PostgreSQL URL
    POSTGRES_PROD_URL: str = ''

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()
