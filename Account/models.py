from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, User
from annoying.fields import AutoOneToOneField

class AccManager(BaseUserManager):
	def create_user(self, email, password=None):
		if not email:
			raise ValueError('Users must have an email address')

		user = self.model(
			email=self.normalize_email(email),
		)

		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, password):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
		)
		user.is_admin = True
		user.save(using=self._db)
		return user


class Acc(AbstractBaseUser):
	email = models.EmailField(verbose_name="email", max_length=60, unique=True)
	date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
	is_admin = models.BooleanField(default=False)
	last_login = models.DateTimeField(verbose_name="last login", auto_now=True)

	USERNAME_FIELD = 'email'

	objects = AccManager()

	def __str__(self):
		return self.email

	# For checking permissions. to keep it simple all admin have ALL permissons
	def has_perm(self, perm, obj=None):
		return self.is_admin

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
	def has_module_perms(self, app_label):
		return True


class Biodata(models.Model):
	acc = models.OneToOneField(Acc, verbose_name='Account', on_delete=models.CASCADE)
	fullname = models.CharField(max_length=100,verbose_name='Full Name', blank=True, null=True)
	username = models.CharField(max_length=50,verbose_name='Username', blank=True, null=True, unique=True)
	interest = models.TextField(verbose_name='User Interest', blank=True, null=True)

	def __str__(self):
		return self.username