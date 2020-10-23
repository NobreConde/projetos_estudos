var a = 49; //a é a moeda de 5 centavos
var b = 28; //b é a moeda de 10 centavos
var c = 2; //c é a moeda de 25 centavos
var d = 0; //d é a moeda de 50 centavos
var e = 0; //e é a moeda de 1 real

function contarMoedas(){
    let resultado = (a*0.05)+(b*0.10)+(c*0.25)+(d*50)+(e*1)
    console.log("Você tem um total de R$" + resultado)
}

contarMoedas()