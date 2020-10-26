const meuAniversario = new Date('1996-07-12');
console.log(meuAniversario.getFullYear())

//getDay
const data = new Date();
console.log(data.getDay())//retorna o numero referente ao dia da semana, que se inicia no domingo 0

//getMonth
console.log(data.getMonth())//retorna o numero referente ao mes do ano, que se inicia em janeiro 0

//getDate
console.log(data.getDate())//retorna o dia exato, sem diferença do calendario normal

//getFullYear
console.log(data.getFullYear())//retorna o ano exato, sem diferença do calendario normal

//exercicio
const data1 = new Date();
data1.setFullYear(1996);
data1.setMonth(06);
data1.setDate(12);

console.log(data1)