from django.db import models
from django.contrib.auth.models import User

def upload_path(instance, filename):
    return '/'.join(['data_crude', str(instance.user), filename])

# Create your models here.
class Data(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data = models.FileField(blank=True, null=True, upload_to=upload_path)
