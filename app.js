let parrafo1 = document.querySelector('p1');
parrafo1.innerHTML = 'Recuerde que los numeros no se repite';


let numeroSecreto = 0;
console.log(`EL numero secreto es: ${numeroSecreto}`);
console.log(`EL tipo de dato de numero secreto es: ${typeof(numeroSecreto)}`);
let numeroMaximo = 10;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let eleemntoHTML = document.querySelector(elemento);
    eleemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`EL numero de intentos son: ${intentos}`);
    console.log(`EL numero de usuario es: ${numeroDeUsuario}`);
    console.log(`EL tipo de dato de numero de usuario es: ${typeof(numeroDeUsuario)}`);
    console.log(`La comparación: ${numeroDeUsuario} == ${numeroSecreto}`)
;
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')  
        }
        intentos++;
        limpiarCaja();
    }
    return
} 

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(`lista de Array: ${numeroGenerado}`);
    console.log(`lista de Array: ${listaNumerosSorteados}`);
    // si ya se sortearon todos los nums
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los nums posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
//limpiar juego, indicar mnsj de intervalo (inicio), generar num aleatorio, reinicio deshabilitado, reiniciar intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();


