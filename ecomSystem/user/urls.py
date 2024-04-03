from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('register', views.registration_req),
    path('list', views.list_user),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getProfile, name='profile'),
    # path('profile/update/', views.updateProfile, name='update-profile'),
]
