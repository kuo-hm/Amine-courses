from django.contrib import admin

from courses.models import Author, Course, Lesson, Column


# Register your models here.

admin.site.register(Author)
admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(Column)
