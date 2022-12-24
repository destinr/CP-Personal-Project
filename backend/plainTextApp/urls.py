from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('currentuser/', views.currentUser),
    path('signin/',views.signIn),
    path('signup/',views.signUp),
    path('logout/',views.logOut),
    path('getWord/',views.getWord)
]