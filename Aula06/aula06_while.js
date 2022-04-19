console.clear();
const prompt = require('prompt-sync')();

// let nome = prompt('Qual o seu nome? ');
// let numero = +prompt('Digite um número: ');


// if (nome == 'Gabriel'){
//     console.log('Você é o Gabriel!!!');
// }

// while (numero < 20){
//     console.log('O número é menor que 20');
//     numero = +prompt('Digite um número: ');
// }

// while (numero < 100){
//     console.log(numero);
//     numero++ // Nesse momento ele acresce número em 1
// }

// While vai testar uma condição, e caso ela seja verdadeira executar o código
// Após isso, ele testa novamente, e continua executando ENQUANTO for verdadeiro.
// while (numero != 0){
//     console.log(numero);
    
//     if (numero > 0){
//         numero--
//     } else if (numero < 0){
//         numero++
//     }
// }






// // Quando uso while(true), ele vai sempre ser executado.
// // Para não cair num ciclo eterno, eu preciso ter um break executado em algum momento

// while (true){
//     console.clear();
//     let usuario = prompt('Digite seu nome: ')
//     console.log('Seja bem vindo(a)!', usuario);
//     console.log();

//     if (usuario == 'encerrar'){
//         console.log('Digite sua senha: ')
//         let senha = prompt();
//         // caso o usuario digite a senha correta, ele vai cair nesse break
//         if (senha == '123456'){
//             break; // Nesse momento ele ENCERRA a execução do while, não importa se a condição é verdadeira.
//         } else {
//             prompt('Senha inválida!');
//             continue; // Ele encerra a execução atual, e volta para o início, testando a condição novamente.
//         }
        
//     }

//     let resposta = prompt('Você gosta de viajar? ').toLowerCase();
//     while (resposta != 'sim' && resposta != 'nao'){
//         resposta = prompt('Entrada inválida, digite "Sim" ou "Não"').toLowerCase();
//     }

//     if (resposta == 'nao'){
//         prompt('Ok, obrigado!');
//         continue;
//     }

//     console.log('Vou te apresentar algumas ofertas.');
//     let dinheiro = +prompt('Até quanto você costuma gastar em viagens? ')

//     if (dinheiro > 5000){
//         console.log('Opa, bora pra Europa?');
//     } else if (dinheiro > 1000){
//         console.log('Da pra ver uma praia bacana');
//     } else if (dinheiro > 100){
//         console.log('Temos opções de cachoeiras próximas.')
//     } else {
//         console.log('Aí fica difícil né amigo...')
//     }

//     prompt();
//     console.log();
// }





let pergunta = '';

// Quando eu uso 'do... while', ele primeiro vai executar o código para DEPOIS testar a condição
// Na prática, a grande diferença é que meu código sempre vai ser executado PELO MENOS uma vez, indepentende da condição.

do {
    console.log('Bem vindo ao meu jogo!!');
    prompt();
    prompt();
    console.log('Parabéns, o jogo acabou. ')
    console.log();
    pergunta = prompt('Você deseja jogar novamente? ').toLowerCase();
} while (pergunta != 'nao')




console.log();