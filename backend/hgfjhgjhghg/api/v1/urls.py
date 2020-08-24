from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GvhfhgfhgfhgViewSet

router = DefaultRouter()
router.register("gvhfhgfhgfhg", GvhfhgfhgfhgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
