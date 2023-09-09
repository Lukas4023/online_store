from flask_login import UserMixin
from ..config.extensions import db


class User(db.Model, UserMixin):
    user_id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(255), nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    user_name = db.Column(db.String(30), nullable=True)
    user_surname = db.Column(db.String(100), nullable=True)
    user_account_status = db.Column(db.Integer, nullable=False)
    user_city = db.Column(db.String(255), nullable=True)
    user_zip_code = db.Column(db.String(6), nullable=True)
    user_street = db.Column(db.String(255), nullable=True)
    user_house_number = db.Column(db.Integer, nullable=True)
    user_account_type = db.Column(db.String(255), nullable=True)

    def __init__(self, user_dict):
        for key, value in user_dict.items():
            setattr(self, key, value)

    def serialize(self):
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}
