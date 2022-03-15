from tokenize import group
from turtle import title
from django.db import models

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    requirements = models.TextField(blank=True)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    cover = models.ImageField(upload_to='course/covers/', blank=True)
    price = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Author(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    quote = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Column(models.Model):
    column_name = models.CharField(max_length=255)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)


class Lesson(models.Model):
    id = models.AutoField(primary_key=True)
    group = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    column = models.ForeignKey('Column', on_delete=models.CASCADE)
    video = models.FileField(
        upload_to='course/lesson/video/', blank=False)
    duration = models.CharField(max_length=255)
    is_complete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
