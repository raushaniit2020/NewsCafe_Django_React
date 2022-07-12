from turtle import title
from urllib import response
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
import requests
from django.shortcuts import HttpResponse 
from django.http import JsonResponse
import json

api_key='ad3d9f30d96d41abb8e2a7bd0e8658d8'

# Create your views here.

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


def home(request):
    category=request.GET.get('category')
    
    print("....hello...", category)
    
    if category:
        api_url = f'https://newsapi.org/v2/top-headlines?country=in&category={category}&apiKey={api_key}'
        country=request.GET.get('country')
        print("....hurrah....", country)
        if country:
            api_url = f'https://newsapi.org/v2/top-headlines?country={country}&category={category}&apiKey={api_key}'
        
    else:
        api_url = f'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey={api_key}'

    response=requests.get(api_url)
    data_as_json=response.json() 
    data_articles=data_as_json['articles']
    return JsonResponse({'data_articles':data_articles})
    
    
def search(request):
    searched_news=request.GET.get('q')
    api_url = f'https://newsapi.org/v2/everything?q={searched_news}&sortBy=publishedAt&apiKey={api_key}'
    print(api_url)
    response=requests.get(api_url)
    data_as_json=response.json()  
    data_articles=data_as_json['articles']
    return JsonResponse({'data_articles':data_articles})
    
