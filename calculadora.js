const somar = (numero1,numero2) => numero1 + numero2;
const subtrair = (numero1,numero2) => numero1 - numero2;
const multiplicar = (numero1,numero2) => numero1 * numero2;
const dividir = (numero1,numero2) => numero1 / numero2;
//da linha 1 a linha 4 são definidas as operações matemáticas que serão utilizadas, por meio de arrows functions
const calculadora = (numero1, numero2, operacao) => operacao(numero1,numero2);
//na linha 6 é feita a função que irá chamar a operação, por meio de um callback
console.log(calculadora(10,20,multiplicar))
//o resultado final, mostrado no console.log, é 300, visto que a operação é 20 vezes 10
