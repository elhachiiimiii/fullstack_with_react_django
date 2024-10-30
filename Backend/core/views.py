from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from core.models import Course, Blog, GymTrainer, Newsletter
from .serializers import CourseSerializer, BlogSerializer, GymTrainerSerializer, NewsletterSerializer




class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class GymTrainerViewSet(viewsets.ModelViewSet):
    queryset = GymTrainer.objects.all()
    serializer_class = GymTrainerSerializer

class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer
