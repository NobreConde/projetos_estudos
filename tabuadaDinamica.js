//EsTe programa consite em o usuário inserir um valor, cujo será multiplicado até o número 10
function tabelaDeMultiplicacao(valor) {
	 let c = 0;
	 console.log("A tabuada do " + valor) //Ele i´r ainformar a qual número a tabuada se refere
	 while(c <= 10){  //Irá executar a tabuada até o número 10
		let numero = valor * c; //Efetua a conta de multiplicação entre o valor informado e o contador
		console.log(valor + " X " + c + " = " + numero) //Monta a frase que irá retornar ao usuário
		c++; //Acresce ao contador mais 1
	 }
}

tabelaDeMultiplicacao(7)//Neste caso ele irá retornar a tabuada do 7, conforme abaixo

// A tabuada do 7
// 7 X 0 = 0  
// 7 X 1 = 7  
// 7 X 2 = 14 
// 7 X 3 = 21 
// 7 X 4 = 28 
// 7 X 5 = 35 
// 7 X 6 = 42 
// 7 X 7 = 49 
// 7 X 8 = 56 
// 7 X 9 = 63 
// 7 X 10 = 70

//O programa foi feito utilizando a matéria aprendida while, que consiste na execução de um código enquanto a condição é correspondida