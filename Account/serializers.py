from rest_framework import serializers

from .models import Acc


# class LoginSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Account
# 		fields = ['email', 'password',]

# 		extra_kwargs = {'password': {'write_only': True}}

# 	def validate(self, data):
# 		password = data.get('password')
# 		email = data.get('email')


class RegistrationSerializer(serializers.ModelSerializer):

	

	class Meta:
		model = Acc
		fields = ['email', 'password']
		extra_kwargs = {
				'password': {'write_only': True},
		}	


	def	save(self):

		account = Acc(
					email=self.validated_data['email'],
				)
		password = self.validated_data['password']
		 
		account.set_password(password)
		account.save()
		return account