# Django
from django.urls import path, include
# rest framework
from rest_framework.routers import DefaultRouter
#App
from .views import UserViewSet, GroupViewSet, PermissionViewSet

# Creamos el router local de la app
router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'groups', GroupViewSet)
router.register(r'permissions', PermissionViewSet)

urlpatterns = [
    # Incluimos las rutas del router bajo la raíz de este archivo
    path('', include(router.urls)), 
]

