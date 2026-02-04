# Django
from django.urls import path, include
# rest framework
from rest_framework.routers import DefaultRouter
#App
from .views import SalesManagerApiVIew

# Creamos el router local de la app
# router = DefaultRouter()
# router.register(r'sales', SalesManagerApiVIew, basename='sales')
urlpatterns = [
    path('', SalesManagerApiVIew.as_view(), name='sales-manager'), 
]