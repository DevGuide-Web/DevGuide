from .models import kuesionerModel
from rest_framework import serializers

class kuesionerSerializer(serializers.Serializer):
    pertanyaan_1 = serializers.CharField(required = True)
    pertanyaan_2 = serializers.CharField(required = True)
    pertanyaan_3 = serializers.CharField(required = True)
    pertanyaan_4 = serializers.CharField(required = True)
    pertanyaan_5 = serializers.CharField(required = True)