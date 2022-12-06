from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
    
