
from django.contrib import admin
from django.urls import path, include
from Content.views import HomePage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('Account.urls')),
    path('courses/', include('Content.urls')),
    path('admin/', include('adminUser.urls')),
    path('comment/', include('Comment.urls')),
    path('home/', HomePage),
    path('utils/', include('Utils.urls'))
]
