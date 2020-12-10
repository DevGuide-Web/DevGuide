from django.db import models

# Create your models here.

class LearningPath(models.Model):
    Title = models.CharField(max_length=100, verbose_name="Learning Path")
    slug = models.SlugField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Title

class SubTitle1(models.Model):
    learning_path = models.ForeignKey(LearningPath, on_delete=models.CASCADE)
    Title = models.CharField(max_length=100, verbose_name="Sub Title 1")
    slug = models.SlugField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Title

class SubTitle2(models.Model):
    SubTitle1 = models.ForeignKey(SubTitle1, on_delete=models.CASCADE)
    Title = models.CharField(max_length=100, verbose_name="Sub Title 2")
    slug = models.SlugField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Title

class SubTitle3(models.Model):
    SubTitle2 = models.ForeignKey(SubTitle2, on_delete=models.CASCADE)
    Title = models.CharField(max_length=100, verbose_name="Sub Title 3")
    slug = models.SlugField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Title

class SubTitle4(models.Model):
    SubTitle3 = models.ForeignKey(SubTitle3, on_delete=models.CASCADE)
    Title = models.CharField(max_length=100, verbose_name="Sub Title 4")
    details = models.TextField()
    slug = models.SlugField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")

    def __str__(self):
        return self.Title

    def get_title(self):
        return self.Title
