# Pydantic Settings
from pydantic_settings import BaseSettings, SettingsConfigDict


# Settings
class Settings(BaseSettings):
    # Security
    API_KEY: str = ''

    # Local DB
    DATABASE_URL: str = ''

    # SupaBase PostgreSQL
    POSTGRES_URL: str = ''
    POSTGRES_USER: str = ''
    POSTGRES_PASSWORD: str = ''
    POSTGRES_HOST: str = ''
    POSTGRES_DATABASE: str = ''

    # SupaBase other env
    POSTGRES_PRISMA_URL: str = ''
    POSTGRES_URL_NON_POOLING: str = ''
    SUPABASE_ANON_KEY: str = ''
    SUPABASE_URL: str = ''
    SUPABASE_SERVICE_ROLE_KEY: str = ''
    SUPABASE_JWT_SECRET: str = ''
    SUPABASE_PUBLISHABLE_KEY: str = ''
    SUPABASE_SECRET_KEY: str = ''
    NEXT_PUBLIC_SUPABASE_ANON_KEY: str = ''
    NEXT_PUBLIC_SUPABASE_URL: str = ''
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: str = ''

    model_config = SettingsConfigDict(env_file=".env")


# Run the settings
settings = Settings()

# Test
print(settings)
