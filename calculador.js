function calcular(figura){
    if (figura=='circulo'){
        var radio = document.calculadora.radio.value
        var result = eval(radio*radio*3.1416)
        document.calculadora.resultado.value = result
    }
    if (figura=='cuadrilatero'){
        var largo = document.calculadora.largo.value
        var ancho = document.calculadora.ancho.value
        var result = eval(largo*ancho)
        document.calculadora.resultado.value = result
    }
     if (figura=='triangulo'){
         var base = document.calculadora.base.value
    var altura = document.calculadora.altura.value
    var result = eval((base*altura)/2)
    document.calculadora.resultado.value = result
    }

}
function clean(value) {
    if(value=='radio'){
        document.calculadora.resultado.value='';
        document.calculadora.largo.value='';
        document.calculadora.ancho.value='';
        document.calculadora.base.value='';
        document.calculadora.altura.value='';
    }
    if(value=='largo'){
        document.calculadora.resultado.value='';
        document.calculadora.radio.value='';
        document.calculadora.base.value='';
        document.calculadora.altura.value='';
    }
    if(value=='ancho'){
        document.calculadora.resultado.value='';
        document.calculadora.radio.value='';
        document.calculadora.base.value='';
        document.calculadora.altura.value='';
    }
    if(value=='altura'){
        document.calculadora.resultado.value='';
        document.calculadora.radio.value='';
        document.calculadora.largo.value='';
        document.calculadora.ancho.value='';
    }
    if(value=='base'){
        document.calculadora.resultado.value='';
        document.calculadora.radio.value='';
        document.calculadora.largo.value='';
        document.calculadora.ancho.value='';
    }
    
    
}