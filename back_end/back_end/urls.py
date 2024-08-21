from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include

def connection_test(request):
    return HttpResponse("Test was successful we are connected")

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/test/", connection_test),
    path('api/v1/users/', include("user_app.urls")),
    path('api/v1/Profile/', include("profile_app.urls")),
    path("api/v1/Favorites/", include("favorite_app.urls")),
    path('api/v1/movies/', include('movie_app.urls')),
    path('api/v1/gemini/', include('gemini_app.urls'))
]