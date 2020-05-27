from rest_framework import serializers

from api.models import DimUser

class SingUpSerializer(serializers.ModelSerializer):

    password2=serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model=DimUser
        fields = ['userid', 'username' 'name', 'role', 'company', 'email', 'password', 'password2', 'Target', 'Sector', 'LocationId']
        extra_kwargs = {
            'password': {'write_only' : True}

        }

def save(self):
    user=DimUser(
        email=self.validated_data['email'],
        username=self.validated_data['username'],
    )
    password = self.validated_data['password']
    password2 = self.validated_data['password2']

    if password != password2:
        raise serializers.ValidationError({'password': 'Passwords must match'})
    user.set_password(password)
    user.save()
    return user