from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.forms import ValidationError

import hashlib


def get_profile(self, filename):
    return f'media/image/profile/{self.pk}/{"profile_image.png"}'


def get_default_profile():
    return "media/image/profile/default-profile-pic.jpg"


class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError("User must have a username")
        if not username:
            raise ValueError("User must have a username")
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=False)
    first_name = models.CharField(max_length=200, unique=False)
    last_name = models.CharField(max_length=200, unique=False)
    date_joined = models.DateTimeField(
        verbose_name='date joined', auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_payed = models.BooleanField(default=False)
    profile_pic = models.ImageField(
        max_length=255, upload_to=get_profile, null=True, blank=True, default=get_default_profile)

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def get_profile_image_filename(self):
        return str(self.profile_image)[str(self.profile_image).index(f'media/image/profile/{self.pk}/'):]

    def has_module_perms(self, app_label):
        return True


class Hashed_code(models.Model):
    id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=225, unique=True)
    user_email = models.EmailField(max_length=225)

    # hash code on save
    # def save(self, *args, **kwargs):
    #     self.code = Hashed_code.encrypt_password(self.code)
    #     super(Hashed_code, self).save(*args, **kwargs)

    @staticmethod
    def encrypt_password(password):

        return hashlib.sha256(password.encode()).hexdigest()

    # compare the hashed code
    def check_code(user_email, code):
        hashed_code = Hashed_code.objects.get(user_email=user_email)
        e_code = hashed_code.code

        return code == e_code

    def __str__(self):
        return self.code

    class Meta:
        verbose_name = "Hashed Code"
        verbose_name_plural = "Hashed Codes"
