from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import AppUser as User

# Create your views here.

# Loads homepage
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["POST"])
def signIn(request):
    email=request.data["email"]
    password=request.data["password"]
    user = authenticate(username= email, password = password)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'signIn':True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIn':False})
    else:
        return JsonResponse({'signIn':False})


@api_view(['POST'])
def signUp(request):
    if request.method == "POST":
        try:
            newUser = User(first_name=request.data['fName'], last_name=request.data['lName'], username=request.data['email'], password=request.data['password'], email=request.data['email'], job_title=request.data['jobTitle'], education_level=request.data['edLvl'] )
            newUser.save()
            return JsonResponse({'signUp':True})
        except Exception as e:
            print('oops!')
            return JsonResponse({'signUp':False})
       
# Allows frontend to pull user data
@api_view(['GET'])
def currentUser(request):
    if request.user.is_authenticated:
        data=serializers.serialize("json", [request.user], fields=['email','first_name','last_name','job_title','education_level'])
        return HttpResponse(data)
    else:
        return JsonResponse({"user":None})

@api_view(['POST'])
def log_out(request):
    logout(request)
    return JsonResponse(data={'status': 'User logged out.'})
    
