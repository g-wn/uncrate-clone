from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import db, joins, User, Product, favorites


favorites_routes = Blueprint("favorites", __name__)


# ------------------------------ FAVORITES ROUTES ------------------------------#

# ADD A FAVORITES:
@favorites_routes.route("", methods=["POST"])
def add_favorite():
    """
    A logged-in user can send a post request to add a product to their favorites list.
    """
    queried_user = User.query.get(current_user.get_id())

    product_id = request.json["productId"]
    queried_product = Product.query.get(product_id)


    queried_user.user_favorites.append(queried_product)

    db.session.commit()

    return jsonify({
        "status_code": 201,
        "message": "Successfully Created Favorite"
    })

# GET FAVORITES BY USER ID
@favorites_routes.route("/<int:id>")
def get_user_favorites(id):
    """
    Query for a single user's active favorites list.
    """
    queried_user = User.query.get(id)

    users_favorites = queried_user.user_favorites       

    print("""
    
    
    
    
    
    
    
    """, {"Favorites": [product.to_dict() for product in users_favorites]})
    return {"Favorites": [product.to_dict() for product in users_favorites]}





