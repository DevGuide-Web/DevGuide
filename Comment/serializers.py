from django.db.models.fields import DateTimeField
from rest_framework import serializers
from .models import commentTitle, commentSubTitle

class commentTitleSerializerGet(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username') 
    class Meta:
        model = commentTitle
        fields = ['id', 'subject', 'username', 'Title', 'detail', 'DateTime']
    
    def get_username(self, comment_title):
        username = comment_title.user_id.username
        return username

class commentTitleSerializerPost(serializers.Serializer):
    Title = serializers.CharField()
    detail = serializers.CharField()

class subCommentTitleSerializerGet(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')
    comment_title = serializers.SerializerMethodField('get_comment_title')

    class Meta:
        model = commentSubTitle
        fields = [ 'comment_title', 'username', 'detail', 'DateTime']
    
    def get_username(self, comment_title):
        username = comment_title.user_id.username
        return username
    
    def get_comment_title(self, comment_title):
        comment_title = comment_title.comment.Title
        return comment_title

class subCommentTitleSerializerPost(serializers.Serializer):
    detail = serializers.CharField()
