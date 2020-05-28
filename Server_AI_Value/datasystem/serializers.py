from rest_framework import serializers
from .models import Data
#from django.contrib.auth.models import User

class DataSerializer(serializers.HyperlinkedIdentityField):
    class Meta:
        model = Data
        fields = ['user', 'data']