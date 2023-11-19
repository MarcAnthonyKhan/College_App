from flask import jsonify
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import (
    jwt_required,
    create_access_token,
    get_jwt,
    create_refresh_token,
)
from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from db import db
from schema import UserSchema, UpdateUserSchema, LoginUserSchema
from models import UserModel

blp = Blueprint("User", __name__, description="Blueprint for users")


@blp.route("/register")
class CreateUser(MethodView):
    @blp.arguments(UserSchema)
    def post(self, data):
        data["password"] = pbkdf2_sha256.hash(data["password"])
        user = UserModel(**data)

        try:
            db.session.add(user)
            db.session.commit()

        except IntegrityError:
            abort(400, message="User already exists.")

        except SQLAlchemyError:
            abort(500, message="Error occured while creating user.")

        return {"message": "User created successfully."}


@blp.route("/login")
class LoginUser(MethodView):
    @blp.arguments(LoginUserSchema)
    def post(self, data):
        user = UserModel.query.filter(UserModel.username == data["username"]).first()

        if user and pbkdf2_sha256.verify(data["password"], user.password):
            token = create_access_token(user.id)
            refresh = create_refresh_token(user.id)

        else:
            abort(401, message="Incorrect username or password. Please try again.")

        return jsonify({"Access Token": token, "Refresh Token": refresh})


@blp.route("/user")
class GetAllUsers(MethodView):
    @blp.response(200, UserSchema(many=True))
    def get(self):
        return UserModel.query.all()


@blp.route("/user/<int:user_id>")
class UpdateUser(MethodView):
    @blp.arguments(UpdateUserSchema)
    @blp.response(202, UserSchema)
    def put(self, data, user_id):
        user = UserModel.query.get(user_id)

        if user:
            user.firstname = data["firstname"]
            user.lastname = data["lastname"]
            user.university = data["university"]
            user.major = data["major"]

        else:
            user = UserModel(id=user_id, **data)

        db.session.add(user)
        db.session.commit()

        return user

    def delete(self, user_id):
        user = UserModel.query.get_or_404(user_id)

        db.session.delete(user)
        db.session.commit()

        return {"message": f"Successfully deleted user!"}
