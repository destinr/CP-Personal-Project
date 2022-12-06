from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import AppUser as User

# Create your views here.

# Loads homepage
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def log_in(request):
        if request.method == 'POST':
            body = request.POST
            email = body['email']
            password = body['password']
            
            # remember, we told django that our email field is serving as the 'username' 
            # this doesn't start a login session, it just tells us which user from the db belongs to these credentials
            user = authenticate(username=email, password=password)
            if user is not None:
                if user.is_active:
                    try:
                        login(request, user)
                    except Exception as e:
                        print('oops!')
                        print(str(e))
                    return JsonResponse({'status':"success", 'email':user.email})
                    # Redirect to a success page.
                else:
                    return JsonResponse({'status':"user inactive"})
                    # Return a 'disabled account' error message
            else:
                return JsonResponse({'status':"no user"})
                # Return an 'invalid login' error message.

# Allows frontend to pull user data
@api_view(['GET'])
def whoami(request):
    print("whoami") 
    user = { "name": "adam", "email": "adam@codeplatoon.org"}
    return JsonResponse(data=user)
    
