from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from user_app.models import User 
from .models import Favorite, Liked

class FavoriteSerializer(ModelSerializer):
    class Meta:
        model = Favorite
        fields = "__all__"

class LikedSerializer(ModelSerializer):
    class Meta:
        model = Liked
        fields = "__all__"