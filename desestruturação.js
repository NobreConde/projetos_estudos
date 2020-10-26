let pessoa = {
    nome: "Matheus",
    altura: 1.75
}
let {nome,altura} = pessoa;
console.log(altura)

let listaCompras = ["pão","leite","carne"];
const [item1,item2,item3] = listaCompras;

console.log(item2)

//exercicio

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [marruecos,bariloche,barcelona,china,grecia] = destinosIncriveis

console.log(bariloche,china)