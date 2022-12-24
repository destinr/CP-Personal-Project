from django.db import models
from django.contrib.auth.models import (AbstractUser)
from django.core.validators import RegexValidator

# Create your models here.

class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255, blank=True)
    
    EDUCATION_LEVEL_CHOICES = [
        (0, "Some high school"),
        (1, "High school graduate"),
        (2, "Some college"),
        (3, "Associate's degree"),
        (4, "Bachelor's degree"),
        (5, "Master's degree"),
        (6, "Professional degree other than J.D."),
        (7, "J.D." ),
        (8, "PhD")
    ]
    education_level = models.IntegerField(choices = EDUCATION_LEVEL_CHOICES, blank = True)
    
    is_active = models.BooleanField(default=True)

    # notice the absence of a "Password field", that is built in.

    # django uses the 'username' to identify users by default, but many modern applications use 'email' instead
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.
    

class Word(models.Model):
    word = models.CharField(max_length=255, unique=True)

class Definition(models.Model):
    definition = models.CharField(max_length=255)
    word = models.ForeignKey(Word,on_delete=models.CASCADE,related_name='definitions')
    user = models.ForeignKey(AppUser,on_delete=models.CASCADE,related_name="definitions")
