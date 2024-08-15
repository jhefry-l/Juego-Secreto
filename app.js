// 'return;' se usa para retpornar la funcion a alguna cosa o para cerrar la funcion
//NO ES NECESARIO usarla siempre  
let numeroSecreto=0;
let intentos = 0;
let listaDENumerosSorteados=[];
let numeroMaximo = 10;

function AsignarTextoElemento(elemento, texto){
    let elemetoHTML= document.querySelector(elemento);
    elemetoHTML.innerHTML=texto;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    
    if (numeroDeUsuario === numeroSecreto){
        //Usaremos operadores ternarios con esta comilla `` porque se usa como if en texto 
        AsignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{ 
        // el usuario no acerto 
        if(numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','El numero secreto es menor');
        }else{
            AsignarTextoElemento('p','El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista 
    console.log(NumeroGenerado);
    console.log(listaDENumerosSorteados)
    // si ya sorteamos todos los numeros podemos
    if (listaDENumerosSorteados.length == numeroMaximo){
    AsignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else{
        //si el numero asiganado esta incluido en la lista
        if(listaDENumerosSorteados.includes(NumeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDENumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado; 
        }
    }   
}
function CondicionesIniciales () {
    AsignarTextoElemento('h1','juego del numero secreto!');
    AsignarTextoElemento('p',`Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();  
    intentos= 1;
}

function reiniciarJuego() {
    //lipiar la caja, inidicar mensaje de intervalos de numeros, generar el numero aleatorio,deshabilitar el boton de nuev juego, inicializar el numero de intentos
    limpiarCaja();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}



CondicionesIniciales();