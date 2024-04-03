from django.urls import include, path
from rest_framework import routers
from .views import getListCategories,getListBook

urlpatterns = [
   path('categories/', getListCategories.as_view(), name='categories_book'),
   path('categories/<int:category_id>/', getListBook.as_view(), name='list_book'),
]
