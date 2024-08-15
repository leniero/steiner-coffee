from django.contrib import admin
from django.urls import path, include  # Include is necessary to include urls from other apps

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin site
    path('', include('main.urls')),  # Include the URLs from the 'main' app
]