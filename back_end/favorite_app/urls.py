from django.urls import path, include
from .views import FavoritesView, A_Favorite, LikeView, A_Like


urlpatterns = [
    path('', FavoritesView.as_view(), name='favorites'),
    path('<int:id>/', A_Favorite.as_view(), name='a_favorite'),
    path('likes/', LikeView.as_view(), name='likes'),
    path('likes/<int:id>/', A_Like.as_view(), name='likes')
]