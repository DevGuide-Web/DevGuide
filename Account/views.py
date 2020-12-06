from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from .serializers import RegistrationSerializer
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
			data['email'] = account.email
		else:
			data = serializer.errors
		return Response(data)