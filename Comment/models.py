from django.db import models
from Account.models import Acc
from Subject.models import SubjectModel

# Create your models here.

class commentTitle(models.Model):
    subject = models.ForeignKey(SubjectModel, on_delete=models.CASCADE, verbose_name="subject")
    user_id = models.ForeignKey(Acc, on_delete=models.CASCADE, verbose_name="user name")
    Title = models.CharField(max_length=255, verbose_name="Title")
    detail = models.TextField(verbose_name="Detail")
    DateTime = models.DateTimeField(auto_now_add=True, verbose_name="Date Time")

    def __str__(self):
        return self.Title

class commentSubTitle(models.Model):
    comment = models.ForeignKey(commentTitle, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Acc, on_delete=models.CASCADE, verbose_name="user name")
    detail = models.TextField(verbose_name="Detail")
    DateTime = models.DateTimeField(auto_now_add=True, verbose_name="Date Time")

    def __str__(self):
        return self.detail
