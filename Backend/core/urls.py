
from django.urls import include, path
from core import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, BlogViewSet, GymTrainerViewSet, NewsletterViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'trainers', GymTrainerViewSet)
router.register(r'newsletters', NewsletterViewSet)
urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
