import requests
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from requests_oauthlib import OAuth1
from .models import Movie
from back_end.settings import env
from dotenv import dotenv_values
from .serialzer import MovieSerializer
import random



class Get_movies(APIView):
    def get(self, request,):

        env = dotenv_values('.env')
        secret_key = env.get('TMDB_SECRET_KEY')
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {secret_key}",
        }

        media = ['movie', 'tv']
        random_media = random.choice(media)
        random_page = random.randint(1, 100)
        
        api_url = f'https://api.themoviedb.org/3/discover/{random_media}?&page={random_page}'

        
        response = requests.get(api_url, headers=headers)
        data = response.json()

        return Response(data, status=200)

        
    

    # def get_movie(self, request):
    #     env = dotenv_values('.env')
    #     secret_key = env.get('TMDB_SECRET_KEY')
    #     headers = {
    #         "accept": "application/json",
    #         "Authorization": f"Bearer {secret_key}",
    #     }

    #     media = ['movie', 'tv']
    #     genre_id = [16, 35, 80, 18, 99]
        
        
    #     api_url = f'https://api.themoviedb.org/3/discover/{media[0]}?with_genres={genre_id[0]}'

        
    #     response = requests.get(api_url, headers=headers)
    #     data = response.json()
    #     # for item in data:
    #     #     Movie.objects.update_or_create(
    #     #         id=item['id'],
    #     #         defaults={'title': item['title'], 'release_date': item['release_date'], 'overview': item['overview'], 'video':item['video'], 'backdrop_path': item['backdrop_path']}
    #     #     )

    #     return Response(data, status=200)
    

    def get_tv(self, request):
        env = dotenv_values('.env')
        secret_key = env.get('TMDB_SECRET_KEY')
        #------OAuth not working, breaks API call---------
        # auth = OAuth1(env.get('TMDB_API_KEY'), env.get('TMDB_SECRET_KEY'))
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {secret_key}",
        }

        media = 'movie'
        genre_id = 35
        
        api_url = f'https://api.themoviedb.org/3/discover/{media}?with_genres={genre_id}'

        
        # responses = [requests.get(url, headers=headers) for url in urls]
        # data = [response.json() for response in responses]
        response = requests.get(api_url, headers=headers)
        data = response.json()
        # for item in data:
        #     Movie.objects.update_or_create(
        #         id=item['id'],
        #         defaults={'title': item['title'], 'release_date': item['release_date'], 'overview': item['overview'], 'video':item['video'], 'backdrop_path': item['backdrop_path']}
        #     )

        return Response(data, status=200)
    

class Trailers(APIView):
    def get(self, request):

            
        env = dotenv_values('.env')
        secret_key = env.get('TMDB_SECRET_KEY')
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {secret_key}",
        }
        #will fix later, hard code num for now
        # movie_id = request.id

        api_url = f'https://api.themoviedb.org/3/movie/12/videos?language=en-US'

        
        response = requests.get(api_url, headers=headers)
        data = response.json()

        return Response(data, status=200)