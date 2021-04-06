from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name="index"),
    path('register/', views.Register, name="register"),
    path('login/', views.Login, name="login"),
    path('profile/', views.Profile, name="profile"),
]
