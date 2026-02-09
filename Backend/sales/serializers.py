from rest_framework import serializers
from .models import Sales, Sale_products
from products.serializers import ProductSaleDetailSerializer, ProductSerializer

def validate_payment_or_price(value):
    if value <= 0:
        raise serializers.ValidationError("payment no puede ser negativo ni igual a cero.")
    return value

class SaleProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale_products
        fields = [
            'id',
            'sale',
            'product',
            'quantity',
            'price'
        ]
        extra_kwargs = {
            'quantity': {'validators': [validate_payment_or_price] },
            'price': {'validators': [validate_payment_or_price] }
        }

class SaleProductsGetSerializer(serializers.ModelSerializer):
    product = ProductSaleDetailSerializer(read_only=True)
    class Meta:
        model = Sale_products
        fields = [
            'id',
            'sale',
            'product',
            'quantity',
            'price'
        ]
        extra_kwargs = {
            'quantity': {'validators': [validate_payment_or_price] },
            'price': {'validators': [validate_payment_or_price] }
        }

class SalesSerializer(serializers.ModelSerializer):
    sale_products = SaleProductsGetSerializer(many=True, read_only=True)
    class Meta:
        model = Sales
        fields = [
            'id',
            'payment',
            'sale_products',
            'created_at',
            'updated_at'
        ]
        extra_kwargs = {
            'payment': {'validators': [validate_payment_or_price] }
        }
