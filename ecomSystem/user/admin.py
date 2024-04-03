from django.contrib import admin

from .models import User

# Đăng ký model UserRegistration để có thể quản lý qua trang admin.
admin.site.register(User)
