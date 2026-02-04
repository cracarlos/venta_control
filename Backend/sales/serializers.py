from rest_framework import serializers
from .models import Sales, Sale_products
from products.serializers import ProductSaleDetailSerializer

class SaleProductsSerializer(serializers.ModelSerializer):
    product = ProductSaleDetailSerializer(read_only=True)
    class Meta:
        model = Sale_products
        fields = [
            'id',
            'product',
            'quantity',
            'price'
        ]

class SalesSerializer(serializers.ModelSerializer):
    sale_products = SaleProductsSerializer(many=True, read_only=True)
    class Meta:
        model = Sales
        fields = [
            'id',
            'payment',
            'sale_products',
            'created_at',
            'updated_at'
        ]
