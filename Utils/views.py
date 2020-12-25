from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import kuesionerModel
from Account.models import Acc
from .serializers import kuesionerSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

@api_view(['POST', ])
def kuesioner_view(request):
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token[6:]
    Account = Token.objects.get(key=token)
    UserAcc = Acc.objects.get(username=Account.user)
    kuesioner = kuesionerModel.objects.get(user_id=UserAcc)
    if request.method == "POST":
        serializer = kuesionerSerializer(data=request.data)
        if serializer.is_valid():
            kuesioner.pertanyaan_1 = serializer.data["pertanyaan_1"]
            kuesioner.pertanyaan_2 = serializer.data["pertanyaan_2"]
            kuesioner.pertanyaan_3 = serializer.data["pertanyaan_3"]
            kuesioner.pertanyaan_4 = serializer.data["pertanyaan_4"]
            kuesioner.pertanyaan_5 = serializer.data["pertanyaan_5"]
            kuesioner.save()
            return Response({
                "status" : "Kuesioner update success"
            })
        return Response(serializer.errors)