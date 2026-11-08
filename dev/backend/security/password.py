# Password Lib
from pwdlib import PasswordHash

# Regex
import re

# Hash instance
password_hash = PasswordHash.recommended()


# Hash password
def hash_password(password: str) -> str:
    return password_hash.hash(password)


# Verify password
def verify_password(password: str, hashed: str) -> bool:
    return password_hash.verify(password, hashed)


def validate_password_strength(password: str) -> bool:
    if not isinstance(password, str):
        return False

    if len(password) < 12:
        return False

    if not re.search(r"[a-z]", password):
        return False

    if not re.search(r"[A-Z]", password):
        return False

    if not re.search(r"\d", password):
        return False

    if not re.search(r"[^A-Za-z0-9]", password):
        return False

    return True
