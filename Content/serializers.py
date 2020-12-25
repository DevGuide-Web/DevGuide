from django.db.models import fields
from rest_framework import serializers
from .models import LearningPath, SubTitle1, SubTitle2, SubTitle3, SubTitle4



class LearningPathSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningPath
        fields = ['Title', 'details', 'slug']



class SubTitle1Serializer(serializers.ModelSerializer):
    learning_path_slug = serializers.SerializerMethodField('get_learning_path_slug')

    class Meta:
        model = SubTitle1
        fields = ['Title', 'details', 'slug', 'learning_path_slug']
    
    def get_learning_path_slug(self, sub_title1):
        LearningPathSlug = sub_title1.learning_path.slug
        return LearningPathSlug

class SubTitle2Serializer(serializers.ModelSerializer):
    learning_path_slug = serializers.SerializerMethodField('get_learning_path_slug')
    sub_title1_slug = serializers.SerializerMethodField('get_sub_title1_slug')

    class Meta:
        model = SubTitle2
        fields = ['Title', 'details', 'slug', 'learning_path_slug','sub_title1_slug']
    
    def get_learning_path_slug(self, sub_title2):
        LearningPathSlug = sub_title2.SubTitle1.learning_path.slug
        return LearningPathSlug

    def get_sub_title1_slug(self, sub_title2):
        SubTitle1Slug = sub_title2.SubTitle1.slug
        return SubTitle1Slug
    
class SubTitle3Serializer(serializers.ModelSerializer):
    learning_path_slug = serializers.SerializerMethodField('get_learning_path_slug')
    sub_title1_slug = serializers.SerializerMethodField('get_sub_title1_slug')
    sub_title2_slug = serializers.SerializerMethodField('get_sub_title2_slug')

    class Meta:
        model = SubTitle3
        fields = ['Title', 'details', 'slug', 'learning_path_slug','sub_title1_slug', 'sub_title2_slug']
    
    def get_learning_path_slug(self, sub_title3):
        LearningPathSlug = sub_title3.SubTitle2.SubTitle1.learning_path.slug
        return LearningPathSlug

    def get_sub_title1_slug(self, sub_title3):
        SubTitle1Slug = sub_title3.SubTitle2.SubTitle1.slug
        return SubTitle1Slug
    
    def get_sub_title2_slug(self, sub_title3):
        SubTitle2Slug = sub_title3.SubTitle2.slug
        return SubTitle2Slug

class SubTitle4Serializer(serializers.ModelSerializer):
    learning_path_slug = serializers.SerializerMethodField('get_learning_path_slug')
    sub_title1_slug = serializers.SerializerMethodField('get_sub_title1_slug')
    sub_title2_slug = serializers.SerializerMethodField('get_sub_title2_slug')
    sub_title3_slug = serializers.SerializerMethodField('get_sub_title3_slug')


    class Meta:
        model = SubTitle4
        fields = ['Title', 'details', 'slug', 'learning_path_slug','sub_title1_slug', 'sub_title2_slug', 'sub_title3_slug']
    
    def get_learning_path_slug(self, sub_title4):
        LearningPathSlug = sub_title4.SubTitle3.SubTitle2.SubTitle1.learning_path.slug
        return LearningPathSlug

    def get_sub_title1_slug(self, sub_title4):
        SubTitle1Slug = sub_title4.SubTitle3.SubTitle2.SubTitle1.slug
        return SubTitle1Slug
    
    def get_sub_title2_slug(self, sub_title4):
        SubTitle2Slug = sub_title4.SubTitle3.SubTitle2.slug
        return SubTitle2Slug
    
    def get_sub_title3_slug(self, sub_title4):
        SubTitle3Slug = sub_title4.SubTitle3.slug
        return SubTitle3Slug


class HomeSerializer(serializers.ModelSerializer):
    learning_path_slug = serializers.SerializerMethodField('get_learning_path_slug')
    sub_title1_slug = serializers.SerializerMethodField('get_sub_title1_slug')
    sub_title2_slug = serializers.SerializerMethodField('get_sub_title2_slug')
    sub_title3_slug = serializers.SerializerMethodField('get_sub_title3_slug')
    learning_path = serializers.SerializerMethodField('get_learning_path')

    class Meta:
        model = SubTitle4
        fields = ['Title', 'learning_path', 'slug', 'learning_path_slug','sub_title1_slug', 'sub_title2_slug', 'sub_title3_slug']
    
    def get_learning_path_slug(self, sub_title4):
        LearningPathSlug = sub_title4.SubTitle3.SubTitle2.SubTitle1.learning_path.slug
        return LearningPathSlug

    def get_sub_title1_slug(self, sub_title4):
        SubTitle1Slug = sub_title4.SubTitle3.SubTitle2.SubTitle1.slug
        return SubTitle1Slug
    
    def get_sub_title2_slug(self, sub_title4):
        SubTitle2Slug = sub_title4.SubTitle3.SubTitle2.slug
        return SubTitle2Slug
    
    def get_sub_title3_slug(self, sub_title4):
        SubTitle3Slug = sub_title4.SubTitle3.slug
        return SubTitle3Slug
    
    def get_learning_path(self, sub_title4):
        LearningPath = sub_title4.SubTitle3.SubTitle2.SubTitle1.learning_path.Title
        return LearningPath

