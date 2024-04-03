from rest_framework import serializers # Import the serializer class
from .models import Category  # Import the Note model1
# Create a serializer class

class CategoryMobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'



