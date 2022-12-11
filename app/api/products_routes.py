from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Product, ProductImage, db


products_routes = Blueprint("products", __name__)


# ------------------------------ PRODUCT ROUTES ------------------------------#


@products_routes.route("/")
def get_products():
    """
    Query for all products and returns them in a list of product dictionaries.
    """

    products = Product.query.all()
    print([product.to_dict() for product in products])
    return {"Products": [product.to_dict() for product in products]}


@products_routes.route("/<int:id>")
def get_one_product(id):
    """
    Query for a single product by id and return it as a dictionary.
    """

    product = Product.query.get(id)
    return product.to_dict()


@products_routes.route("/", methods=["POST"])
@login_required
def post_product():
    """
    A logged-in user can send a post request to create a new product
    """

    form = ProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_product = Product(
            title=data["title"],
            description=data["description"],
            detailed_description=data["detailed_description"],
            category_id=data["category_id"],
            owner_id=current_user["id"],  # DOUBLE CHECK THIS
            price=data["price"],
            preview_img_id=new_image["id"]
        )

        new_image = ProductImage(
            product_id=new_product["id"],
            preview_img_url=data["preview_img_url"]
        )

        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    # CHECK AND ADD ERROR HANDLING

@products_routes.route("/product_images")
def get_product_images():
    """
    Query for all product images and returns them in a list of product image dictionaries.
    """

    product_images = ProductImage.query.all()
    return {"Product_Images": [product_image.to_dict() for product_image in product_images]}
