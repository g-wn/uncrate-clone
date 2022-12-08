from .db import db
from .joins import favorites


#############
# USER MODEL:
#############
class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # RELATIONSHIPS:
    # user_cart <--> cart_user
    user_cart = db.relationship("Cart", back_populates="cart_user", cascade="all, delete")

    # user_favorites <-- favorites --> users_who_favorited
    user_favorites = db.relationship("Product", secondary=favorites, lazy="joined")

    # user_products <--> product_owner
    user_products = db.relationship("Product", back_populates="product_owner", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "username": self.username,
            "email": self.email,
            "products": {product.to_dict(): product.to_dict() for product in self.user_products},
            "favorites": {product.to_dict(): product.to_dict() for product in self.user_favorites}
        }

    def __repr__(self):
        return f"<User {self.id}: {self.first_name} {self.last_name}>"
