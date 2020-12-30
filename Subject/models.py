from enum import unique
from django.db import models
from Content.models import SubTitle4

# Create your models here.


class SubjectModel (models.Model):
    Sub_title4 = models.ForeignKey(SubTitle4, on_delete=models.CASCADE)
    detail = models.TextField(verbose_name='Details')
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Sub_title4.Title

class ArticleBasedModel(models.Model):
    Subject = models.ForeignKey(SubjectModel, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Title')
    detail = models.TextField(verbose_name='Details')
    article_url = models.CharField(max_length=200, verbose_name='Article URL', )
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.title
    
    def get_data(self):
        data=[]
        data.append(self.title)
        data.append(self.detail)
        data.append(self.article_url)
        return data

class VideoBasedModel(models.Model):
    Subject = models.ForeignKey(SubjectModel, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Title')
    detail = models.TextField(verbose_name='Details ')
    video_url = models.CharField(max_length=200, verbose_name='Video URL', )
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.title
    
    def get_data(self):
        data=[]
        data.append(self.title)
        data.append(self.detail)
        data.append(self.video_url)
        return data

class ProjectBasedModel(models.Model):
    Subject = models.ForeignKey(SubjectModel, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Title')
    detail = models.TextField(verbose_name='Details')
    project_url = models.CharField(max_length=200, verbose_name='Project URL', )
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.title

    def get_data(self):
        data=[]
        data.append(self.title)
        data.append(self.detail)
        data.append(self.project_url)
        return data
