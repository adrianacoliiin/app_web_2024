from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    return render(request, 'mainapp/index.html', {
        'title': 'Inicio',
        'content':'..::Bienvenido::..'
    })

def about(request):
    return render(request, 'mainapp/about.html', {
        'title': 'Acerca de',
        'content':'..:: Somos un equipo de desarrolladores de Django ::..'
    })

def mision(request):
    return render(request, 'mainapp/mision.html', {
        'title': 'Misión',
    })

def vision(request):
    return render(request, 'mainapp/vision.html', {
        'title': 'Visión',
    })


# FUNCIONES DE MANEJO DEL ERROR 404

# def error_404(requests, exception):
#     return redirect('inicio')
def error_404_2(request, exception):
    return render(request, 'mainapp/404.html', status=404)