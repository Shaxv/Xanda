from django.shortcuts import render
from django.http import HttpResponse

from .forms import LoginForm, RegisterForm

def Index(request):
    return render(request, "store/index.html", {})

#
# Account
#

def Register(request):
    context = {
        "form": RegisterForm,
    }
    return render(request, "store/register.html", context)

def Login(request):
    return render(request, "store/login.html", {})

def Profile(request):
    return render(request, "store/profile.html", {})


#
# Catalog
#

def Collection(request, c_name):
    context = {
        "c_name": c_name,
    }
    return render(request, "store/collection.html", context)