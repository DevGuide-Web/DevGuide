# Generated by Django 3.1.4 on 2020-12-30 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Subject', '0004_auto_20201229_0802'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlebasedmodel',
            name='detail',
            field=models.TextField(verbose_name='Details'),
        ),
        migrations.AlterField(
            model_name='projectbasedmodel',
            name='detail',
            field=models.TextField(verbose_name='Details'),
        ),
        migrations.AlterField(
            model_name='videobasedmodel',
            name='detail',
            field=models.TextField(verbose_name='Details '),
        ),
    ]