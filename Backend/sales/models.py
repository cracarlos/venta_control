from django.db import models
from crum import get_current_user
from core.models import BaseModel
from products.models import Product

class Sales( BaseModel ):
    payment = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        user = get_current_user()
        if user is not None:
            if not self.pk:
                self.user_creation = user
            else:
                self.user_update = user
        super(Sales, self).save()

class Sale_products( BaseModel ):
    sale = models.ForeignKey(Sales, on_delete=models.CASCADE, related_name='sale_products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        user = get_current_user()
        if user is not None:
            if not self.pk:
                self.user_creation = user
            else:
                self.user_update = user
        super(Sale_products, self).save()