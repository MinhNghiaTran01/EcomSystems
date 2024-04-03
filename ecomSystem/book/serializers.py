from rest_framework import serializers # Import the serializer class
from .models import CategoryBook,Book  # Import the Note model1
# Create a serializer class

class CategoryBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryBook
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'