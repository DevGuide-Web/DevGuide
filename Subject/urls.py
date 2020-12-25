from django.urls import path
from .views import SubjectView


urlpatterns = [
    path('<SubjectSlug>/', SubjectView),


]