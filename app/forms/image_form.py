from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


# ------------------------------ IMAGE FORM ------------------------------ #


class ImageForm(FlaskForm):
    url = StringField("Image URL", validators=[DataRequired()])
    submit = SubmitField("Submit")
