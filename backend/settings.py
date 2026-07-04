# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    # Security
    API_KEY: str = ''

    # Local DB
    DATABASE_URL: str = ''

    # SupaBase
    POSTGRES_URL: str = ''
    POSTGRES_USER: str = ''
    POSTGRES_PASSWORD: str = ''
    POSTGRES_HOST: str = ''
    POSTGRES_DATABASE: str = ''

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()

# Test
print(settings)
