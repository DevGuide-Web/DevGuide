from django.test import TestCase
from .models import SubjectModel, ArticleBasedModel, VideoBasedModel, ProjectBasedModel
# Create your tests here.


p = ArticleBasedModel.objects.filter(Subject__Sub_title4__Title="Introduction")

data={}

for x in range(len(p)):

    data[x+1]= p[x].get_link()

print(data)
