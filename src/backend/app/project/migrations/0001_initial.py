# Generated by Django 4.2.2 on 2023-06-24 09:14

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Project",
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
                ("name", models.CharField(max_length=255)),
                (
                    "project_image",
                    models.ImageField(blank=True, null=True, upload_to="projects/"),
                ),
                ("short_desc", models.CharField(blank=True, max_length=255, null=True)),
                ("bio", models.TextField(blank=True, null=True)),
                (
                    "github_link",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "website_link",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
