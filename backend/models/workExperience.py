from db import db
from sqlalchemy import Column, Integer, String, ForeignKey, CheckConstraint


class WorkExperienceModel(db.Model):
    __tablename__ = "workExperiences"

    id = Column(Integer, primary_key=True)
    userId = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100), nullable=False)
    employer = Column(String(100), nullable=False)
    monthStarted = Column(Integer, nullable=False)
    yearStarted = Column(Integer, nullable=False)
    monthEnded = Column(Integer, nullable=False)
    yearEnded = Column(Integer, nullable=False)
    location = Column(String(100), nullable=False)
    description = Column(String(512), nullable=False)

    __table_args__ = (
        CheckConstraint(
            "monthStarted >= 1 AND monthStarted <= 12", name="valid_monthStarted_check"
        ),
        CheckConstraint(
            "monthEnded >= 1 AND monthEnded <= 12", name="valid_monthEnded_check"
        ),
        CheckConstraint(
            "yearStarted >= 1900 AND yearStarted <= 2099",
            name="valid_yearStarted_check",
        ),
        CheckConstraint(
            "yearEnded >= 1900 AND yearEnded <= 2099", name="valid_yearEnded_check"
        ),
    )
