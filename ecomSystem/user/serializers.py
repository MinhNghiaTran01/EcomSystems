from rest_framework import serializers # Import the serializer class
from .models import User  # Import the Note model1
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# Create a serializer class
class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def validate_mobile(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Mobile number must contain only digits.")
        if len(value) != 10:
            raise serializers.ValidationError("Mobile number must be 10 digits long.")
        return value

    def create(self, validated_data):
        user = super(UserRegistrationSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        return token 

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


