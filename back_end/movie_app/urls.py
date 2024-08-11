from django.urls import path
from .views import Get_movies

urlpatterns = [
    path('fetch-data/', Get_movies.as_view(), name='fetch_and_store_data'),
]