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



class Get_movies(APIView):
    def get(self, request):
        env = dotenv_values('.env')
        secret_key = env.get('TMDB_SECRET_KEY')
        #------OAuth not working, breaks API call---------
        # auth = OAuth1(env.get('TMDB_API_KEY'))
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {secret_key}"
        }
        
        api_url = 'https://api.themoviedb.org/3/movie/popular?'
        # urls = ['https://api.themoviedb.org/3/discover/movies?',
        #         'https://api.themoviedb.org/3/discover/movies?',
        #         'https://api.themoviedb.org/3/discover/movies?'
        #         ]

        
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
    
    # def get(self, request):
    #     env = dotenv_values('.env')
    #     secret_key = env.get('TMDB_SECRET_KEY')
    #     #OAuth not working, breaks API call
    #     # auth = OAuth1(env.get('TMDB_API_KEY'))
    #     headers = {
    #         "accept": "application/json",
    #         "Authorization": f"Bearer {secret_key}"
    #     }
        
    #     api_url = 'https://api.themoviedb.org/3/movie/popular?'
    #     # api_page_1 = api_url + '1'

        
       
    #     response = requests.get(api_url, headers=headers)
    #     data = response.json()
            
    #     # for item in data:
    #     #     Movie.objects.update_or_create(
    #     #         id=item['id'],
    #     #         defaults={'title': item['title'], 'release_date': item['release_date'], 'overview': item['overview'], 'video':item['video'], 'backdrop_path': item['backdrop_path']}
    #     #     )

    #     return Response(data, status=200)