# Generated by Django 5.0.8 on 2024-08-20 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('favorite_app', '0006_liked'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favorite',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='liked',
            name='genre',
        ),
    ]
