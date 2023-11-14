from db import db
from sqlalchemy import Column, Integer, String, ForeignKey


class Profile(db.Model):
    __tablename__ = "profiles"

    userId = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100))
    major = Column(String(100))
    university = Column(String(100))
    about = Column(String(100))
    school = Column(String(100))
    degree = Column(String(100))
    years = Column(Integer)
