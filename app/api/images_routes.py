from flask import Blueprint, jsonify, request, redirect, render_template
from flask_login import login_required
from app.models import db, Product, ProductImage
from app.forms import ImageForm


images_routes = Blueprint("images", __name__)


# ------------------------------ IMAGES ROUTES ------------------------------#


@images_routes.route("")
def get_images():
    """
    Query for all images and returns them in a list of image dictionaries.
    """

    images = ProductImage.query.all()
    return {"Images": [image.to_dict() for image in images]}


@images_routes.route("/<int:product_id>/new", methods=["GET", "POST"])
def create_image(product_id):
    """
    A logged-in user can send a post request to add a new image to one of their products by product id.
    """
    form = ImageForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_img = ProductImage(product_id=product_id, url=data["url"])

        db.session.add(new_img)
        db.session.commit()

        return redirect(f"/api/products/{product_id}")
    return render_template("test_image_form.html", form=form, product_id=product_id)
