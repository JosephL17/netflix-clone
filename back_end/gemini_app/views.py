from django.shortcuts import render
import google.generativeai as genai
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from back_end.settings import env
from dotenv import dotenv_values

# Create your views here.
class Gemini(APIView):
    def get(self, request):
        env = dotenv_values('.env')
        genai.configure(api_key=env.get("GEMINI_KEY"))

        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content("Recommend a top rated movie or tv show on netflix to watch tonight. Dont worry about the rest of the details, I just need a movie name")
        return Response(response.text)