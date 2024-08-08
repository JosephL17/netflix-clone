from django.db import models
from django.core import validators as v
from PIL import Image

# Create your models here.
class Favorite(models.Model):
    title = models.CharField(blank=False, null=False, validators=[])
    genre = models.CharField(blank=False, null=False)
    description = models.CharField(blank=False, null=False)
    img = models.ImageField(upload_to='favorites/')
