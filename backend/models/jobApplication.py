from db import db
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime


class JobApplicationModel(db.Model):
    __tablename__ = "jobApplications"

    userId = Column(Integer, primary_key=True)
    jobId = Column(Integer, ForeignKey("jobs.id"))
    gradDate = Column(DateTime)
    workAvailability = Column(String(100), nullable=False)
    qualifications = Column(String(256))
    saved = Column(Integer, default=0)
    deleted = Column(Integer, default=0)
    appliedTimestamp = Column(DateTime, default=datetime.utcnow)

    job = relationship("Job", back_populates="jobApplications")
