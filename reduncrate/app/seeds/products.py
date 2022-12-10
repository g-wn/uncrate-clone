from app.models import db, Product, environment, SCHEMA

# make sure Product import is working correctly // paste in Gray's model into models directory?
from ._01_products_gear import products_gear
from ._02_products_style import products_style
from ._03_products_cars import products_cars
from ._04_products_tech import products_tech
from ._06_products_vices import products_vices
from ._08_products_etc import products_etc


# add 05_shelter & 07_body
def seed_products():
    gear = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_gear
    ]

    style = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_style
    ]

    cars = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_cars
    ]

    tech = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_tech
    ]

    vices = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_vices
    ]

    etc = [
        Product(
            id=product["id"],
            title=product["title"],
            description=product["description"],
            detailed_description=product["detailed_description"],
            category_id=product["category_id"],
            owner_id=product["owner_id"],
            price=product["price"],
            preview_img_id=product["preview_img_id"],
        )
        for product in products_etc
    ]

    [db.session.add(product) for product in gear]
    [db.session.add(product) for product in style]
    [db.session.add(product) for product in cars]
    [db.session.add(product) for product in tech]
    [db.session.add(product) for product in vices]
    [db.session.add(product) for product in etc]

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM products")

        db.session.commit()
