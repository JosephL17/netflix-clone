from django.urls import path, include
from .views import FavoritesView, A_Favorite


urlpatterns = [
    path('', FavoritesView.as_view(), name='favorites'),
    path('<int:id>/', A_Favorite.as_view(), name='a_favorite')
]