from django.db import models
from django.core import validators as v


# Create your models here.
class Movie(models.Model):
    title = models.CharField(blank=False, null=False)
    release_date = models.DateField(blank=False, null=False)
    overview = models.TextField(blank=False, null=False)
    video = models.URLField()
    backdrop_path = models.CharField()


