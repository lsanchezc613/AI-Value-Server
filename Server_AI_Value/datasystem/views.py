from django.shortcuts import render
from django.http import HttpResponse
from .models import Data
from .serializers import DataSerializer

# Vista para la subida de datos, pendiente implementacion completa integrada al frontend
class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def post(self, request, *args, **kwargs):
        user = request.data['user']
        data = request.data['data']
        Data.objects.create(user=user, data= data)
        return HttpResponse({'message': 'Data upload'}, status=200)