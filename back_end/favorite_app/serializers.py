from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from user_app.models import User 
from .models import Favorite

class FavoriteSerializer(ModelSerializer):
    class Meta:
        model = Favorite
        fields = "__all__"

# class A_FavoriteSerializer(ModelSerializer):
#     class Meta:
#         model = Favorite
#         fields = "__all__"