from rest_framework import serializers
from rest_framework import response
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework import status


from .serializers import SubjectSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from .models import SubjectModel
from Content.models import LearningPath, SubTitle1, SubTitle2, SubTitle3, SubTitle4
from Utils.models import appLog
from Account.models import Acc


@api_view(['GET', ])
def SubjectView(request, LearningPathSlug, SubTitle1Slug, SubTitle2Slug, SubTitle3Slug, SubjectSlug):
    try:
        sub_title1 = SubTitle1.objects.filter(learning_path__slug = LearningPathSlug)
        sub_title2 = SubTitle2.objects.filter(SubTitle1__slug = SubTitle1Slug)
        sub_title3 = SubTitle3.objects.filter(SubTitle2__slug = SubTitle2Slug)
        sub_title4 = SubTitle4.objects.filter(SubTitle3__slug = SubTitle3Slug)
        subject_title = SubjectModel.objects.get(Sub_title4__slug = SubjectSlug)
        if not subject_title or not sub_title1 or not sub_title2 or not sub_title3 or not sub_title4:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except:
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == "GET":
        Title = SubTitle4.objects.get(slug=SubjectSlug).Title  
        log = appLog.objects.create(user_id=Account, activity=f"Access Subject {Title}")
        log.save()
        print(Title)
        serializer = SubjectSerializer(subject_title)
        return Response(serializer.data)




