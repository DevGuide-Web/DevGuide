# Generated by Django 3.1.4 on 2020-12-10 10:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Content', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubjectModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detail', models.TextField(verbose_name='Details')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('Sub_title4', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Content.subtitle4')),
            ],
        ),
        migrations.CreateModel(
            name='VideoBasedModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('detail', models.TextField(verbose_name='Details ')),
                ('video_url', models.CharField(max_length=200, verbose_name='Video URL')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('Subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Subject.subjectmodel')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectBasedModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('detail', models.TextField(verbose_name='Details')),
                ('project_url', models.CharField(max_length=200, verbose_name='Project URL')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('Subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Subject.subjectmodel')),
            ],
        ),
        migrations.CreateModel(
            name='ArticleBasedModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('detail', models.TextField(verbose_name='Details')),
                ('article_url', models.CharField(max_length=200, verbose_name='Article URL')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('Subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Subject.subjectmodel')),
            ],
            options={
                'unique_together': {('id', 'Subject')},
            },
        ),
    ]