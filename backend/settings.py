# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    API_KEY: str = ''
    DATABASE_URL: str = ''

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()
