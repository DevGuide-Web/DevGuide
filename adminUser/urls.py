from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('learningpath/', adminLearningPath),
    path('subtitle1/', adminSubTitle1),
    path('subtitle2/', adminSubTitle2),
    path('subtitle3/', adminSubTitle3),
    path('subtitle4/', adminSubTitle4),
    path('subject/', adminSubject),
    path('article_url/', adminArticle),
    path('video_url/', adminVideo),
    path('project_url/', adminProject),
]
