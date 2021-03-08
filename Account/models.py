from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class AccManager(BaseUserManager):
	def create_user(self, email, username, password=None):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have an username')


		user = self.model(
			email=self.normalize_email(email),
			username=username
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
		user.save(using=self._db)
		return user


class Acc(AbstractBaseUser):
	email = models.EmailField(verbose_name="email", max_length=60, unique=True)
	username = models.CharField(verbose_name="Username", max_length=60, unique=True)
	date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
	is_admin = models.BooleanField(default=False)
	last_login = models.DateTimeField(verbose_name="last login", auto_now=True)
	is_staff = models.BooleanField(default=False)


	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']

	objects = AccManager()

	def __str__(self):
		return self.username

	# For checking permissions. to keep it simple all admin have ALL permissons
	def has_perm(self, perm, obj=None):
		return self.is_admin

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
	def has_module_perms(self, app_label):
		return True


class Biodata(models.Model):
    acc = models.OneToOneField(Acc, verbose_name='Account', on_delete=models.CASCADE)
    fullname = models.CharField(max_length=100,verbose_name='Full Name', blank=True, null=True)
    interest = models.TextField(verbose_name='User Interest', blank=True, null=True)

    def __str__(self):
        return self.acc.username
		
    def username(self):
        return self.acc.username
    username.short_description = 'username'
    
    def email(self):
        return self.acc.email
    email.short_description = 'email'

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
