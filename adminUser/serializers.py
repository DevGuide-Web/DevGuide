
from Content.models import *
from Subject.models import *
from rest_framework import serializers

class adminLearningPathSerializer(serializers.ModelSerializer):

    class Meta:
        model = LearningPath
        fields = ['id', 'Title', 'slug',]

class adminSubTitle1SerializerGet(serializers.ModelSerializer):
    learning_path = serializers.SerializerMethodField('get_learning_path')
    class Meta:
        model = SubTitle1
        fields = ['id', 'Title', 'slug', 'learning_path']
    
    def get_learning_path(self, sub_title1):
        learningPath = sub_title1.learning_path.Title
        return learningPath

class adminSubTitle1SerializerPost(serializers.Serializer):
    Title = serializers.CharField(required=True)
    slug = serializers.SlugField(required=True)
    learning_path = serializers.CharField(required=True)

class adminSubTitle2SerializerGet(serializers.ModelSerializer):
    sub_title1 = serializers.SerializerMethodField('get_sub_title1')
    class Meta:
        model = SubTitle2
        fields = ['id', 'Title', 'slug', 'sub_title1']
    
    def get_sub_title1(self, sub_title2):
        subTitle1 = sub_title2.SubTitle1.Title
        return subTitle1

class adminSubTitle2SerializerPost(serializers.Serializer):
    Title = serializers.CharField(required=True)
    slug = serializers.SlugField(required=True)
    sub_title1 = serializers.CharField(required=True)

class adminSubTitle3SerializerGet(serializers.ModelSerializer):
    sub_title2 = serializers.SerializerMethodField('get_sub_title2')
    class Meta:
        model = SubTitle3
        fields = ['id', 'Title', 'slug', 'sub_title2']
    
    def get_sub_title2(self, sub_title3):
        subTitle2 = sub_title3.SubTitle2.Title
        return subTitle2

class adminSubTitle3SerializerPost(serializers.Serializer):
    Title = serializers.CharField(required=True)
    slug = serializers.SlugField(required=True)
    sub_title2 = serializers.CharField(required=True)

class adminSubTitle4SerializerGet(serializers.ModelSerializer):
    sub_title3 = serializers.SerializerMethodField('get_sub_title3')
    class Meta:
        model = SubTitle4
        fields = ['id', 'Title', 'slug', 'sub_title3']
    
    def get_sub_title3(self, sub_title4):
        subTitle3 = sub_title4.SubTitle3.Title
        return subTitle3

class adminSubTitle4SerializerPost(serializers.Serializer):
    Title = serializers.CharField(required=True)
    slug = serializers.SlugField(required=True)
    sub_title3 = serializers.CharField(required=True)

class adminSubjectSerializerGet(serializers.ModelSerializer):
    sub_title4 = serializers.SerializerMethodField('get_sub_title4')
    article_url = serializers.SerializerMethodField('get_article_url')
    video_url = serializers.SerializerMethodField('get_video_url')
    project_url = serializers.SerializerMethodField('get_project_url')

    class Meta:
        model = SubjectModel
        fields = ['id', 'sub_title4', 'detail', 'article_url', 'video_url', 'project_url']
    
    def get_sub_title4(self, SubjectModel):
        subTitle4 = SubjectModel.Sub_title4.Title
        return subTitle4
    
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

class adminSubjectSerializerPost(serializers.Serializer):
    detail = serializers.CharField(required=True)
    sub_title4 = serializers.CharField(required=True)


class adminArticleSerializerGet(serializers.ModelSerializer):
    subject = serializers.SerializerMethodField('get_subject')

    class Meta:
        model = ArticleBasedModel
        fields = ['id', 'title', 'detail', 'article_url', 'subject']

    def get_subject(self, Article_model):
        subject = Article_model.Subject.Sub_title4.Title
        return subject

class adminArticleSerializerPost(serializers.Serializer):
    subject = serializers.CharField(required=True)
    title = serializers.CharField(required=True)
    detail = serializers.CharField(required=True)
    article_url = serializers.SlugField(required=True)

class adminVideoSerializerGet(serializers.ModelSerializer):
    subject = serializers.SerializerMethodField('get_subject')

    class Meta:
        model = VideoBasedModel
        fields = ['id', 'title', 'detail', 'video_url', 'subject']

    def get_subject(self, Video_model):
        subject = Video_model.Subject.Sub_title4.Title
        return subject

class adminVideoSerializerPost(serializers.Serializer):
    subject = serializers.CharField(required=True)
    title = serializers.CharField(required=True)
    detail = serializers.CharField(required=True)
    video_url = serializers.SlugField(required=True)

class adminProjectSerializerGet(serializers.ModelSerializer):
    subject = serializers.SerializerMethodField('get_subject')

    class Meta:
        model = ProjectBasedModel
        fields = ['id', 'title', 'detail', 'project_url', 'subject']

    def get_subject(self, Project_model):
        subject = Project_model.Subject.Sub_title4.Title
        return subject

class adminProjectSerializerPost(serializers.Serializer):
    subject = serializers.CharField(required=True)
    title = serializers.CharField(required=True)
    detail = serializers.CharField(required=True)
    project_url = serializers.SlugField(required=True)