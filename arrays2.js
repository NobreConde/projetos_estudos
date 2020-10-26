let pessoa = ["Matheus"];
console.log(pessoa);

//push adcionar informações no fim da array
pessoa.push(22)
console.log(pessoa)

//pop pega o ultimo dado da array
let excluido = pessoa.pop();
console.log(excluido)//mostra qual dado foi excluido: 22
console.log(pessoa)//mostra como o array ficou

//unshift insere um dado no array no inicio do array
pessoa.unshift(22)
console.log(pessoa)

//shift pega o primeiro dado da array
pessoa.shift()
console.log(pessoa)

let pessoa1 = ["Caio", 1.65, "Caio"];
console.log(pessoa1)

//indexOf - a busca tem que ser exata
console.log(pessoa1.indexOf(1.65))//vai retornar o valor 1, que é onde o dado se eneontra, se ele não encontra o valor é -1

//lastIndexOf
console.log(pessoa1.lastIndexOf("Caio"))//ele vai retornar 2 pois é onde esta a ultima ocorrencia de "Caio"

//join vai trasnformar o array em uma string
console.log(pessoa1.join(" - ")) //dentro dos parenteses você ´pode escolher com o que serpa separado, nesse caso usamos um traço

//exercicio 1
let alunos = ["João", "Pedro", "Jorge", "Francisco"]
let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");
console.log(indiceJoao, indiceFrancisco)

//exercicio 2
let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]
let fraseNova = arrayFrase.join(" ")
console.log(fraseNova)

//exercicio 3
let estudantes = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

let alunoFormado = estudantes.pop()
console.log(estudantes)

//exercicio 4
let estudantes1 = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
  ]

estudantes1.push({
    nome: 'João',
    media: 5,
    curso: 'iOS'
})
estudantes1.push({
    nome: 'Miguel',
    media: 2,
    curso: 'Android'
})

console.log(estudantes1)

//exercicio 5
let estudantes2 = [
    {
       nome: 'Álvaro',
       media : 9,
       curso : 'Android',
     },
      {
        nome: 'Daniel',
        media : 6,
        curso : 'Full Stack',
      },
      {
        nome: 'Alexis',
        media : 3,
        curso : 'iOS',
      },
    ]
    console.log(estudantes2)
    let alunoDesistente = estudantes2.shift()
    console.log(estudantes2)

//exercicio 6
let estudantes3 = [
    {
      nome: 'Alvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    },
    {
      nome: 'Alexis',
      media : 3,
      curso : 'iOS',
    }
  ]
  console.log(estudantes3)
  estudantes3.unshift({
    nome: "Mariana",
    media: 9,
    curso: "Full Stack"
  })
  estudantes3.unshift({
    nome: "Francisco",
    media: 2,
    curso: "Android"
  })
  console.log(estudantes3)