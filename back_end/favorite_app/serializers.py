from rest_framework.serializers import ModelSerializer
from .models import Favorite

class FavoariteSerializer(ModelSerializer):
    class Meta:
        model = Favorite
        fields = "__all__"
