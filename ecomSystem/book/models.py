from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class CategoryBook(models.Model):
  name = models.CharField(max_length=200)

class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    author = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.ImageField(upload_to="images/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category_id = models.IntegerField()
    def __str__(self):
        return self.title
