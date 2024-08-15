from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/about.html')

def menu(request):
    return render(request, 'main/menu.html')

def events(request):
    return render(request, 'main/events.html')

def membership(request):
    return render(request, 'main/membership.html')
