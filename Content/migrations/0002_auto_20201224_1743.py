# Generated by Django 3.1.4 on 2020-12-24 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Content', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='learningpath',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='subtitle1',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='subtitle2',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='subtitle3',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='subtitle4',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
    ]
