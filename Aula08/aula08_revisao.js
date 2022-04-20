console.clear();
const prompt = require('prompt-sync')();

let filmes = ['Jurassic Park', 'Tubarão', 'O Exorcista'];
let filmes2 = [];

// let pergunta = prompt('Você deseja adicionar um novo filme? ');
// if (pergunta.toLowerCase() == 'sim'){
//     let novofilme = prompt('Digite o nome do novo filme: ');
//      // O método push vai adicionar um novo elemento ao final da lista.
//     filmes.push(novofilme);
// }




// let quantidade = +prompt('Quantos filmes você quer cadastrar? ');
// let i = 0

// // Esse while vai rodar a quantidade de vezes desejada pelo usuário
// // E a cada repetição vai adicionar um novo elemento à lista através do push.
// while (i < quantidade){
//     let novofilme = prompt('Digite o nome do novo filme: ');
//     filmes2.push(novofilme);
//     i++
// }
// console.log()

// let numindice = +prompt('Qual indice deseja acessar? ');
// console.log(filmes2[numindice]);






// let procura = prompt('Qual filme deseja deletar? ');

// // O método indexOf() me retorna o índice de um elemento dentro da Array.
// // Posso salvar esse valor em uma variável
// let indiceLocalizado = filmes.indexOf(procura);

// // Quando o indexOf não acha o valor passado na lista, ele retorna -1.
// if (indiceLocalizado == -1){
//     console.log('Filme não encontrado');
// } else {
//     // console.log(`O indíce do filme é ${indiceLocalizado}`);
//     let resposta = prompt('Deseja substituir por outro filme?' );
//     if (resposta == 'sim'){
//         let novofilme = prompt('Qual o novo filme? ')
//         // O método splice pode remover 0 ou mais itens a partir do índice passado no 1º argumento.
//         // A partir do 3º argumento, ele vai adicionar esses valores ao índice passado.
//         filmes.splice(indiceLocalizado, 1, novofilme);
//     } else {
//         filmes.splice(indiceLocalizado, 1);
//     }
// }

// console.log(filmes);






// O método pop vai remover o último elemento de uma lista.
// Ele também vai me retornar esse elemento, e eu posso armazená-lo.
// let filmeRemovido = filmes.pop();
// console.log(filmes);
// console.log(filmeRemovido);



// let cont = 0
// // O último índice sempre é igual ao tamanho da lista -1
// let ultimoIndice = filmes.length - 1

// while (cont <= ultimoIndice){
//     let filmeRemovido = filmes.pop();
//     filmes2.push(filmeRemovido);
//     cont++
// }

// console.log(filmes);
// console.log(filmes2);







// // Somando os números de uma Array sem usar um método específico
// let numeros = [10, 30, 15, 20]
// let soma = 0
// let cont = 0;

// // Uso o 'numeros.length - 1' para me retornar o último índice da lista, que é sempre 1 a menos que o tamanho.
// while (cont <= numeros.length - 1){
//     soma = soma + numeros[cont]
//     cont++
// }

// console.log(soma)








// let numeros = [10, 30, 15, 20, 10]
// let cont = 0;
// let soma = 0
// let numeroUser = +prompt('Que número deseja contar? ')

// while (cont <= numeros.length - 1){
//     if (numeros[cont] == numeroUser){
//         soma++
//     }
//     cont++
// }

// console.log(`O numero aparece ${soma} vezes`);


console.log();