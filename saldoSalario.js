var salário = 2500;
var gastos = 1000;

function saldoFinal(){
    let resultado = salário - gastos;
    if(resultado == 0){
        console.log("Seu saldo final desse mês foi de R$0")
    }else if(resultado < 0){
        console.log("Seu saldo esse mês ficou negativo, no valor de R$" + resultado)
    }else{
        console.log("Seu saldo esse mês ficou positivo, no valor de R$" + resultado)
    }

}

saldoFinal()