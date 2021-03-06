# Generated by Django 3.0.6 on 2020-05-28 21:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0003_delete_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=50)),
                ('role', models.CharField(max_length=25)),
                ('company', models.CharField(max_length=25)),
                ('target', models.CharField(max_length=15)),
                ('sector', models.CharField(max_length=25)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=25)),
                ('country', models.CharField(max_length=25)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='person', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
