// var five = 49; five é a moeda de 5 centavos
// var ten = 28; ten é a moeda de 10 centavos
// var twenty_five = 2; twenty_five é a moeda de 25 centavos
// var fifty = 0; fifty é a moeda de 50 centavos
// var one = 0; one é a moeda de 1 real

function contarMoedas(five,ten,twenty_five,fifty,one){ //Indicando cada variavel para a conta
    let resultado = (five*0.05)+(ten*0.10)+(twenty_five*0.25)+(fifty*50)+(one*1) //Contas efetuadas com cada variavel
    console.log("Você tem um total de R$" + resultado) //Impressão do resultado mais frase
}

contarMoedas(49,28,2,0,0) //Simulação e resultado logo abaixo

// Você tem um total de R$5.75
