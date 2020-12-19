from django.contrib import admin
from django.urls import path
from .views import changePassword, registration_view, login_view, Biodata_view, admin_view
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('register/', registration_view),
    path('login/', login_view),
    path('biodata/', Biodata_view),
    path('admin/', admin_view),
    path('changepassword/', changePassword)
]
