# Rest Framework
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# App
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated] 
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('id')
    

