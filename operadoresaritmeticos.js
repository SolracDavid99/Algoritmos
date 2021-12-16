
function calcular(valor1,valor2){

    prov1=valor1;
    prov2=valor2;

    suma= valor1 + valor2;
    resta= valor1 - valor2;
    division= valor1/valor2;
    multiplicacion= valor1 * valor2;
    resto= valor1 % valor2 ;
    cuadrado= resto * resto;

    valor1++;
    valor2++;
    prov1--;
    prov2--;

    console.log("La suma fue " + suma);
    console.log("La resta fue " + resta);
    console.log("La division fue " + division);
    console.log("La multiplicacion fue " + multiplicacion);
    console.log("El resto fue " + resto);
    console.log("El cuadrado del resto fue " + cuadrado);
    console.log("El aumento del valor 1 fue " + valor1);
    console.log("El aumento del valor 2 fue " + valor2);
    console.log("El decremento del valor 1 fue " + prov1);
    console.log("El decremento del valor 2 fue " + prov2);

}
