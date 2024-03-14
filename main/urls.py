from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('menu/', views.menu, name='menu'),
    path('events/', views.events, name='events'),
    path('membership/', views.membership, name='membership'),
]
