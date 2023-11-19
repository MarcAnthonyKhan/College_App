from db import db
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime


class MessageModel(db.Model):
    __tablename__ = "messages"

    messageId = Column(Integer, primary_key=True)
    senderId = Column(Integer, ForeignKey("users.id"))
    receiveId = Column(Integer, ForeignKey("users.id"))
    content = Column(String(512), nullable=False)
    sentTimestamp = Column(DateTime, default=datetime.utcnow)
    lastReadTimestamp = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
