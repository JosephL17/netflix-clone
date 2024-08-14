from django.shortcuts import render
from django.core.exceptions import ValidationError
from django.contrib.auth import login, logout, authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_app.token_auth import CookieAuthentication
from rest_framework.authtoken.models import Token
from .models import User
from datetime import datetime, timedelta
from back_end.utilities import HttpOnlyTokenAuthentication

# {
#   "user": "testy",
#   "cookie": "722b5d21464ddae76f0b555a144a3ae29ad7a443"
# }
# {
#   "user": "test8",
#   "Token": "ae0940763986df5571a5cf3600a98ab9e2ee36a8"
# }

# Create your views here.
class Sign_up(APIView):
    def post(self, request):
        data = request.data.copy()
        print(request.data)
        # data['username'] = request.data.get("user_name")
        # new_user = User(**data)
        new_user = User.objects.create_user(**data)
        print(new_user)
        try:
            new_user.set_password(data.get("password"))
            new_user.full_clean()
            # new_user.save()
            new_user.save()
            login(request, new_user)
            token = Token.objects.create(user = new_user)
            response = Response({"user":new_user.username, "Token": token.key}, status=HTTP_201_CREATED)
            # life_time = datetime.now()+timedelta(days=7)
            # flife_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            # response.set_cookie(
            #     key='token',
            #     value=token.key,
            #     httponly=True,
            #     secure=True,
            #     samesite="Lax",
            #     expires=flife_time
            # )
            return response
        except ValidationError as e:
            print(e)
            return Response(e, status=HTTP_400_BAD_REQUEST)

class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()
        # data['username'] = request.data.get("username", request.data.get("email"))
        user = authenticate(username=data.get("username"), password=data.get("password"))
        print(user)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user = user)
            response = Response({"user":user.username, "Token": token.key}, status=HTTP_200_OK)
            # life_time = datetime.now()+timedelta(days=7)
            # flife_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            # response.set_cookie(
            #     key='token',
            #     value=token.key,
            #     httponly=True,
            #     secure=True,
            #     samesite="Lax",
            #     expires=flife_time
            # )
            return response
        return Response("No user matching credentials", status=HTTP_400_BAD_REQUEST)
    
class TokenReq(APIView):

    authentication_classes=[TokenAuthentication]
    permission_classes = [IsAuthenticated]


#logout view not working correctly? credentials not provided?
class Log_out(APIView):
    authentication_classes=[TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        response = Response(status=HTTP_204_NO_CONTENT)
        # response.delete_cookie('token')
        return response
    
# class Info(TokenReq):

#     def get(serf, request):
#         return Response({"user":request.user.display_name})
    
#     def put(self, request):
#         try:
#             data = request.data.copy()
#             ruser = request.user
#             # check for display_name, age, address
#             ruser.user_name = data.get("user_name", ruser.user_name)
#             ruser.age = data.get("age", ruser.age)
#             ruser.address = data.get("address", ruser.address)
#             # authenticate credential
#             cur_pass = data.get("password")
#             if cur_pass and data.get("new_password"):
#                 auth_user = authenticate(username = ruser.username, password = cur_pass)
#                 if auth_user == ruser:
#                     ruser.set_password(data.get("new_password"))
                    
#             # if credentials match the user
#             # update password and save it
#             ruser.full_clean()
#             ruser.save()
#             return Response({"user_name":ruser.user_name, "age":ruser.age, "address":ruser.address})
#         except ValidationError as e:
#             print(e)
#             return Response(e, status=HTTP_400_BAD_REQUEST)