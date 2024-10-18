function operacion() {
    
    let n1, n2, tipoope, ope, resultado;

    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    tipoope = document.getElementById("tipo").value;

    if (isNumber(n1) && isNumber(n2)){
    
        switch (tipoope) {
            case"+": 
                ope = n1+n2;
                break; 
            case"-": 
                ope = n1-n2;
                break;
            case"*": 
                ope = n1*n2;
                break;
            case"/": 
                ope = n1/n2;
                break;
        }

    resultado = document.getElementById("resultado");
    resultado.innerText=n1 + tipoope + n2 + "=" + ope;
    } 
    
    else {
        alert("Ingrese solo números por favor...")
    }
}

function isNumber(n){
    return !isNaN(parseInt(n) && isFinite(n));
}

//<h2>${n1} ${tipoope} ${n2} = ${ope}</h2>
