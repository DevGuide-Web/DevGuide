# Generated by Django 3.1.4 on 2020-12-06 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='acc',
            name='last_login',
            field=models.DateTimeField(auto_now=True, verbose_name='last login'),
        ),
    ]