from rest_framework import serializers
from rest_framework import response
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework.serializers import Serializer, raise_errors_on_nested_writes
from rest_framework.views import APIView
from .models import Acc, Biodata

from .serializers import BiodataSerializer, RegistrationSerializer, LoginSerializer, changePasswordSerializer, AdminSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny


@api_view(['POST', ])
@permission_classes((AllowAny,))
def registration_view(request):
	if request.method == 'POST':
		serializer = RegistrationSerializer(data=request.data)
		data = {}
		if serializer.is_valid():
			account = serializer.save()
			data['response'] = 'successfully registered new user.'
			data['pk'] = account.pk
			# Token.objects.create(user=account)
			token = Token.objects.get(user=account).key
			data['token'] = token
			data['email'] = account.email
			data['username'] = account.username

			#make Biodata
			bio = Biodata.objects.create(acc = account)
			bio.save()
		else:
			data = serializer.errors
		return Response(data)

@api_view(['POST', ])
@permission_classes((AllowAny,))
def login_view(request):
	if request.method == 'POST':
		data = {}
		serializer = LoginSerializer(data=request.data)
		if serializer.is_valid():
			email = serializer.data['email']
			password = serializer.data['password']
			account = authenticate(email=email, password=password)
			if account:
				data['response'] = 'Successfully authenticated.'
				data['pk'] = account.pk
				data['email'] = email.lower()
				data['token'] = Token.objects.get(user=account).key
			else:
				data['response'] = 'Error'
				data['error_message'] = 'Invalid credentials'
			return Response(data)
		else:
			return Response(serializer.errors)


@api_view(['GET'])
def Biodata_view(request):
	if request.method == "GET":
		token = request.META.get('HTTP_AUTHORIZATION')
		token = token[6:]
		Account = Token.objects.get(key=token)
		authen = Biodata.objects.get(acc__email=Account.user)
		serializer = BiodataSerializer(authen)
		print(serializer.data)
		return Response(serializer.data)


@api_view(['POST', ])
@permission_classes((AllowAny,))
def admin_view(request):
	if request.method == 'POST':
		data = {}
		serializer = AdminSerializer(data=request.data)
		if serializer.is_valid():
			email = serializer.data['email']
			password = serializer.data['password']
			account = authenticate(email=email, password=password)
			if not account or not account.is_admin:
				data['error_message'] = 'You are not an admin'
				return Response(data)
			if account:
				data['response'] = 'Successfully authenticated.'
				data['pk'] = account.pk
				data['email'] = email.lower()
				data['token'] = Token.objects.get(user=account).key
				return Response(data)
			else:
				data['response'] = 'Error'
				data['error_message'] = 'Invalid credentials'
			return Response(data)
		else:
			return Response(serializer.errors)

@api_view(['POST', ])
def changePassword(request):
	if request.method == "POST":
		data = {}
		token = request.META.get('HTTP_AUTHORIZATION')
		token = token[6:]
		Account = Token.objects.get(key=token)
		user = Acc.objects.get(username=Account.user)
		serializer = changePasswordSerializer(data=request.data)
		if serializer.is_valid():
			password = serializer.data["password"]
			repassword = serializer.data["repassword"]
			if password != repassword:
				data["Error Messages"] = "Password not Match"
				# return Response(serializers.ValidationError({"Error Messages": "Password not Match"}))
				return Response(data)
			if user.check_password(serializer.data["old_password"]):
				user.set_password(serializer.data["password"])
				user.save()
				data["status"] = "Password changed succesfully"
				return Response(data)
		else:
			return Response(serializer.errors)
