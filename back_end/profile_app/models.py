from django.db import models
from django.core import validators as v

# Create your models here.
class Profile(models.model):
    user_name = models.CharField(blank=False)
    age = models.PositiveIntegerField(blank=False, null=False, validators=[v.MaxValueValidator(12)])