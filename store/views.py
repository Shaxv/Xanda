from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models import Q
from django.views.generic.list import ListView

from .forms import LoginForm, RegisterForm

def Index(request):
    return render(request, "store/index.html", {})

#
# Account
#

def Register(request):
    context = {
        "title": "Register",
        "form": RegisterForm,
    }
    return render(request, "store/register.html", context)

def Login(request):
    context = {
        "title": "Login",
        "form": LoginForm,
    }
    return render(request, "store/login.html", context)

def Profile(request):
    context = {
        "title": "Profile",
    }
    return render(request, "store/profile.html", context)


#
# Catalog
#

def Collection(request, collection_name):
    context = {
        "title": collection_name,
        "collection_name": collection_name,
    }
    return render(request, "store/collection.html", context)

#
# Search
#

def Search(ListView):
    return "asd"