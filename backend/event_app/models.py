from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return self.title
