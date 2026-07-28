from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

import os

load_dotenv()

HOST = os.getenv("MYSQL_HOST")
USER = os.getenv("MYSQL_USER")
PASSWORD = os.getenv("MYSQL_PASSWORD")
DATABASE = os.getenv("MYSQL_DATABASE")

print(f"HOST = {HOST}")
print(f"USER = {USER}")
print(f"PASSWORD = {PASSWORD}")
print(f"DATABASE = {DATABASE}")

DATABASE_URL = (
    f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}/{DATABASE}"
)

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autoflush=False,
    autocommit=False,
    bind=engine
)

Base = declarative_base()