console.clear();
const prompt = require('prompt-sync')();

let lista = ['Gabriel','Kevin','Thais','Ivan','Elvis','Ana',[20,18,30,50,250,12]];

// console.log(lista[5]);

// // Acessei a array de números dentro da array principal
// // Usei o método sort junto com uma função para ordenar esse números de maneira ascendente
// // Usei o reverse para inverter a ordem deles depois de ordenados (tornando a ordem descendente)
// // Acessei o índice 2, já depois de toda a transformação feita para ter o 3º maior número do array.
// console.log(lista[5].sort((a, b) => a - b).reverse()[2]);


// console.log(lista[0].length);









let nomes = ['Kevin','Thais','Gabriel','Ivan','Ednilson Fragoso','Ana','Elvis','Ivan'];



// // Classificando a lista em ordem crescente de tamanho de nomes
// // E salvando em uma nova lista já ordenada
// let listaOrdenada = nomes.sort((a, b) => a.length - b.length)
// console.log(listaOrdenada);

// console.log(`O nome mais comprido da lista é: ${listaOrdenada[listaOrdenada.length - 1]} com ${listaOrdenada[listaOrdenada.length - 1].length} caracteres.`)
// console.log(`O nome menos comprido da lista é: ${listaOrdenada[0]} com ${listaOrdenada[0].length} caracteres.`)





// //Achando o maior nome da lista sem usar nenhum método.

// let maiorTamanho = 0;
// let maiorNome = '';

// for (let i of nomes){
//     // Posso usar o método length em strings, dessa forma vejo o tamanho de cada nome da lista
//     // console.log(i.length);
//     if (i.length > maiorTamanho){
//         maiorTamanho = i.length;
//         maiorNome = i;
//     }
// }

// let menorTamanho = maiorTamanho;
// let menorNome = '';

// for (let i of nomes){
//     // Posso usar o método length em strings, dessa forma vejo o tamanho de cada nome da lista
//     // console.log(i.length);
//     if (i.length < menorTamanho){
//         menorTamanho = i.length;
//         menorNome = i;
//     }
// }

// console.log(`O nome mais comprido da lista é: ${maiorNome} com ${maiorTamanho} caracteres.`)
// console.log(`O nome menos comprido da lista é: ${menorNome} com ${menorTamanho} caracteres.`)




// // Quando uso splice, o primeiro argumento é o índice no qual ele será aplicado
// // O segundo argumento é o número de elementos a deletar (pode ser 0)
// // Ele vai me retornar os valores deletados, e eu posso armazená-los em uma variável.
// let nomesDeletados = nomes.splice(2,3,'Thiago','Joao Vitor','Matheus');
// console.log(nomesDeletados);



// let deletar = prompt('Qual nome você deseja deletar? ');
// // Usando o for in para apagar todos os nomes da lista com o valor escolhido

// for (let i in nomes){
//     if (nomes[i] == deletar){
//         nomes.splice(i,1)
//     }
// }

// console.log(nomes);





// // Fazendo de outra forma, usando o while para apagar cada índice achado pelo indexOf enquanto existir.
// let deletar = prompt('Qual nome você deseja deletar? ');
// let indiceDel;
// let contadorDel = 0

// // Ele só vai rodar o while se o nome existir pelo menos uma vez na lista.
// if (nomes.indexOf(deletar) == -1){
//     console.log('Nome não encontrado.')
// } else {
//     while (true){
//         // Encontrando o índice do valor passado e guardando em uma variável
//         indiceDel = nomes.indexOf(deletar);

//         // Se não encontrar o nome na lista (indexOf retorna -1), break
//         if (indiceDel == -1){
//             break;
//         }

//         console.log('Encontrado no índice:',indiceDel);

//         // Após achar o índice, uso o splice para apagar o nome
//         nomes.splice(indiceDel,1);

//         // Aumentando o contador de quantas vezes o nome foi encontrado.
//         contadorDel++
//     }
// }
// console.log();

// console.log(nomes);
// console.log(`O nome foi encontrado e apagado ${contadorDel} vezes`)


console.log();