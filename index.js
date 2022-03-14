var Mousetrap = require('mousetrap');

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonDivision = document.getElementById('botonDivision')
var botonMultiplicacion = document.getElementById('botonMultiplicacion')
var botonAtras = document.getElementById('botonAtras')
var botonBorrar = document.getElementById('botonBorrar')

var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click', clickUno)
Mousetrap.bind('1', clickUno)
botonDos.addEventListener('click', clickDos)
Mousetrap.bind('2', clickDos)
botonTres.addEventListener('click', clickTres)
Mousetrap.bind('3', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
Mousetrap.bind('4', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
Mousetrap.bind('5', clickCinco)
botonSeis.addEventListener('click', clickSeis)
Mousetrap.bind('6', clickSeis)
botonSiete.addEventListener('click', clickSiete)
Mousetrap.bind('7', clickSiete)
botonOcho.addEventListener('click', clickOcho)
Mousetrap.bind('8', clickOcho)
botonNueve.addEventListener('click', clickNueve)
Mousetrap.bind('9', clickNueve)
botonCero.addEventListener('click', clickCero)
Mousetrap.bind('0', clickCero)

botonSuma.addEventListener('click', clickSuma)
Mousetrap.bind('+', clickSuma)
botonResta.addEventListener('click', clickResta)
Mousetrap.bind('-', clickResta)
botonDivision.addEventListener('click', clickDivision)
Mousetrap.bind('/', clickDivision)
botonMultiplicacion.addEventListener('click', clickMultiplicacion)
Mousetrap.bind('*', clickMultiplicacion)
Mousetrap.bind('x', clickMultiplicacion)
botonAtras.addEventListener('click', clickAtras)
Mousetrap.bind('backspace', clickAtras)
botonBorrar.addEventListener('click', clickBorrar)
Mousetrap.bind('escape', clickBorrar)


function clickUno(){
    actual.innerHTML+='1'
}

function clickDos(){
    actual.innerHTML+='2'
}

function clickTres(){
    actual.innerHTML+='3'
}

function clickCuatro(){
    actual.innerHTML+='4'
}

function clickCinco(){
    actual.innerHTML+='5'
}

function clickSeis(){
    actual.innerHTML+='6'
}

function clickSiete(){
    actual.innerHTML+='7'
}

function clickOcho(){
    actual.innerHTML+='8'
}

function clickNueve(){
    actual.innerHTML+='9'
}

function clickCero(){
    actual.innerHTML+='0'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML ='0'
}

function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorResultado - valorActual
    actual.innerHTML = '0'
}

function clickDivision(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorResultado / valorActual
    actual.innerHTML = '0'
}

function clickMultiplicacion(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorResultado * valorActual 
    actual.innerHTML = '0'
}

function clickAtras(){
    let str = actual.innerHTML
    str = str.slice(0,-1)
    console.log(str)
    actual.innerHTML = str
}

function clickBorrar(){
    actual.innerHTML = 0; 
    resultado.innerHTML = 0; 
}
