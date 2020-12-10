from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import (SubjectModel, 
                    ProjectBasedModel, 
                    VideoBasedModel, 
                    ArticleBasedModel)


class SubjectSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField('get_title')
    article_url = serializers.SerializerMethodField('get_article_url')
    video_url = serializers.SerializerMethodField('get_video_url')
    project_url = serializers.SerializerMethodField('get_project_url')

    class Meta:
        model = SubjectModel
        fields = ['title', 'detail', 'article_url', 'video_url', 'project_url']
    
    def get_title(self, Subject_Model):
        title = Subject_Model.Sub_title4.Title
        return title
    
    def get_article_url(self, Subject_Model):
        data = {}
        query = ArticleBasedModel.objects.filter(Subject__Sub_title4__Title=Subject_Model.Sub_title4.Title)
        for x in range(len(query)):
            data[x+1] = query[x].get_link()
        return data
    
    def get_video_url(self, Subject_Model):
        data = {}
        query = VideoBasedModel.objects.filter(Subject__Sub_title4__Title=Subject_Model.Sub_title4.Title)
        for x in range(len(query)):
            data[x+1] = query[x].get_link()
        return data
    
    def get_project_url(self, Subject_Model):
        data = {}
        query = ProjectBasedModel.objects.filter(Subject__Sub_title4__Title=Subject_Model.Sub_title4.Title)
        for x in range(len(query)):
            data[x+1] = query[x].get_link()
        return data
    
    
