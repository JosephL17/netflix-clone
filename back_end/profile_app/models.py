from django.db import models
from django.core import validators as v
from user_app.models import User

# Create your models here.
class Profile(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(blank=False, null=False)
    kids_account = models.BooleanField(blank=False, null=False, default=False)


