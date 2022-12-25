from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import AppUser as User, Word, Definition
import requests as HTTPClient
from requests_oauthlib import OAuth1
import re

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
def logOut(request):
    logout(request)
    return JsonResponse(data={'status': 'User logged out.'})

@api_view(['GET'])
def getWord(request):

    # Gathers a random word from the Random-Word-API
    apiNinjaKey = '0m0x7UiJ5k3qldFYwp+v/Q==Z9t6K3oBvAenAdo0'
    api_url = 'https://api.api-ninjas.com/v1/randomword'
    app_id  = 'f42a39b0'
    app_key  = '630b23220cad3f9a800f3fa8c0f16867'
    
    validWord = False
    while not validWord:
        
        response = HTTPClient.get(api_url, headers={'X-Api-Key': '0m0x7UiJ5k3qldFYwp+v/Q==Z9t6K3oBvAenAdo0'})
        strResponse = response.text
        wordTemp = (strResponse.split(":"))[1]
        wordFinal = "".join(re.findall("[a-zA-Z]+", wordTemp))
        
        endpoint = url = "https://od-api.oxforddictionaries.com/api/v2/" + 'entries' + "/" + 'en-us' + "/" + wordFinal.lower() + '?fields=' + 'definitions'
        defRes = HTTPClient.get(endpoint, headers = {"app_id": app_id, "app_key": app_key})
        defResJSON = defRes.json()
        try:
            definition = defResJSON['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'][0]
            validWord = True
        except:
            pass
        
    # tries to create a new word instance in the database, will work if word has not already begun to be defined
    try:
        newWord=Word(word=wordFinal)
        newWord.save()
        wordObj=Word.objects.get(word=wordFinal)
        data = {'id': wordObj.id, 'word':wordObj.word}
        
    
    # serves existing word database instance if word is already in database    
    except:
        wordObj=Word.objects.get(word=wordFinal)
        data = {'id': wordObj.id, 'word':wordObj.word}  
        
    data['ODef'] = definition
    
    return JsonResponse(data)

@api_view(['POST'])
def submitDef(request):
    userDef = request.data['userDef']
    wordID = request.data['wordID']
    userEmail = request.data['userEmail']
    
    relatedUser = User.objects.get(email=userEmail)
    relatedWord = Word.objects.get(id=wordID)
    
    newDefinition = Definition(word=relatedWord, user=relatedUser, definition=userDef)
    print(newDefinition)
    newDefinition.save()
    
    return JsonResponse({'success':True})

@api_view(['POST'])
def getRecent(request):
    userEmail = request.data['userEmail']
    relatedUser = User.objects.get(email=userEmail)
    
    definitions = list(Definition.objects.filter(user=relatedUser))
    data = {}
    
    if len(definitions) > 5:
        for entry in definitions[-5:]:
            data[entry.word.word] = entry.definition
    else:
        for entry in definitions:
            data[entry.word.word] = entry.definition

    return JsonResponse({'data':data})



