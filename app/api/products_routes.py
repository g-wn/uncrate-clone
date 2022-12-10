from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product, ProductImage


products_routes = Blueprint("products", __name__, url_prefix="/products")


@products_routes.route("/")
def get_products():
    pass
