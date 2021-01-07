from Utils.models import kuesionerModel
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from .models import Acc, Biodata

from .serializers import BiodataSerializer, RegistrationSerializer, LoginSerializer, biodataUpdateSerializer, changePasswordSerializer, AdminSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from Utils.models import appLog


@api_view(['POST', ])
@permission_classes((AllowAny,))
def registration_view(request):
	if request.method == 'POST':
		serializer = RegistrationSerializer(data=request.data)
		if serializer.is_valid():
			account = serializer.save()
			log = appLog.objects.create(user_id=account, activity=f"Account with username {account.username} has been created")
			log.save()
			#make Biodata
			bio = Biodata.objects.create(acc = account)
			bio.save()

			#make Kuesioner
			kuesioner = kuesionerModel.objects.create(user_id=account)
			kuesioner.save()

			return Response({"status": "Succesfully register new account"})
		else:
			
			return Response(serializer.errors)

@api_view(['POST', ])
@permission_classes((AllowAny,))
def login_view(request):
	if request.method == 'POST':
		data = {}
		serializer = LoginSerializer(data=request.data)
		if serializer.is_valid():
			email = serializer.data['email'].lower()
			password = serializer.data['password']
			account = authenticate(email=email, password=password)
			if account:
				data['response'] = 'Successfully authenticated.'
				data['pk'] = account.pk
				data['username'] = account.username
				data['token'] = Token.objects.get(user=account).key
				Account = Acc.objects.get(username=account)
				log = appLog.objects.create(user_id=Account, activity=f"{account} logged in")
				log.save()
			else:
				data['response'] = 'Invalid credentials'
				data['error_message'] = 'Invalid credentials'
			return Response(data)
		else:
			return Response(serializer.errors)


@api_view(['GET', 'POST'])
def Biodata_view(request):
	token = request.META.get('HTTP_AUTHORIZATION')
	token = token[6:]
	Account = Token.objects.get(key=token)
	UserAcc = Acc.objects.get(username=Account.user)
	bio = Biodata.objects.get(acc__username=Account.user)

	if request.method == "GET":
		log = appLog.objects.create(user_id=UserAcc, activity=f"{UserAcc} access biodata")
		log.save()
		serializer = BiodataSerializer(bio)
		return Response(serializer.data)

	if request.method == "POST" :
		serializer = biodataUpdateSerializer(data=request.data)
		if serializer.is_valid():
			validate_email = Acc.objects.filter(email=serializer.data["email"])
			validate_username = Acc.objects.filter(username=serializer.data["username"])

			if UserAcc.email != serializer.data["email"] and len(validate_email) > 0:
				return Response({"Error" : "Email already exist"})

			if UserAcc.username != serializer.data["username"] and len(validate_username) > 0:
				return Response({"Error" : "username already exist"})

			UserAcc.username = serializer.data["username"]
			UserAcc.email = serializer.data["email"]
			UserAcc.save()
			bio.fullname = serializer.data["fullname"]
			bio.interest = serializer.data["interest"]
			bio.save()
			log = appLog.objects.create(user_id=UserAcc, activity=f"{UserAcc} updated biodata")
			log.save()
			return Response({"status_biodata" : "Biodata update success"})
		return Response(serializer.errors)

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
				data["Error"] = "Password not Match"
				# return Response(serializers.ValidationError({"Error Messages": "Password not Match"}))
				return Response(data)
			if user.check_password(serializer.data["old_password"]):
				user.set_password(serializer.data["password"])
				user.save()
				data["status_password"] = "Password changed succesfully"
				log = appLog.objects.create(user_id=user, activity=f"{user} change password")
				log.save()
				return Response(data)
			else :
				return Response({"Error": "Wrong Password"})
		else:
			return Response(serializer.errors)



