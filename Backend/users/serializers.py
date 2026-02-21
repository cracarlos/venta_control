from rest_framework import serializers
from django.contrib.auth.models import Group, Permission
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def create(self, validated_data):
        # 1. Extraemos los campos Many-to-Many para que no estorben en la creación inicial
        groups = validated_data.pop('groups', None)
        permissions = validated_data.pop('user_permissions', None)
        
        # 2. Usamos create_user (Manejador oficial de Django)
        # Este método ya cifra la contraseña automáticamente y guarda el usuario
        user = User.objects.create_user(**validated_data)
        
        # 3. Ahora que el usuario existe, asignamos los grupos y permisos si vienen en los datos
        if groups:
            user.groups.set(groups)
        if permissions:
            user.user_permissions.set(permissions)

        return user

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ['id', 'name', 'codename', 'content_type']

class GroupSerializer(serializers.ModelSerializer):
    # Usamos PrimaryKeyRelatedField para poder enviar solo los IDs al crear/editar
    permissions = serializers.PrimaryKeyRelatedField(
        many=True, 
        queryset=Permission.objects.all(),
        required=False
    )

    class Meta:
        model = Group
        fields = ['id', 'name', 'permissions']