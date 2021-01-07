from django.db import models
from Account.models import Acc

# Create your models here.

class kuesionerModel(models.Model):
    user_id = models.ForeignKey(Acc, on_delete=models.CASCADE, verbose_name="ID User")
    pertanyaan_1 = models.CharField(max_length=255, verbose_name="pertanyaan 1", blank=True, null=True)
    pertanyaan_2 = models.CharField(max_length=255, verbose_name="pertanyaan 2", blank=True, null=True)
    pertanyaan_3 = models.CharField(max_length=255, verbose_name="pertanyaan 3", blank=True, null=True)
    pertanyaan_4 = models.CharField(max_length=255, verbose_name="pertanyaan 4", blank=True, null=True)
    pertanyaan_5 = models.TextField(verbose_name="pertanyaan 5", blank=True, null=True)    

    def __str__(self):
        return self.user_id.username
    
    def username(self):
        return self.user_id.username
    username.short_description = 'username'

class appLog(models.Model):
    user_id = models.ForeignKey(Acc, on_delete=models.CASCADE, verbose_name="ID User")
    activity = models.CharField(max_length=255, verbose_name="Activity")
    access_time = models.DateTimeField(verbose_name='Access Time', auto_now_add=True)

    def __str__(self):
        return self.user_id.username
        
    def username(self):
        return self.user_id.username
    username.short_description = 'username'