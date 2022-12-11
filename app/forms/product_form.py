from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired


categories = {
    1: "Gear",
    2: "Style",
    3: "Cars",
    4: "Tech",
    5: "Shelter",
    6: "Vices",
    7: "Body",
    8: "Etc",
}


# ------------------------------ PRODUCT FORM ------------------------------ #


class ProductForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    detailed_description = TextAreaField("Detailed Description")
    category_id = SelectField(
        "Category",
        choices=[(k, v) for k, v in categories.items()],
        validators=[DataRequired()],
    )
    price = IntegerField("Price", validators=[DataRequired()])
    preview_img_url = StringField("Preview Image URL", validators=[DataRequired()])
    submit = SubmitField("Submit")
