from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import Acc, Biodata

# Register your models here.

class AccountAdmin(UserAdmin):
    list_display = ('pk', 'email', 'last_login', 'date_joined', 'is_admin','is_staff')
    search_fields = ('pk', 'email',)

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ('email',)


admin.site.register(Acc, AccountAdmin)

admin.site.register(Biodata)