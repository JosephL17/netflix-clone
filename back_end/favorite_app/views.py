from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import FavoriteSerializer, LikedSerializer
from .models import Favorite, Liked
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT, HTTP_404_NOT_FOUND
from django.shortcuts import get_object_or_404

# Create your views here.
class FavoritesView(APIView):
    
    # def get(self, request):
    #     user = request.user.id
    #     print(user)
    #     try:
    #         all_movie_ser = FavoriteSerializer(Favorite.objects, many=True)
    #         return Response(all_movie_ser.data, status=HTTP_200_OK)
    #     except all_movie_ser.DoesNotExist:
    #         return Response({"error": "Movie not found"}, status=HTTP_404_NOT_FOUND)

    def get(self, request):
        user = request.user.id
        print(f"User ID: {user}")
        
        try:
            # Retrieve the list of favorite movies for the user
            favorites = Favorite.objects.filter(user=user)
            
            # Check if favorites exists for the user
            if not favorites:
                return Response({"error": "No favorites found for this user"}, status=HTTP_404_NOT_FOUND)
            
            # Serialize the list of favorites
            all_movie_ser = FavoriteSerializer(favorites, many=True)
            
            return Response(all_movie_ser.data, status=HTTP_200_OK)
        
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({"error": "An error occurred while retrieving favorites"}, status=HTTP_404_NOT_FOUND)

    def post(self, request):
        print(request)
        new_like = FavoriteSerializer(data=request.data)
        print(new_like)
        if new_like.is_valid():
            new_like.save()
            return Response(new_like.data, status=HTTP_201_CREATED)
        else:
            return Response(new_like.errors, status=HTTP_400_BAD_REQUEST)
        
class A_Favorite(APIView):
        
    def delete(self, request, id):
        try:
            favorite = Favorite.objects.get(id=id)
            favorite.delete()
            return Response({'message': 'Favorite deleted successfully'}, status=HTTP_204_NO_CONTENT)
        except Favorite.DoesNotExist:
            return Response({'error': 'Favorite not found'}, status=HTTP_400_BAD_REQUEST)


class LikeView(APIView):
    def get(self, request):
        user = request.user.id
        print(f"User ID: {user}")
        
        try:
            # Retrieve the list of favorite movies for the user
            liked_movie = Liked.objects.filter(user=user)
            
            # Check if favorites exists for the user
            if not liked_movie:
                return Response({"error": "No favorites found for this user"}, status=HTTP_404_NOT_FOUND)
            
            # Serialize the list of favorites
            all_liked_ser = LikedSerializer(liked_movie, many=True)
            
            return Response(all_liked_ser.data, status=HTTP_200_OK)
        
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({"error": "An error occurred while retrieving favorites"}, status=HTTP_404_NOT_FOUND)
        
    def post(self, request):
        new_like = LikedSerializer(data=request.data)
        print(new_like)
        if new_like.is_valid():
            new_like.save()
            return Response(new_like.data, status=HTTP_201_CREATED)
        else:
            return Response(new_like.errors, status=HTTP_400_BAD_REQUEST)
        
class A_Like(APIView):
        
    def delete(self, request, id):
        try:
            like = Liked.objects.get(id=id)
            like.delete()
            return Response({'message': 'Like deleted successfully'}, status=HTTP_204_NO_CONTENT)
        except Favorite.DoesNotExist:
            return Response({'error': 'Like not found'}, status=HTTP_400_BAD_REQUEST)