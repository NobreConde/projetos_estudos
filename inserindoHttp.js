//EsTe programa consiste em o usuário inserir uma url, a qual será inserido http:// em frente
function adicionarHttp(url) {
    return String("http://" + url) //Aqui ele executa a inserção do http:// na url
}
function processar(lista,callback){
    let resul = []
    for (let i=0; i < lista.length; i++){ //Ele irpa efetuar a contagem de itens na lista, e efetuar o processo em cada um deles, enquanto a condição de execução for correspondida
         resul.push(callback(lista[i])) //Com o metódo push ele insere o resultado apóso callback
    }
    return resul //Retorna a resposta armazenada na variavel resul
}
console.log(processar(["www.google.com","www.teste.com"],adicionarHttp))//Aqui ele irá retornar o resultado, conforme abaixo

// [ 'http://www.google.com', 'http://www.teste.com' ]

//O programa foi feito utilizando a matéria aprendida callback, que consiste na execução de uma função externa dentro de outra função, e utilizando o for, que consiste na soma no contador para que todas as variaveis sejam alteradas