console.clear();
const prompt = require('prompt-sync')();

// Se não for sexta-feira santa o Ivan faz churrasco


// // Quando uso = (um igual só) estou atribuindo, passando um valor à alguma coisa
// let sextaSanta = prompt('Hoje é Sexta-feira santa? ');

// // Quando uso == (dois iguais) estou COMPARANDO se uma coisa é igual à outra.
// // Apenas se essa condição for VERDADEIRA é que o código que está entre as chaves será executado
// if (sextaSanta == 'Nao') {
//     console.log('O Ivan vai fazer churrasco')
//     console.log('O Ivan vai comprar cerveja')
//     console.log('O Ivan vai chamar os amigos')
// }




// // Se o dia for diferente de sexta santa, o Ivan faz churrasco
// // Senão, ele vai comer peixe.

// let dia = prompt('Que dia é hoje? ');

// // O else só é executado caso a condição seja FALSA
// // Ele está atrelado à condição do if anterior, por isso ele não tem uma condição na frente
// if (dia.toLowerCase() != 'sexta santa') {
//     console.log('O Ivan vai fazer churrasco');
//     console.log('O Ivan vai comprar cerveja');
//     console.log('O Ivan vai chamar os amigos');
// } else {
//     console.log('O Ivan vai comer peixe.');
// }


// if (dia == 'Sexta santa') {
//     console.log('O Ivan vai comer peixe.');
// } else if (dia == 'Natal'){
//     console.log('O Ivan vai cear com a família')
// } else {
//     console.log('O Ivan vai comer churrasco.');
// }



// // No caso de else if, ele só faz o teste da próxima condição caso a anterior seja falsa.
// // Ou seja, ele encerra os testes assim que encontra a primeira verdadeira
// // Caso nenhuma seja verdadeira, obrigatoriamente cai no else.
// // Lembrando que o else não é obrigatorio, nesse caso, se nenhum for verdadeira, ele não vai fazer nada.
// let numero = +prompt('Digite um número: ');

// if (numero > 100){
//     console.log('O número é maior que 100');
// } else if (numero > 50){
//     console.log('O número é maior que 50.');
// } else if (numero > 20){
//     console.log('O número é maior que 20.');
// } else if (numero >= 10){
//     console.log('O número é maior ou igual a 10.');
// } else {
//     console.log('O número é menor do que 10');
// }



// let professorSegunda = prompt('O professor foi trabalhar na segunda? ').toLowerCase();
// let professorTerca = prompt('O professor foi trabalhar na terça? ').toLowerCase();
// let professorQuarta = prompt('O professor foi trabalhar na quarta? ').toLowerCase();

// if (professorSegunda == 'nao'){
//     console.log('Marco falta na segunda');
// } else if (professorSegunda == 'sim'){
//     console.log('OK na segunda');
// } 

// if (professorTerca == 'nao'){
//     console.log('Marco falta na terça');
// } else if (professorTerca == 'sim'){
//     console.log('OK na terça');
// } 

// if (professorQuarta == 'nao'){
//     console.log('Marco falta na quarta');
// } else if (professorQuarta == 'sim'){
//     console.log('OK na quarta');
// }



// // Se não for sexta-feira santa E o Ivan tiver dinheiro, o Ivan faz churrasco.
// // Nesse caso, TODAs as condições precisam ser verdadeiras
// // Usamos o operador && para que retorne verdadeiro caso TODAS sejam verdadeiras
// let dinheiro = prompt('O Ivan está com a grana? ');


// if (sextaSanta == 'Nao' && dinheiro == 'Sim') {
//     console.log('O Ivan vai fazer churrasco')
//     console.log('O Ivan vai comprar cerveja')
//     console.log('O Ivan vai chamar os amigos')
// }




// // Se o Ivan tiver dinheiro OU os amigos forem pagar, terá churrasco.
// // Nesse caso, APENAS UMA das condições precisa ser verdadeira
// // Usamos o operador || para que retorne verdadeiro caso PELO MENOS UMA seja verdadeira

// let amigosGrana = prompt('Os amigos do Ivan vão bancar? ');

// if (dinheiro == 'Sim' || amigosGrana == 'Sim'){
//     console.log('Vai ter churrasco!!!');
// }



// // Se (não for sexta-feira santa) E (o Ivan tiver dinheiro OU os amigos dele bancarem)

// if ((sextaSanta == 'Nao') && (dinheiro == 'Sim' || amigosGrana == 'Sim')) {
//     console.log('Agora sim o churrasco tá garantido!!!');
// }





//          ## EXERCÍCIOS

// 1 - Faça um Programa que peça dois números e imprima o maior deles, 
// e informe caso eles sejam iguais.

let numero1 = +prompt('Digite um número: ');
let numero2 = +prompt('Digite outro número: ');

if (numero1 > numero2){
    console.log(`O 1º número: ${numero1} é maior`)
} else if (numero2 > numero1) {
    console.log(`O 2º número: ${numero2} é maior`)
} else {
    console.log('Eles são iguais.')
}






// let num1 = prompt('Numero 1: ');
// let num2 = prompt('Numero 2: ');

// if (num1 > num2){
//     console.log('O primeiro número é maior')
// } else if (num2 > num1){
//     console.log('O segundo é maior')
// } else {
//     console.log('Eles são iguais.')
// }




// // //              ## WHILE (um pouco)

// // // Estou transformando a resposta em minúscula já na entrada do usuário
// // // Então não importa como ele digite, na variável vai ficar guardado tudo em minúsculo.
// // let resposta = prompt('Você é uma boa pessoa? ').toLowerCase()

// // // Enquanto a condição for verdadeira, a execução vai repetir
// // while (resposta != 'sim' && resposta != 'nao'){
// //     console.log('Entrada inválida');
// //     resposta = prompt('Você é uma boa pessoa? ').toLowerCase()
// // }








// console.log();

