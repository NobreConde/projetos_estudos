let numerosPares = [2,4,6,8,10];

//map vai executar um callback feito em todos os arrays
let numerosParesDobro = numerosPares.map(function(valor){
    return valor * 2;
})
console.log(numerosParesDobro)

//filter vai executar o callback feito em todos oa arrays e retornar filtrado os valores de acordo com a função
let numerosFiltrados = numerosPares.filter(function(valor){
    return valor < 6;//se caso nao retorna nehum valor ele vai fazer um array vazio
})
console.log(numerosFiltrados)

//reduce ele vai reduzir todas as informações em um unico array, de acordo com a função feita dentro
let somaPares = numerosPares.reduce(function(acumulativo,valor){
    return acumulativo + valor
})
console.log(somaPares)

//forEach não precisa de console.log para testar, ele precisa estar dentro, irá executar para cada dado do array
numerosPares.forEach(function(valor,indice){
    console.log("O indice " + indice + " tem o valor:" + valor)
})

//exercicio 1
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(valor){
    return valor > 18;
})
console.log(maiores)