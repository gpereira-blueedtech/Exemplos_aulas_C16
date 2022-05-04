console.clear();
const prompt = require('prompt-sync')();


// async function funcaoAsync(){
//     return 'Blue';
// }

// funcaoAsync()
//     .then(console.log);






// // Fazendo as funções da aula anterior usando async.

// async function primeiraFuncao(parametro) {
//     console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
//     return parametro;
// }

// async function segundaFuncao(parametro) {
//     const novoParametro = parametro + 10;
//     console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
//     return novoParametro;
// }

// async function terceiraFuncao(parametro) {
//     const novoParametro = parametro * 2;
//     console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      
//     return novoParametro;
// }

// async function quartaFuncao(parametro) {
//     const novoParametro = parametro - 15;
//     console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
//     return novoParametro;
// }

// let numero = +prompt('Escolha um número a ser zoado: ')

// primeiraFuncao(numero)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao);







// async function saudacao(texto, tempo) {
//     const promise = new Promise(resolve => {
//         setTimeout(() => resolve(texto), tempo);
//     });

//     const escrever = await promise;
//     console.log(escrever);
// }

// console.log('Estou calculando seu resultado...');
// saudacao('Parabéns, você foi aprovado!!!', 5000);







// Uma função que tudo que faz é forçar um erro.

async function erro() {
    try {
        await Promise.reject('Deu erro!');
    } catch(e) {
        console.log(e);
    }
}
  
erro();