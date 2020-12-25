from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework import status


from .serializers import HomeSerializer, LearningPathSerializer,SubTitle1Serializer, SubTitle2Serializer, SubTitle3Serializer, SubTitle4Serializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import LearningPath, SubTitle1, SubTitle2, SubTitle3, SubTitle4
from Account.models import Acc
from Utils.models import appLog


@api_view(['GET' ])
def LearningPathList(request):
    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)
    if request.method == 'GET':
        log = appLog.objects.create(user_id=Account, activity="Access Learning Path")
        log.save()
        serializer = LearningPathSerializer(LearningPath.objects.all(), many=True)
        return Response(serializer.data)
    
@api_view(['GET', ])
def SubTitle1List(request, LearningPathSlug):

    try:
        sub_title1 = SubTitle1.objects.filter(learning_path__slug = LearningPathSlug)
        if not sub_title1:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except:
            return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)
    
    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == 'GET':
        Title = LearningPath.objects.get(slug=LearningPathSlug).Title
        log = appLog.objects.create(user_id=Account, activity=f"Access {Title}")
        log.save()
        serializer = SubTitle1Serializer(sub_title1, many=True)
        return Response(serializer.data)


@api_view(['GET', ])
def SubTitle2List(request, LearningPathSlug, SubTitle1Slug):

    try :
        sub_title1 = SubTitle1.objects.filter(learning_path__slug = LearningPathSlug)
        sub_title2 = SubTitle2.objects.filter(SubTitle1__slug = SubTitle1Slug)
        if not sub_title1 or not sub_title2:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except :
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == 'GET':
        Title = SubTitle1.objects.get(slug=SubTitle1Slug).Title
        log = appLog.objects.create(user_id=Account, activity=f"Access {Title}")
        log.save()
        serializer = SubTitle2Serializer(sub_title2, many=True)
        return Response(serializer.data)

@api_view(['GET', ])
def SubTitle3List(request, LearningPathSlug, SubTitle1Slug, SubTitle2Slug):

    try :
        sub_title1 = SubTitle1.objects.filter(learning_path__slug = LearningPathSlug)
        sub_title2 = SubTitle2.objects.filter(SubTitle1__slug = SubTitle1Slug)
        sub_title3 = SubTitle3.objects.filter(SubTitle2__slug = SubTitle2Slug)
        if not sub_title1 or not sub_title2 or not sub_title3:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except :
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)
    
    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == 'GET':
        Title = SubTitle2.objects.get(slug=SubTitle2Slug).Title  
        log = appLog.objects.create(user_id=Account, activity=f"Access {Title}")
        log.save()
        serializer = SubTitle3Serializer(sub_title3, many=True)
        return Response(serializer.data)

@api_view(['GET', ])
def SubTitle4List(request, LearningPathSlug, SubTitle1Slug, SubTitle2Slug, SubTitle3Slug):

    try :
        sub_title1 = SubTitle1.objects.filter(learning_path__slug = LearningPathSlug)
        sub_title2 = SubTitle2.objects.filter(SubTitle1__slug = SubTitle1Slug)
        sub_title3 = SubTitle3.objects.filter(SubTitle2__slug = SubTitle2Slug)
        sub_title4 = SubTitle4.objects.filter(SubTitle3__slug = SubTitle3Slug)
        if not sub_title1 or not sub_title2 or not sub_title3 or not sub_title4:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except :
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == 'GET':
        Title = SubTitle3.objects.get(slug=SubTitle3Slug).Title  
        log = appLog.objects.create(user_id=Account, activity=f"Access {Title}")
        log.save()
        serializer = SubTitle4Serializer(sub_title4, many=True)
        return Response(serializer.data)
    
@api_view(['GET', ])
def HomePage(request):

    #Taking Account from Token
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == "GET":
        log = appLog.objects.create(user_id=Account, activity="Access Home Page")
        log.save()
        sub_title4 = SubTitle4.objects.order_by('-date_created')
        serializer = HomeSerializer(sub_title4, many=True)
        return Response(serializer.data)

