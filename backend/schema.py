from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)
    email = fields.Str(required=True)

class UpdateUserSchema(Schema):
    username = fields.Str()
    password = fields.Str()
    email = fields.Str()
    firstname = fields.Str()
    lastname = fields.Str()
    university = fields.Str()
    major = fields.Str()
    membership = fields.Str()
    accountCreatedAt = fields.Str()
    lastSeenUserId = fields.Str()
    lastSeenJobId = fields.Str()
    
class LoginUserSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)
