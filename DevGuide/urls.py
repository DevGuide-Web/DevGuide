
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('Account.urls')),
    path('courses/', include('Content.urls')),
    path('admin/', include('adminUser.urls')),
    path('comment/', include('Comment.urls')),
]
