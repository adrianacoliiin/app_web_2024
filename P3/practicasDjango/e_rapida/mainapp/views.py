from django.shortcuts import render

# Create your views here.
def index(requests):
    return render(requests, 'mainapp/index.html', {
        'title':'Inicio | Página principal',
        'content':'..::Bienvenido a mi página principal!::..'
    })

def about(requests):
    return render(requests, 'mainapp/about.html', {
        'title':'Acerca de',
        'content':'..:: P R U E B A ::..'
    })

def mision(requests):
    return render(requests, 'mainapp/mision.html', {
        'title':'Misión',
        'content':'..:: P R U E B A ::..'
    })

def vision(requests):
    return render(requests, 'mainapp/vision.html', {
        'title':'Visión',
        'content':'..:: P R U E B A ::..'
    })