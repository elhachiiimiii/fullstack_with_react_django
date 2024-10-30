
from rest_framework import serializers
from core.models import Course, Blog, GymTrainer, Newsletter


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class GymTrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymTrainer
        fields = '__all__'

class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'
