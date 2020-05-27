from django.urls import path
from Server_AI_Value.api.views import (

    singUp_view,
)

app_name = "userRegister"

urlpatterns =[
    path('register', singUp_view, name="register"),
]