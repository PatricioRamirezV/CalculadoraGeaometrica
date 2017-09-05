function calcular(figura){
    var result;
    var radio = document.calculadora.radio.value;
    var largo = document.calculadora.largo.value;
    var ancho = document.calculadora.ancho.value;
    var base = document.calculadora.base.value;
    var altura = document.calculadora.altura.value;
    if(radio!='' || ancho!='' && largo!='' || base!='' && altura!=''){

        switch (figura){
            case 'circulo':
                result = radio*radio*3.1416
            break;
            case 'cuadrilatero':
                result = largo*ancho
            break;
            case 'triangulo':
                result = (base*altura)/2
            break;
            default:
                result=0;

        }
        document.calculadora.resultado.value = result
    
   }
   else{
    document.calculadora.resultado.value = 'Debe completar los campos';
    } 
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
        default:
            document.calculadora.resultado.value='';

    }
    return ;
    
    
}