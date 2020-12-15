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


@api_view(['GET', 'POST' ])
def AddComment(request, Subject):
    if request.method == 'GET':
        subject = SubjectModel.objects.get(Sub_title4__slug=Subject)
        comment = commentTitle.objects.filter(subject=subject)
        serializer = commentTitleSerializerGet(comment, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = commentTitleSerializerPost(data=request.data)
        if serializer.is_valid():
            data = {}
            token = request.META.get('HTTP_AUTHORIZATION')
            token = token[6:]
            Account = Token.objects.get(key=token)
            Account = Acc.objects.get(username=Account.user)
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
    if request.method == 'GET':
        comment = commentTitle.objects.get(id=commentID)
        SubComment = commentSubTitle.objects.filter(comment=comment)
        serializer = subCommentTitleSerializerGet(SubComment, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = subCommentTitleSerializerPost(data=request.data)
        if serializer.is_valid():
            data = {}
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
    
