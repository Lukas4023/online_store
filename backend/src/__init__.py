from flask import Flask
from .config.config import Config
from .controllers.user import user
from .config.extensions import db
from flask_cors import CORS


def handle_error(e):
    return {
       "code": e.code,
       "name": e.name,
       "description": e.description
   }, e.code


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    db.init_app(app)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
    app.register_blueprint(user)

    with app.app_context():
        db.create_all()

    return app
