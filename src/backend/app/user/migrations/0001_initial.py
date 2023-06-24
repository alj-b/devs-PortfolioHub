# Generated by Django 4.2.2 on 2023-06-23 09:18

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "is_superuser",
                    models.BooleanField(
                        default=False,
                        help_text="Designates that this user has all permissions without explicitly assigning them.",
                        verbose_name="superuser status",
                    ),
                ),
                ("email", models.EmailField(max_length=255, unique=True)),
                ("name", models.CharField(max_length=255)),
                ("is_active", models.BooleanField(default=True)),
                ("is_staff", models.BooleanField(default=False)),
                ("short_desc", models.CharField(blank=True, max_length=200, null=True)),
                ("bio", models.TextField(blank=True, null=True)),
                ("profile_image", models.ImageField(upload_to="profiles/")),
                ("title", models.CharField(blank=True, max_length=50, null=True)),
                ("address", models.CharField(blank=True, max_length=255, null=True)),
                ("working_at", models.CharField(blank=True, max_length=255, null=True)),
                ("status_open_to_work", models.BooleanField(default=False)),
                (
                    "github_link",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "linkedin_link",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "website_link",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("xing_link", models.CharField(blank=True, max_length=255, null=True)),
                ("whatsapp", models.CharField(blank=True, max_length=255, null=True)),
                ("messenger", models.CharField(blank=True, max_length=255, null=True)),
                ("created", models.DateTimeField(auto_now_add=True)),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]