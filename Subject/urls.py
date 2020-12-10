from django.urls import path
from .views import SubjectView, view123


urlpatterns = [
    path('<SubjectSlug>/', SubjectView),


]