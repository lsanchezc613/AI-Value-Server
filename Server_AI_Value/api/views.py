from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework import Response
from rest_framework import api_view

from Server_AI_Value.api.serializers import SingUpSerializer


@api_view(['POST',])
def singUp_view(request):

    if request.method == 'POST':
        serializer = SingUpSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "successfully registered"
            data['email'] = user.email
            data['username'] = user.username
        else:
            data = serializer.errors
        return Response(data)
        