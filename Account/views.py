from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework.serializers import raise_errors_on_nested_writes
from rest_framework.views import APIView

from .serializers import RegistrationSerializer, LoginSerializer
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
		else:
			data = serializer.errors
		return Response(data)

@api_view(['POST', ])
@permission_classes((AllowAny,))
def login_view(request):
	if request.method == 'POST':
		data = {}
		email = request.POST.get('username')
		password = request.POST.get('password')
		if not email or not password:
			data['response'] = 'Error'
			if not email:
				data['username'] = 'please fill the required field'
			if not password:
				data['password'] = 'please fill the required field'
			return Response(data)
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

# class LoginView(APIView):
# 	permission_classes = [AllowAny]
	
# 	def post(self, request):
# 		serializer = LoginSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
