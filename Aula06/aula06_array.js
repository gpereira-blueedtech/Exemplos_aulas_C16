console.clear();
const prompt = require('prompt-sync')();


// let aluno1 = ['Joao Vitor', 'Ivan Maia', 'Renato Jax']
// let aluno2 = 'Ivan Maia'
// let aluno3 = 'Renato Jax'

let listaAlunos = ['Joao Vitor', 'Ivan Maia', 'Renato Jax', 'Wevilla', 'Thais Monteiro']
let idades = [18, 20, 30]
let alunos = ['Joao Vitor', 18, 'Ivan Maia', 20, 'Renato Jax', 30, true];
let alunos2 = ['Joao Vitor', 'Ivan Maia', 'Renato Jax', [18, 20, 30] ]
let alunos3 = ['Joao Vitor', 'Ivan Maia', 'Renato Jax', idades ]

// console.log(listaAlunos);
// console.log()
// console.log(alunos);
// console.log()
// console.log(alunos2);

// Esse método me retorna o tamanhoa da array, isso é, quantos elementos ela possui.
// console.log(alunos3.length);

// Eu posso armazenar essa informação em uma variável
// let tamanhoArray = alunos3.length;
// console.log(tamanhoArray);

// // Para acessar um item de uma array, eu devo passar o seu ÍNDICE entre [].
// // Lembrando que os índices começam em 0!!!
// console.log( listaAlunos[2] );

// // Esse valor também pode ser armazenado
// let novoAluno = listaAlunos[0]
// console.log(novoAluno);
// console.log(typeof novoAluno);




// // Retornando um elemento que é uma array dentro de outra array
// console.log(alunos2[3]); // [ 18, 20, 30 ]

// // Acessando o índice de uma array que está dentro de outra.
// // Primeiro é o indíce da array secundária, depois o índice do elemento dentro dela.
// console.log(alunos2[3][0]);

// // Quando o elemento retornado é uma array, eu posso tratá-la como qualquer outra array
// // Posso manipulá-la, acessar seus indíces, etc...
// console.log(alunos2[3] [2]);
// console.log(alunos2[3].length);





console.log(listaAlunos);

// // Alterando um valor direto pelo índice
// listaAlunos[0] = prompt('Digite o nome do(a) novo(a) aluno(a): ');
// console.log(listaAlunos);



//              ## PUSH

// let novoAluno = prompt('Digite o nome do(a) novo(a) aluno(a): ');
// // O push vai adicionar o elemento passado ao final da array.
// listaAlunos.push(novoAluno);
// console.log(listaAlunos);


// console.log('Digite o nome do(a) novo(a) aluno(a): ');
// // Passando o elemento direto pelo prompt, sem armazenar em uma var antes.
// listaAlunos.push(prompt());
// console.log(listaAlunos);


//          ## POP()

// // O método pop vai remover o ÚLTIMO elemento de uma array.
// // Além disso, ele me RETORNA o elemento removido, dessa forma eu posso armazená-lo (ou não.)

// let removido = listaAlunos.pop();
// console.log(listaAlunos);

// // Adicionando o elemento removido à outra lista
// let listavazia = [];
// listavazia.push(removido)
// console.log(listavazia);



//          ## SPLICE()


let spliceremovidos = listaAlunos.splice(1, 0, 'Caio Silva', 'Ednilson Fragoso');
console.log(listaAlunos);
console.log(spliceremovidos);


console.log();