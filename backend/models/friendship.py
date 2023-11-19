from db import db
from sqlalchemy import Column, Integer, Boolean, ForeignKey


class FriendshipModel(db.Model):
    __tablename__ = "friendships"

    acceptRequest = Column(Boolean, default=False)
    senderId = Column(Integer, ForeignKey("users.id"))
    receiverId = Column(Integer, ForeignKey("users.id"))
