from db import db
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime


class User(db.Model):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(80), unique=True, nullable=False)
    password = Column(String(256), nullable=False)  # Store securely hashed passwords
    firstname = Column(String(80))
    lastname = Column(String(80))
    university = Column(String(100))
    major = Column(String(100))
    membership = Column(String(20))
    accountCreatedAt = Column(DateTime, default=datetime.utcnow)
    lastSeenUserId = Column(Integer)
    lastSeenJobId = Column(Integer)
