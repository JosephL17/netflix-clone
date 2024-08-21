from django.urls import path
from .views import Gemini



urlpatterns = [
    path('', Gemini.as_view(), name='gemini')
]