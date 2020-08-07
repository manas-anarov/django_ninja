from django.db import models


class Post(models.Model):
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
    title = models.CharField(max_length=200)
    text = models.CharField(max_length=500)

    def __str__(self):
        return self.title
