from django.contrib import admin
from .models import Course, Blog, GymTrainer, Newsletter

admin.site.register(Course)
admin.site.register(Blog)
admin.site.register(GymTrainer)
admin.site.register(Newsletter)
