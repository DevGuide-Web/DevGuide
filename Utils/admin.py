from django.contrib import admin
from .models import kuesionerModel, appLog
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Register your models here.
class KuesionerAdmin(UserAdmin):
    list_display = ('username', 'pertanyaan_1', 'pertanyaan_2', 'pertanyaan_3','pertanyaan_4', 'pertanyaan_5', )
    search_fields = ('username', )

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ()
    
class AppLogAdmin(UserAdmin):
    list_display = ('username', 'activity', 'access_time', )
    search_fields = ('username', )

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ()

admin.site.register(kuesionerModel, KuesionerAdmin )
admin.site.register(appLog, AppLogAdmin )

