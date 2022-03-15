from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import Account, Hashed_code
# Register your models here.


class AccountAdmin(UserAdmin):
    list_display = ('email', 'username', 'date_joined', 'last_login',
                    'is_admin', 'is_active', 'is_staff', 'is_payed')
    search_fields = ('email', 'username')
    readonly_fields = ('date_joined', 'last_login',
                       'id', 'is_superuser')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = (
    )


admin.site.register(Account, AccountAdmin)
admin.site.register(Hashed_code)
