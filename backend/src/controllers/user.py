from flask import Blueprint, jsonify
from ..models.user import User

user = Blueprint('user', __name__, url_prefix='/user')


@user.route('/', methods=['GET'])
def get_all():
    users = User.query.all()
    users_data = [user.serialize() for user in users]
    return jsonify(users_data)


@user.route('/gimme', methods=['GET'])
def test_database():
    result = User.query.first()
    if result:
        return f"Database is working. Retrieved data: {result}"
    else:
        return "Database is empty."
