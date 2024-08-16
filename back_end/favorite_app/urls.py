from django.urls import path, include
from .views import FavoritesView


urlpatterns = [
    path('', FavoritesView.as_view(), name='favorites'),
    # path('/images',)
]