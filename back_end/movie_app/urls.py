from django.urls import path
from .views import Get_movies, Trailers

urlpatterns = [
    path('fetch-data/', Get_movies.as_view(), name='fetch_and_store_data'),
    path('trailers/', Trailers.as_view(), name='trailers')
]