from .db import db


#############
# CART MODEL:
#############
class Cart(db.Model):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)  # FOREIGN KEY EVEN THOUGH 1:1?
    total = db.Column(db.DECIMAL(2), nullable=False)
    purchased = db.Column(db.Boolean, default=False)

    # RELATIONSHIPS:
    # cart_items <--> item_cart
    cart_items = db.relationship("CartItem", back_populates="item_cart")

    # cart_user <--> user_cart
    cart_user = db.relationship("User", back_populates="user_cart")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "total": self.total,
            "purchased": self.purchased,
        }

    def __repr__(self):
        return f"<Cart: {self.id}, User ID: {self.user_id}>"


##################
# CART_ITEM MODEL:
##################
class CartItem(db.Model):
    __tablename__ = "cart_items"

    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey("carts.id"), nullable=False)
    product_id = db.Column(db.Integer, nullable=False)  # FOREIGN KEY EVEN THOUGH 1:1?
    quantity = db.Column(db.Integer, nullable=False)

    # RELATIONSHIPS:
    # item_cart <--> cart_items
    item_cart = db.relationship("Cart", back_populates="cart_items")

    # product <--> cart_item
    product = db.relationship("Product", back_populates="cart_item")

    def to_dict(self):
        return {
            "id": self.id,
            "cartId": self.cart_id,
            "productId": self.product_id,
            "quantity": self.quantity,
        }

    def __repr__(self):
        return f"<Product: {self.product_id}, Cart: {self.cart_id}>"
