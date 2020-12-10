from django.contrib import admin
from .models import (SubjectModel, 
                    ArticleBasedModel, 
                    VideoBasedModel, 
                    ProjectBasedModel)

# Register your models here.


admin.site.register(SubjectModel)
admin.site.register(ArticleBasedModel)
admin.site.register(VideoBasedModel)
admin.site.register(ProjectBasedModel)
