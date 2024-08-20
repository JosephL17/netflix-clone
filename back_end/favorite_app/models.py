from django.db import models
from django.core import validators as v
from PIL import Image
from user_app.models import User

# Create your models here.
class Favorite(models.Model):
    title = models.CharField(blank=True, null=True, validators=[])
    name = models.CharField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    overview = models.TextField(blank=True, null=True)
    backdrop_path = models.CharField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

class Liked(models.Model):
    title = models.CharField(blank=True, null=True, validators=[])
    name = models.CharField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    overview = models.TextField(blank=True, null=True)
    backdrop_path = models.CharField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)