from db import db
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from datetime import datetime


class Job(db.Model):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    description = Column(String(100), nullable=False)
    employer = Column(String(100), nullable=False)
    location = Column(String(100), nullable=False)
    salary = Column(Integer, nullable=False)
    postedDate = Column(DateTime, default=datetime.utcnow)
    posterId = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="jobs")
