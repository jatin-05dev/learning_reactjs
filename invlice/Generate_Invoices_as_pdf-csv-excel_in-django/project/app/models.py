from django.db import models
from django.core.exceptions import ValidationError
from datetime import date
# Create your models here.
def validate_age(value):
    today = date.today()
    min_age = 18
    max_age = 25
    age = today.year - value.year - ((today.month, today.day) < (value.month, value.day))

    if age < min_age or age > max_age:
        raise ValidationError(f"Age must be between {min_age} and {max_age} years.")

class Student(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    dob = models.DateField(validators=[validate_age])
    contact = models.IntegerField()
    city = models.CharField(max_length=50)