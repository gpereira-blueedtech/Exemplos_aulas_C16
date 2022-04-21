console.clear();
const prompt = require('prompt-sync')();



// let quantidade = +prompt('Quantas vezes você quer repetir? ');

// // Usando While
// let i = 0
// while (i < quantidade){
//     console.log('Repetiu');
//     i++
// }

// // Usando for
// // 1º passo: Declarar uma variável de controle (só uma vez, ao iniciar o for)
// // 2º passo: Testar a condição, caso seja verdadeira, executa o código.
// // 3º passo (se a condição foi true): Executar o código
// // 4º passo: Fazer o incremento da var de controle
// // 5º passo: Voltar ao 2º passo (loop)
// for (let i = 0; i < quantidade; i++) {   
//     prompt(`O i agora vale ${i}`);
// }


// // Uma ótima maneira de dificultar muito uma coisa simples.
// let i = 0
// for ( ; ; ) {
//     if (i >= quantidade){
//         break
//     }   
//     prompt(`O i agora vale ${i}`);
//     i++
// }







//      ### for of

let filmes = [
    'Jurassic Park', 
    'Tubarao', 
    'O Exorcista',
    'O Senhor dos Aneis',
    'Matrix',
    'Star Wars'
];

// console.log(filmes);
// console.log(filmes.length);

// // O for of vai percorrer todos os elementos da lista e executar o código declarado para cada um.
// // A variável de controle definida (i) recebe o valor de cada um dos elementos, um de cada vez
// // Ou seja, na primeira execução, i recebe o elemento de indíce 0 (lista[0]), 
// // na segunda repetição i recebe o elemento lista[1], e assim por diante, até o último índice.
// for (let i of filmes){
//     console.log(i);
// }

// // Seria a mesma coisa que isso:
// for (let i = 0; i <= filmes.length -1; i++){
//     console.log(filmes[i]);
// }





// let numeros = [10, 30, 15, 20, 10]
// let soma = 0
// let numeroUser = +prompt('Que número deseja contar? ')

// for (let i of numeros){
//     // Verificando se o valor de i (elemento que ele está recebendo da lista) é igual ao escolhido
//     if (i == numeroUser){
//         soma++
//     }
// }

// console.log(`O número aparece ${soma} vezes`)




// // O for in itera sobre todos os elementos de uma lista, sendo que a cada
// // repetição a variável de controle (nesse caso: i) recebe o ÍNDICE do elemento.
// // Esse índice vem em formato de string.
// for (let i in filmes){
//     console.log(`O índice ${i} contém o valor: ${filmes[i]}`);
// }

//  // Seria a mesma coisa que isso:
// for (let i = 0; i <= filmes.length -1; i++){
//     console.log(i);
// }








// let nomesfilmes = [];
// let anosfilmes = [];
// let filmestotal = [ [], [] ];

// console.log('Bem vindo(a) ao meu cátalogo de filmes!');
// console.log('Quantos filmes deseja adicionar?');
// let qtd = +prompt()


// for (let i = 0; i < qtd; i++){
//     let novofilme = prompt('Digite o nome do filme: ');
//     let anofilme = prompt('Digite o ano de lançamento: ');

//     nomesfilmes.push(novofilme);
//     anosfilmes.push(anofilme);

//     // // Adicionando os valores à uma lista que contém duas listas: nome e ano.
//     // // Na lista índice 0 eu guardo os nomes, na lista índice 1 eu guardo os anos.
//     // filmestotal[0].push(novofilme)
//     // filmestotal[1].push(anofilme)

//     console.log('Filme cadastrado com sucesso!');
//     console.log();
// }

// console.log('-----');
// console.log();

// for (let i in nomesfilmes){
//     console.log(`Filme: ${nomesfilmes[i]}`);
//     console.log(`Ano:   ${anosfilmes[i]}`);
//     console.log();

//     console.log('Deseja remover esse filme?');
//     if ( prompt().toLowerCase() == 'nao' ){
//         console.log('-----');
//         console.log();
//         // Quando a execução cai no continue, ele encerra a execução atual
//         // E reinicia o ciclo, passando para o próximo elemento da lista.
//         continue;
//     } 

//     if ( prompt().toLowerCase() == 'sim' ){
//         nomesfilmes.splice(i, 1, prompt('Novo filme: '))
//         anosfilmes.splice(i, 1, prompt('Ano: '))
//         console.log('Filme substituído! ');
//     } 
//     console.log('-----');
//     console.log();

//     let sair = prompt('Deseja continuar? ');
//     if (sair == 'nao'){
//         // Quando a execução cai no break, ele encerra o ciclo imediatamente,
//         // Mesmo que ainda tenham elementos não percorridos na lista.
//         break;
//     }
// }

// console.log(nomesfilmes);
// console.log(anosfilmes);








//          ## USANDO LABELS
// O break e o continue sempre encerram o ciclo 'mais intero', ou seja, aquele que ele está diretamente ligado.
// Eu posso 'nomear' um ciclo (for ou while), e quando quiser encerrar um outro (mais externo), posso chamar por esse nome.

let a = 0;
let b = 0;
let c = 0;

primeiro: while (a <= 3){
    console.log('A=',a);
    a++

    segundo: while (b <= 3){
        console.log('B=',b);
        b++

        terceiro: while (c <= 3){
            console.log('C=',c);
            c++
            console.log('0: Encerrar');
            console.log('1: Retornar para A');
            console.log('2: Continuar')
            let saida = prompt('Selecione a opção: ')
            if (saida == 0){
                // Nesse momento eu encerro o ciclo externo, fazendo com que toda a execução seja encerrada
                break primeiro;
            } else if (saida == 1){
                // Eu encerro essa execução e volto para o ciclo externo, continuando a partir dali.
                continue primeiro;
            }
        }
    }
}






// // Acessando os valores individuais dos elementos dentro das arrays que estão dentro de uma array. 
// for (let i in filmestotal[0]){
//     console.log(`Filme: ${filmestotal[0][i]}`);
//     console.log(`Ano: ${filmestotal[1][i]}`);
//     console.log();
// }

console.log();