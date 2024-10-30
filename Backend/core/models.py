from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    schedule = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_images/')
    date = models.DateField()
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class GymTrainer(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='trainer_images/')
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    subscribed_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
