from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Person

#Person
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ("fullname", "role", "company", "target",
        "sector", "city", "state", "country")

# User Serializer
class UserSerializer(serializers.ModelSerializer):
  person = PersonSerializer()
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'person')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  person = PersonSerializer()

  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password', 'person')
    extra_kwargs = {'password': {'write_only': True}, 'requiered':True}

  def create(self, validated_data):
    person_data = validated_data.pop('person')
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
    user.person = Person.objects.create(user=user, **person_data)
    user.save()
    
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")




