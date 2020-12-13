from django.db.models import fields
from rest_framework import serializers
from rest_framework.fields import NOT_READ_ONLY_WRITE_ONLY
from rest_framework.utils import model_meta

from .models import Acc, Biodata
from rest_framework.authtoken.models import Token



# class LoginSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Acc
# 		fields = ['email', 'password']
# 		extra_kwargs = {
# 				'password': {'write_only': True},
# 		}
# 	def validate(self, data):
# 		password = data.get('password')
# 		email = data.get('email')

class LoginSerializer(serializers.Serializer):
	email = serializers.EmailField(required=True)
	password = serializers.CharField(required=True)

class RegistrationSerializer(serializers.ModelSerializer):

	repassword = serializers.CharField(style={'input_type': 'password'}, write_only=True)

	class Meta:
		model = Acc
		fields = ['email', 'username', 'password', 'repassword']
		extra_kwargs = {
				'password': {'write_only': True},
		}	


	def	save(self):
		account = Acc(
					email=self.validated_data['email'],
					username=self.validated_data['username']

				)
		password = self.validated_data['password']
		repassword = self.validated_data['repassword']
		if password != repassword:
			raise serializers.ValidationError({'password': 'Passwords must match.'})

		account.set_password(password)
		account.save()
		return account

class BiodataSerializer(serializers.ModelSerializer):
	email = serializers.SerializerMethodField('get_email')
	username = serializers.SerializerMethodField('get_username')
	class Meta:
		model = Biodata
		fields = ['fullname', 'email', 'username', 'interest']
	
	def get_email(request, Biodata_acc):
		email = Biodata_acc.acc.email
		return email

	def get_username(request, Biodata_acc):
		username = Biodata_acc.acc.username
		return username

class AdminSerializer(serializers.Serializer):
	email = serializers.EmailField(required=True)
	password = serializers.CharField(required=True)