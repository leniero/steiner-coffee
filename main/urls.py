from django.urls import path
from . import views  # Import views from the same directory

urlpatterns = [
    path('', views.index, name='index'),  # Home page
    path('about/', views.about, name='about'),  # About page
    path('menu/', views.menu, name='menu'),  # Menu page
    path('events/', views.events, name='events'),  # Events page
    path('membership/', views.membership, name='membership'),  # Membership page
]