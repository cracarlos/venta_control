from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Sales, Sale_products
from .serializers import SalesSerializer, SaleProductsSerializer

class SalesManagerApiVIew(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        sales = Sales.objects.all()
        serializer = SalesSerializer(sales, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SalesSerializer(data=request.data)
        if serializer.is_valid():
            resp =serializer.save()
            print(request.data["products"])
            for product in request.data["products"]:
                sale_products_data = {
                    "sale": resp.id,
                    "product": product["product_id"],
                    "quantity": product["quantity"],
                    "price": product["price"]
                }
                product_serializer = SaleProductsSerializer(data=sale_products_data)
                if product_serializer.is_valid():
                    product_serializer.save()
                else:
                    return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
