from django.core.exceptions import ObjectDoesNotExist
from Account.models import Acc
from Subject.models import SubjectModel
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework import status


from .serializers import *
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import commentTitle, commentSubTitle
from Utils.models import appLog


@api_view(['GET', 'POST' ])
def AddComment(request, Subject):

    try: 
        subject = SubjectModel.objects.get(Sub_title4__slug=Subject)    
    except ObjectDoesNotExist:
        return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except :
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)

    if request.method == 'GET':
        log = appLog.objects.create(user_id=Account, activity=f"Access comment for subject {Subject}")
        log.save()
        comment = commentTitle.objects.filter(subject=subject).order_by('-DateTime')
        serializer = commentTitleSerializerGet(comment, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = commentTitleSerializerPost(data=request.data)
        if serializer.is_valid():
            data = {}
            log = appLog.objects.create(user_id=Account, activity=f"Post a comment at subject {Subject}")
            log.save()
            subject = SubjectModel.objects.get(Sub_title4__slug=Subject)
            valid_comment = commentTitle.objects.create(user_id=Account, subject=subject, Title=serializer.data['Title'], detail=serializer.data['detail'])
            valid_comment.save()
            data['user'] = Account.username
            data['status'] = "data saved"
            return Response(data)
        else :
            return Response(serializer.errors)

@api_view(['GET', 'POST' ])
def AddSubComment(request, commentID):

    try: 
        comment = commentTitle.objects.get(id=commentID)
    except ObjectDoesNotExist:
        return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
    except :
        return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    Account = Acc.objects.get(username=Account.user)
    if request.method == 'GET':
        log = appLog.objects.create(user_id=Account, activity=f"Access Sub comment with a comment ID {commentID}")
        log.save()
        comment = commentTitle.objects.get(id=commentID)
        SubComment = commentSubTitle.objects.filter(comment=comment).order_by('-DateTime')
        serializer = subCommentTitleSerializerGet(SubComment, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = subCommentTitleSerializerPost(data=request.data)
        if serializer.is_valid():
            data = {}
            log = appLog.objects.create(user_id=Account, activity=f"Posting Sub comment with a comment ID {commentID}")
            log.save()
            token = request.META.get('HTTP_AUTHORIZATION')
            token = token[6:]
            Account = Token.objects.get(key=token)
            Account = Acc.objects.get(username=Account.user)
            comment = commentTitle.objects.get(id=commentID)
            valid_subComment = commentSubTitle.objects.create(user_id=Account, comment=comment, detail=serializer.data['detail'])
            valid_subComment.save()
            data['user'] = Account.username
            data['status'] = "data saved"
            return Response(data)
        else :
            return Response(serializer.errors)

@api_view(["GET"])
def specificComment(request, commentID):
    if request.method == "GET":
        try:
            comment = commentTitle.objects.get(id=commentID)
            serializer = commentTitleSerializerGet(comment)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"Error": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
        except :
            return Response({"Error": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)
    
