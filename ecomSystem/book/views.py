from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import CategoryBook,Book
from .serializers import CategoryBookSerializer,BookSerializer
from django.shortcuts import get_object_or_404
# Create your views here.

class getListCategories(ListAPIView):
    queryset = CategoryBook.objects.all()
    serializer_class = CategoryBookSerializer

class getListBook(ListAPIView):
    serializer_class = BookSerializer
    def get_queryset(self):
        category_id = self.kwargs['category_id']  # Lấy tên thể loại từ URL
        category = get_object_or_404(CategoryBook, id=category_id)  # Tìm thể loại bằng tên
        return Book.objects.filter(category_id=category.id)  