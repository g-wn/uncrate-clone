from flask import Blueprint, jsonify, render_template, request, redirect
from flask_login import login_required, current_user
from app.models import db, Product, ProductImage
from app.forms import ProductForm


products_routes = Blueprint("products", __name__)


# ------------------------------ PRODUCT ROUTES ------------------------------#


@products_routes.route("")
def get_products():
    """
    Query for all products and returns them in a list of product dictionaries.
    """

    products = Product.query.all()
    return {"Products": [product.to_dict() for product in products]}


@products_routes.route("/<int:id>")
def get_one_product(id):
    """
    Query for a single product by id and return it as a dictionary.
    """

    product = Product.query.get(id)
    return product.to_dict()


@products_routes.route("", methods=["GET", "POST"])
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
            owner_id= current_user.get_id(),
            price=data["price"],
            preview_img_id=0,
        )

        db.session.add(new_product)
        db.session.commit()

        new_preview_img = ProductImage(
            product_id=new_product.to_dict()["id"], url=data["preview_img_url"]
        )

        db.session.add(new_preview_img)
        db.session.commit()

        setattr(new_product, "preview_img_id", new_preview_img.to_dict()["id"])

        db.session.commit()

        return redirect(f"/api/products/{new_product.to_dict()['id']}")
    return render_template("test_form.html", form=form)
    # CHECK AND ADD ERROR HANDLING

@products_routes.route("/product_images")
def get_product_images():
    """
    Query for all product images and returns them in a list of product image dictionaries.
    """

    product_images = ProductImage.query.all()
    return {"Product_Images": [product_image.to_dict() for product_image in product_images]}
