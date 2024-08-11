from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser): #look into changing user objects admin permissions
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    user_name = models.CharField(blank=False, max_length=255, unique=True)

    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = [user_name]

    