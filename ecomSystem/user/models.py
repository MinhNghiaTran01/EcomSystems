from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser
from django.db import models

# This is our model for user registration.
class User(AbstractUser):
    # The following are the additional fields of our table.
    mobile = models.CharField(max_length=12)
    address = models.CharField(max_length=200)

    def __str__(self):
        return '{} {} {} {} {}'.format(self.first_name, self.last_name,
                                       self.email, self.mobile, self.address)
   