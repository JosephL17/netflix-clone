from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import FavoriteSerializer
from .models import Favorite
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT, HTTP_404_NOT_FOUND
from django.shortcuts import get_object_or_404

# Create your views here.
class FavoritesView(APIView):
    
    def get(self, request):
        user = request.user
        try:
            all_movie_ser = FavoriteSerializer(Favorite.objects, many=True)
            return Response(all_movie_ser.data, status=HTTP_200_OK)
        except all_movie_ser.DoesNotExist:
            return Response({"error": "Movie not found"}, status=HTTP_404_NOT_FOUND)

    def post(self, request):
        print(request)
        new_favorite = FavoriteSerializer(data=request.data)
        print(new_favorite)
        if new_favorite.is_valid():
            new_favorite.save()
            return Response(new_favorite.data, status=HTTP_201_CREATED)
        else:
            return Response(new_favorite.errors, status=HTTP_400_BAD_REQUEST)