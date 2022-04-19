console.clear();
const prompt = require('prompt-sync')();

// // Quando uso let (ou const, var) eu estou declarando, criando a variável
// let alunoDaBlue = 'Luiz'; //string
// let idade = 20; // Number

// console.log('Olá alunos(as) da Blue!');

// // Usando template(com crase ao abrir a string) eu posso colocar variáveis no meio do meu texto
// // usando a sintaxe ${nomeDaVariavel}
// console.log(`O nome é ${alunoDaBlue} e a idade é ${idade} `);
// console.log();

// // // Nesse caso a variável vai armazenar todo o texto (incluindo as variaveis) como uma única string
// // let textoCompleto = `O nome é ${alunoDaBlue} e a idade é ${idade}`
// // console.log(textoCompleto);


// // // Quando eu quiser usar a variável que já foi declarada, não posso usar o let antes
// alunoDaBlue = prompt('Qual o seu nome? ');


// // Posso usar o prompt 'vazio', sem nenhum texto a ser apresentado ao usuário
// // Nesse caso o texto está no console.log acima dele.
// console.log('Qual a sua classe? ');
// let classe = prompt();

// console.log();
// console.log(`Agora o nome é ${alunoDaBlue}, a idade é ${idade} e a classe é ${classe}`)
// console.log();


// // Posso usar o prompt apenas para 'pausar' o meu código até o usuário dar Enter
// console.log('Bem vindo ao meu jogo!');
// console.log('Pressione ENTER para continuar');
// prompt();


let nome = 'Lucas';
let idade = 50

// Dessa maneira meu console log vai exibir uma string fixa e o valor da variável na frente
// Cada elemento (string, variável) deve ser separado por vírgula
console.log('O seu nome é', nome, 'e sua idade é', idade);

//Dessa maneira eu coloco todos os elementos na mesma string
// Todos eles passam a ser do tipo string
console.log(`O seu nome é ${nome} e sua idade é ${idade}`);


console.log();