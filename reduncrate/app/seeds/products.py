from app.models import db, Product, environment, SCHEMA
# make sure Product import is working correctly // paste in Gray's model into models directory?

# add 05_shelter & 07_body
def seed_products():
    gear = Product(

    )
    style = Product(

    )
    cars = Product(

    )
    tech = Product(

    )
    vices = Product(

    )
    etc = Product(

    )

    db.session.add(gear)
    db.session.add(style)
    db.session.add(cars)
    db.session.add(tech)
    db.session.add(vices)
    db.session.add(etc)
    db.session.commit()

    def undo_products():
        if environment == "production":
            db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTARD IDENTITY CASCADE;")
        else:
            db.session.execute("DELETE FROM products")

        db.session.commit()