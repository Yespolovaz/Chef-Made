# Generated by Django 3.2 on 2023-04-25 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_userinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='imageUrl',
            field=models.CharField(default='', max_length=255),
        ),
    ]