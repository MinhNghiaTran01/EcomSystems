from django.db import models

# Create your models here.

class CategoryMobile(models.Model):
  name = models.CharField(max_length=200)

class Mobile(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    sku = models.CharField(max_length=100)
    image_url = models.ImageField(upload_to="images/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category_id = models.IntegerField()
    def __str__(self):
        return self.name