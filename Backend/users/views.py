# Rest Framework
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# App
from .models import User
from .serializers import UserSerializer, GroupSerializer, PermissionSerializer
from django.contrib.auth.models import Group, Permission

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated] 
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('id')


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    # Es vital proteger esto, solo administradores deberían tocar permisos
    permission_classes = [IsAuthenticated]

class PermissionViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Normalmente los permisos no se "crean" vía API, sino que nacen con los modelos.
    Por eso usamos ReadOnlyModelViewSet para solo listarlos.
    """
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer
    permission_classes = [IsAuthenticated]

