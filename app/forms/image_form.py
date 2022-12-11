from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


# ------------------------------ IMAGE FORM ------------------------------ #


class ImageForm(FlaskForm):
    url = StringField("Image URL", validators=[DataRequired()])
