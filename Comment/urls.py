from django.urls import path, include
from .views import *


urlpatterns = [
    path('<Subject>/', AddComment),
    path('subcomment/<commentID>/', AddSubComment),
]
