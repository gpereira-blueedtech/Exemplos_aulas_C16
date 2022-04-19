// O comando console.clear() vai limpar a tela antes da execução do meu código.
console.clear();
const prompt = require('prompt-sync')();


// Ele vai ignorar tudo que estiver entre o sinal abaixo e o próximo (linha 40)
// Para executar esse códigos, remova esses sinais.

/*


// console.log é o comando utilizado para apresentar alguma mensagem no terminal
// É uma maneira de passar informações ao usuário.
console.log('Olá mundo!');
// Exemplos de como usar um texto com "aspas"
// Se eu abro com aspas simples, devo usar duplas no texto, e vice-versa.
console.log('Hoje vamos falar com Pedro "Pepe" ');
console.log("Hoje vamos falar com Pedro 'Pepe' ");
console.log();

// Declarei uma variável chamada nome e armazenei nela a STRING 'Gabriel'
let nome = 'Gabriel';
let sobrenome = 'Lima Pereira'
let altura = 1.80;
let idade = 20;

console.log(nome);
console.log(idade);
console.log();

// Usando o typeof para verificar o tipo de cada variável
// Lembrando que ele precisa estar dentro de um console.log para aparecer na tela
console.log(typeof nome);
console.log(typeof idade);

console.log('Boas vindas', nome, sobrenome, 'Sua idade é:', idade);



*/


//      ## OPERADORES ##

let num1 = 13;
let num2 = 10;

let soma = num1 + num2;
let sub = num1 - num2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2); // Faz uma operação de multiplicação
// console.log(num1 % num2); // Exibe o resto da operação
// console.log();

// console.log(15 + 20);
// console.log(num1 + 30);

// console.log(soma);
// console.log(sub);







// //      ## PROMPT

// let nomeUsuario = prompt('Qual o seu nome? ');

// // Por definição o prompt guarda o valor como string
// // Caso eu queira já armazenar como número, uso +prompt.
// let numero1 = +prompt('Digite um número: ');
// let numero2 = +prompt('Digite outro número: ');
// let resultadoSoma = numero1 + numero2;

// // console.log(typeof numero1);
// // console.log(typeof numero2);


// // console.log('Boas vindas', nomeUsuario, 'A soma dos número é:', resultadoSoma);

// // // Outra maneira de apresentar um texto no console log concatenando as variáveis como string
// // console.log(`Boas vindas ${nomeUsuario}, a soma dos número é: ${numero1 + numero2}.`);

// console.log(`
// Boas vindas ${nomeUsuario}, 
// a soma dos número é: ${resultadoSoma}.
// `);



// // Ainda que o console.log transforme em string para exibição, a variável original não é alterada
// console.log(typeof resultadoSoma);



// Uma variável pode ter seu valor alterado a qualquer momento dentro do código.
let estudante = 'Anônimo';
console.log(`O nome armazenado é: ${estudante}`);
console.log();

estudante = prompt('Digite o nome do(a) estudante: ');
console.log(`O nome armazenado é: ${estudante}`);
console.log();

estudante = prompt('Digite o nome do(a) estudante: ');
console.log(`O nome armazenado é: ${estudante}`);
console.log();


console.log();