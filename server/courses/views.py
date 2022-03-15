import json
from unicodedata import name
from urllib import response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers
from courses.models import Course, Lesson, Column

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from accounts.api.form import AccountUpdateForm

from accounts.models import Account
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_courses(request):
    is_payed = request.user.is_payed
    data = {
        "payed": is_payed
    }
    if is_payed:
        courses = Course.objects.filter()[:1].get()
        column = Column.objects.filter(course=courses)
        lessonr = []
        test = {}
        for col in column:
            less = {}
            lessons = Lesson.objects.filter(column=col)
            lesson = list(lessons.values())
            less["col"] = col.column_name
            less["lesson"] = lesson
            lessonr.append(less)
        test["course"] = lessonr
        courses = {
            "name": courses.name,
            "description": courses.description,
            "requirements": courses.requirements,
            "author": courses.author.name,
            "author_title": courses.author.title,
            "author_quote": courses.author.quote,
            "lessons": lessonr,
            "payed": is_payed
        }
        data = {
            'courses': courses
            # "lesson": test
        }

    return Response(data)


def get_course_prev(request):
    courses = Course.objects.filter()[:1].get()
    courses = {
        "name": courses.name,
        "author": courses.author.name,
        "image": courses.cover.url,
    }
    data = {
        'courses': courses
        # "lesson": test
    }
    return False


