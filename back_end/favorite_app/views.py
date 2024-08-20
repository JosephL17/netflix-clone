from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import FavoriteSerializer
from .models import Favorite
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
        new_favorite = FavoriteSerializer(data=request.data)
        print(new_favorite)
        if new_favorite.is_valid():
            new_favorite.save()
            return Response(new_favorite.data, status=HTTP_201_CREATED)
        else:
            return Response(new_favorite.errors, status=HTTP_400_BAD_REQUEST)
        
class A_Favorite(APIView):
        
    def delete(self, request, id):
        try:
            favorite = Favorite.objects.get(id=id)
            favorite.delete()
            return Response({'message': 'Favorite deleted successfully'}, status=204)
        except Favorite.DoesNotExist:
            return Response({'error': 'Favorite not found'}, status=HTTP_400_BAD_REQUEST)


        # try:
        #     #grab show/movie from database
        #     favorite = Favorite.objects.get(id=id)
        #     # favorite = get_object_or_404(Favorite, id=id)
        # except Favorite.DoesNotExist:
        #     return Response({'error': 'Favorite not found'}, status=HTTP_404_NOT_FOUND)
        
        # favorite.delete()
        # return Response(status=HTTP_204_NO_CONTENT)
