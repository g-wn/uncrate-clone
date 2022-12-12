from flask import Blueprint, jsonify, request, redirect, render_template
from flask_login import login_required
from app.models import db, Product, ProductImage
from app.forms import ImageForm


images_routes = Blueprint("images", __name__)


# ------------------------------ IMAGES ROUTES ------------------------------#


# GET ALL IMAGES:
@images_routes.route("")
def get_images():
    """
    Query for all images and returns them in a list of image dictionaries.
    """

    images = ProductImage.query.all()
    return {"Images": [image.to_dict() for image in images]}


# CREATE A NEW IMAGE:
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


# UPDATE A SINGLE IMAGE URL:
@images_routes.route("<int:id>/update", methods=["GET", "PUT", "POST"])
# @login_required
def update_product_image(id):
    """
    Query for a single product image by id and update the image's URL.
    """
    product_image = ProductImage.query.get(id)
    product_image_dict = product_image.to_dict()

    form = ImageForm(url=product_image_dict["url"])

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        setattr(product_image, "url", data["url"])

        db.session.commit()
        return redirect(f"/api/products/{product_image_dict['productId']}")
    return render_template("test_update_image.html", form=form, id=id)


# DELETE A SINGLE PRODUCT IMAGE:
@images_routes.route("/<int:id>", methods=["DELETE"])
def delete_product_img(id):
    """
    Query for a single product id and delete the associated product's image.
    """
    product_image = ProductImage.query.get(id)
    print(product_image, "***********product image -->")
    db.session.delete(product_image)
    db.session.commit()
    return {"message": "Successfully deleted", "status_code": 200}
