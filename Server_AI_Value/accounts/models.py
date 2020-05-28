from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='person')
    fullname = models.CharField(max_length=50)
    role = models.CharField(max_length=25)
    company = models.CharField(max_length=25)
    target = models.CharField(max_length=15)
    sector = models.CharField(max_length=25)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=25)
    country = models.CharField(max_length=25)



