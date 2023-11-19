from db import db
import datetime


class UserModel(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)  # Store securely hashed passwords
    email = db.Column(db.String(100), nullable=False)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    university = db.Column(db.String(100))
    major = db.Column(db.String(100))
    membership = db.Column(db.String(20), default='Standard')
    accountCreatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    lastSeenUserId = db.Column(db.Integer)
    lastSeenJobId = db.Column(db.Integer)