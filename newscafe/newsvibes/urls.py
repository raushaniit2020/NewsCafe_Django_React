from django.urls import path
from .views import SignUpView
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('query/', views.search, name='query'),
    path("signup/", SignUpView.as_view(), name="signup"),
    path('search', views.search, name='search'),
    
    ]
    # path('category', views.category, name='category')