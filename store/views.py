from django.shortcuts import render
from django.http import HttpResponse

def Index(request):
    return render(request, "store/index.html", {})

def Register(request):
    return render(request, "store/register.html", {})

def Login(request):
    return render(request, "store/login.html", {})

def Profile(request):
    return render(request, "store/profile.html", {})