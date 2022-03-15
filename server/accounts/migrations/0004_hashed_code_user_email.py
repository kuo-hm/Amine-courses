# Generated by Django 4.0.3 on 2022-03-15 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_hashed_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='hashed_code',
            name='user_email',
            field=models.EmailField(default=1, max_length=225),
            preserve_default=False,
        ),
    ]