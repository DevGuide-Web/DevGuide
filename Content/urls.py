from django.urls import path, include
from .views import LearningPathList, SubTitle1List, SubTitle2List, SubTitle3List, SubTitle4List


urlpatterns = [
    path('', LearningPathList),
    path('<LearningPathSlug>/', SubTitle1List ),
    path('<LearningPathSlug>/<SubTitle1Slug>/', SubTitle2List ),
    path('<LearningPathSlug>/<SubTitle1Slug>/<SubTitle2Slug>/', SubTitle3List),
    path('<LearningPathSlug>/<SubTitle1Slug>/<SubTitle2Slug>/<SubTitle3Slug>/', SubTitle4List),
    path('<LearningPathSlug>/<SubTitle1Slug>/<SubTitle2Slug>/<SubTitle3Slug>/', include('Subject.urls')),


]
