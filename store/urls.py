from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.Index, name="index"),
    re_path(r'register/$', views.Register, name="register"),
    re_path(r'login/$', views.Login, name="login"),
    re_path(r'profile/$', views.Profile, name="profile"),
    re_path(r'collection/(?P<collection_name>\w+)/', views.Collection, name="collection"),
    re_path(r'collection/(?P<collection_name>\w+)/(?P<product_name>\w+)/', views.Collection, name="product"),
]

"""
urlpatterns = [
    path('articles/2003/', views.special_case_2003),
    re_path(r'^articles/(?P<year>[0-9]{4})/$', views.year_archive),
    re_path(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', views.month_archive),
    re_path(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<slug>[\w-]+)/$', views.article_detail),
]
"""