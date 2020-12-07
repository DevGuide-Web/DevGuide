from django.contrib import admin
from django.urls import path
from .views import registration_view, login_view

urlpatterns = [
    path('register/', registration_view),
    path('login/', login_view),
]
