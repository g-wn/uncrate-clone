from app.models import db, ProductImage, environment, SCHEMA
from _01_products_gear import products_gear_imgs
from _02_products_style import products_style_imgs
from _03_products_cars import products_cars_imgs
from _04_products_tech import products_tech_imgs
from _05_products_shelter import products_shelter_imgs
from _06_products_vices import product_vices_imgs
from _07_products_body import products_body_imgs
from _08_products_etc import products_etc_imgs

def seed_product_images():
    images = [
        ProductImage()
    ]
