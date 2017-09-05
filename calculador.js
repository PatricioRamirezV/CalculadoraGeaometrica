function calcular(figura){
    switch (figura){
        case 'circulo':
            var radio = document.calculadora.radio.value
            var result = radio*radio*3.1416
            document.calculadora.resultado.value = result
        break;
        case 'cuadrilatero':
            var largo = document.calculadora.largo.value
            var ancho = document.calculadora.ancho.value
            result = largo*ancho
            document.calculadora.resultado.value = result
        break;
        case 'triangulo':
            var base = document.calculadora.base.value
            var altura = document.calculadora.altura.value
            result = (base*altura)/2
            document.calculadora.resultado.value = result
        break;

    }
    return;
   

}
function clean(value) {

    document.calculadora.resultado.value='';
    switch (value){
        case'radio':
            document.calculadora.largo.value='';
            document.calculadora.ancho.value='';
            document.calculadora.base.value='';
            document.calculadora.altura.value='';
        break;
        case'largo':
            document.calculadora.radio.value='';
            document.calculadora.base.value='';
            document.calculadora.altura.value='';
        break;
        case'ancho':
            document.calculadora.radio.value='';
            document.calculadora.base.value='';
            document.calculadora.altura.value='';
        break;
        case'altura':
            document.calculadora.radio.value='';
            document.calculadora.largo.value='';
            document.calculadora.ancho.value='';
        break;
        case'base':
            document.calculadora.radio.value='';
            document.calculadora.largo.value='';
            document.calculadora.ancho.value='';
        break;

    }
    return ;
    
    
}