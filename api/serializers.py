from Content.models import SubTitle4
from rest_framework import serializers

class homeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTitle4
        fields = 