from Content.models import *
from Subject.models import *
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework import status

from .serializers import *


@api_view(['POST', 'GET' ])
def adminLearningPath(request):
    if request.method == 'GET':
        serializer = adminLearningPathSerializer(LearningPath.objects.all(), many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = adminLearningPathSerializer(data=request.data)
        if serializer.is_valid():
            valid_data = LearningPath.objects.create(Title=serializer.data['Title'], slug=serializer.data['slug'])
            valid_data.save()
            return Response({'status' : 'Data saved'})
        else :
            return Response(serializer.errors)


@api_view(['POST', 'GET' ])
def adminSubTitle1(request):
    if request.method == 'GET':
        serializer = adminSubTitle1SerializerGet(SubTitle1.objects.all(), many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = adminSubTitle1SerializerPost(data=request.data)
        if serializer.is_valid():
            learning_path = LearningPath.objects.get(Title = serializer.data['learning_path'])
            if not learning_path:
                return Response({'status': 'learning path not found'})
            valid_data = SubTitle1.objects.create(Title=serializer.data['Title'], slug=serializer.data['slug'], learning_path=learning_path)
            valid_data.save()
            return Response({'status' : 'Data saved'})
        else :
            return Response(serializer.errors)

@api_view(['POST', 'GET' ])
def adminSubTitle2(request):
    if request.method == 'GET':
        serializer = adminSubTitle2SerializerGet(SubTitle2.objects.all(), many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = adminSubTitle2SerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                sub_title1 = SubTitle1.objects.get(Title = serializer.data['sub_title1'])
                valid_data = SubTitle2.objects.create(Title=serializer.data['Title'], slug=serializer.data['slug'], SubTitle1=sub_title1)
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        
        except SubTitle1.DoesNotExist:
            return Response({'status': 'Sub Title 1 not found'})



@api_view(['POST', 'GET' ])
def adminSubTitle3(request):
    if request.method == 'GET':
        serializer = adminSubTitle3SerializerGet(SubTitle3.objects.all(), many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = adminSubTitle3SerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                sub_title2 = SubTitle2.objects.get(Title = serializer.data['sub_title2'])
                valid_data = SubTitle3.objects.create(Title=serializer.data['Title'], slug=serializer.data['slug'], SubTitle2=sub_title2)
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle2.DoesNotExist:
            return Response({'status': 'Sub Title 2 not found'})

@api_view(['POST', 'GET' ])
def adminSubTitle4(request):
    if request.method == 'GET':
        serializer = adminSubTitle4SerializerGet(SubTitle4.objects.all(), many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = adminSubTitle4SerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                sub_title3 = SubTitle3.objects.get(Title = serializer.data['sub_title3'])
                valid_data = SubTitle4.objects.create(Title=serializer.data['Title'], slug=serializer.data['slug'], SubTitle3=sub_title3)
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle3.DoesNotExist:
            return Response({'status': 'Sub Title 3 not found'})

@api_view(['POST', 'GET' ])
def adminSubject(request):
    if request.method == 'GET':
        serializer = adminSubjectSerializerGet(SubjectModel.objects.all(), many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = adminSubjectSerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                sub_title4 = SubTitle4.objects.get(Title = serializer.data['sub_title4'])
                valid_data = SubjectModel.objects.create(detail=serializer.data['detail'], Sub_title4=sub_title4)
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle4.DoesNotExist:
            return Response({'status': 'Sub Title 4 not found'})

@api_view(['POST', 'GET' ])
def adminArticle(request):
    if request.method == 'GET':
        serializer = adminArticleSerializerGet(ArticleBasedModel.objects.all(), many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = adminArticleSerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                subject = SubjectModel.objects.get(Sub_title4__Title = serializer.data['subject'])
                valid_data = ArticleBasedModel.objects.create(detail=serializer.data['detail'], Subject=subject, title = serializer.data['title'], article_url = serializer.data['article_url'])
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle4.DoesNotExist:
            return Response({'status': 'Title not found'})

@api_view(['POST', 'GET' ])
def adminVideo(request):
    if request.method == 'GET':
        serializer = adminVideoSerializerGet(VideoBasedModel.objects.all(), many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = adminVideoSerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                subject = SubjectModel.objects.get(Sub_title4__Title = serializer.data['subject'])
                valid_data = VideoBasedModel.objects.create(detail=serializer.data['detail'], Subject=subject, title = serializer.data['title'], video_url = serializer.data['video_url'])
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle4.DoesNotExist:
            return Response({'status': 'Title not found'})

@api_view(['POST', 'GET' ])
def adminProject(request):
    if request.method == 'GET':
        serializer = adminProjectSerializerGet(ProjectBasedModel.objects.all(), many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = adminProjectSerializerPost(data=request.data)
        try : 
            if serializer.is_valid():
                subject = SubjectModel.objects.get(Sub_title4__Title = serializer.data['subject'])
                valid_data = ProjectBasedModel.objects.create(detail=serializer.data['detail'], Subject=subject, title = serializer.data['title'], project_url = serializer.data['project_url'])
                valid_data.save()
                return Response({'status' : 'Data saved'})
            else :
                return Response(serializer.errors)
        except SubTitle4.DoesNotExist:
            return Response({'status': 'Title not found'})