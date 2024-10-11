//Este es un comentario de JavaScript de una línea

/* Este es un comentario de 
varias
lineas de código
*/

// V A R I A B L E S
//let se puede cambiar y var es como una constante
var nombre = "Adriana Colin";
var nombre2 = 'Miguel Suastes';
let nombre3 = "Rodolfo Flores";
let edad = 20;
let estatura = 1.80
let logico = true;

//Mostrar contenido de variables
console.log("Hola, soy la consola y tu nombre es: " + nombre)  //A traves de consola
document.write("Hola, soy la consola y tu nombre es: " + nombre)
document.write("<hr><h2> Hola, soy la consola y tu nombre es: " +nombre+"</h2></hr>")
alert("Soy una alerta" +nombre);


//Mostrar contenido getElementById
let datos = document.getElementById("informacion");
datos.innerHTML= "Hola soy in contenido de innerHTML <br>"
datos.innerHTML += "<hr><h2>Hola soy otro contenido de innerHTML</h2><hr>"
datos.innerHTML += "<hr><h2>Mi edad es: " +edad+ "</h2><hr>";
datos.innerHTML += `
            <hr>
            <h2>Mi edad es: ${edad}</h2>
            <h2>Mi nombre es: ${nombre}</h2>
            </hr>
`; 

//Condiciones
if (edad >= 18)
{
    datos.innerHTML += `<hr><h2>Soy mayor de edad</h2>`;
}
else
{
    datos.innerHTML += `<hr><h2>Soy menor de edad</h2>`;
}

//ciclos
for(let i=1;i>=5;i++){
    datos.innerHTML+= `<hr><h2>Soy el nuemero ${i}</h2>`;
}

let i=1
while(i<=5){
    datos.innerHTML+= `<hr><h2>Soy el nuemero ${i}</h2>`;
    i++;
}

i=1
do{
    datos.innerHTML += `<hr><h2>Soy el nuemero ${i}</h2>`;
    i++;
}while(i<=5);


//funciones

//1.- Funciones que no reciben parametros y no regresan valor
function suma1() 
{
    let n1 = 1 ;        
    let n2 = 2 ;        
    let suma = n1 + n2;
    datos.innerHTML+= `<hr><h2>La suma de los números es ${suma}</h2><hr>`
};
suma1();

//2.- Funciones que no reciben parametros y si regresan valor
function suma2() 
{
    let n1 = 1 ;        
    let n2 = 2 ;        
    let suma = n1 + n2;
    return suma;
}
let sum=suma2();
datos.innerHTML+= `<hr><h2>La suma de los números es ${suma2}</h2><hr>`


//3.- Funciones si reciben parametros y no regresan falor
function suma3(num1, num2) 
{
    let n1 = num1;        
    let n2 = num2 ;        
    let suma = n1 + n2;
    datos.innerHTML+= `<hr><h2>La suma de los números es ${suma}</h2><hr>`
}
suma3(3,1);

//4.- Funciones si reciben parametros y si regresan falor
function suma4(num1, num2) 
{
    let n1 = num1;        
    let n2 = num2 ;        
    let suma = n1 + n2;
    return suma;
}
datos.innerHTML= `<hr><h2>La suma de los números es ${suma4(1,3)}</h2><hr>`

//areglos

let animales = [];
animales[0] = "perro";
animales[1] = "gallina";
animales[2] = "perico";
animales[3] = "gato";

let animales2 = ["leon", "tigre","elefante"];

for (let i = 0; i < animales.length; i++)
{
    datos.innerHTML= `<hr><h2> el animal es ${animales[i]}</h2><hr>`
};

animales2.forEach(element => {
    datos.innerHTML += `<hr><h2> El animal es ${element}</h2><hr>`;
});