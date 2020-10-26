let carro = {
    nome: "Fox",
    ano: "2011"
}

for(let propriedade in carro){
    // console.log(propriedade)//imprime os nomes das propriedades
    console.log(propriedade, carro[propriedade])//imprime os valores e as propriedades
}

//exercicio

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for(let detalhes in bart){
    console.log(bart[detalhes])
}