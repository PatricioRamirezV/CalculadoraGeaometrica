function calcular(figura){
    var area = 0;
    var perimetro = 0;
    var radio = document.calculadora.radio.value;
    var largo = document.calculadora.largo.value;
    var ancho = document.calculadora.ancho.value;
    var base = document.calculadora.base.value;
    var altura = document.calculadora.altura.value;
    var lado1 = document.calculadora.lado1.value;
    var lado2 = document.calculadora.lado2.value;
    var lado3 = document.calculadora.lado3.value;

    if(radio!='' || ancho!='' && largo!='' || base!='' && altura!=''|| lado1!='' && lado2!='' && lado3!=''){

        switch (figura){
            case 'circulo':
                area = 'A: ' + radio*radio*3.1416
                perimetro = ' - P: ' + 2*radio*3.1416
            break;
            case 'cuadrilatero':
                area = 'A: ' + largo*ancho
                perimetro = ' - P: ' + (2*largo+2*ancho)
            break;
            case 'areaTriangulo':
                area = (base*altura)/2
            break;
             case 'perTriangulo':
                perimetro = (-lado1-lado2-lado3)*-1
            break;
            default:
                area=0;
                perimetro=0;

        }
        document.calculadora.resultado.value = area + perimetro
    
   }
   else{
    document.calculadora.resultado.value = 'Debe completar los campos';
    } 
}
function clean() {

    document.calculadora.resultado.value='';
    document.calculadora.radio.value='';
    document.calculadora.largo.value='';
    document.calculadora.ancho.value='';
    document.calculadora.base.value='';
    document.calculadora.altura.value='';
    document.calculadora.lado1.value='';
    document.calculadora.lado2.value='';
    document.calculadora.lado3.value='';
        
    return ;
    
    
}