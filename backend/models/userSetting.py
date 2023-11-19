from db import db
from sqlalchemy import Column, Integer, String, ForeignKey


class UserSettingsModel(db.Model):
    __tablename__ = "userSettings"

    userId = Column(Integer, ForeignKey("users.id"))
    receiveEmail = Column(Integer, default=0)
    receiveSMS = Column(Integer, default=0)
    targetedAds = Column(Integer, default=0)
    language = Column(String(80), default="English")
