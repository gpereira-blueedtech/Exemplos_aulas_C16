console.clear();
const prompt = require('prompt-sync')();


// Correção de exercícios:

// Aula 7:
/*
Crie um programa em que o usuário escolha a quantidade de notas serem entradas 
e depois peça e armazene essa quantidade de notas em um array. 
Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), 
EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
*/

// let quantidade = +prompt('Quantos alunos você deseja cadastrar? ');
// let arrayNotas = [];
// let aprovados = 0;
// let recuperacao = 0;
// let reprovados = 0;

// for (let i = 0; i < quantidade; i++){
//     let nota = +prompt('Digite a primeira nota: ');
//     arrayNotas.push(nota);

//     if (nota >= 7){
//         aprovados++
//     } else if (nota < 5){
//         reprovados++
//     } else {
//         recuperacao++
//     }
// }




// // Refatorando o exercício para pedir duas notas de cada aluno e cadastrar a média
// for (let i = 1; i <= quantidade; i++){
//     console.log(`Aluno nº ${i}:`)
//     let nota1 = +prompt('Digite a primeira nota: ');
//     let nota2 = +prompt('Digite a segunda nota: ');

//     let media = (nota1 + nota2) / 2
//     console.log(`A média desse aluno foi: ${media}`)
//     arrayNotas.push(media);

//     if (media >= 7){
//         aprovados++
//     } else if (media < 5){
//         reprovados++
//     } else {
//         recuperacao++
//     }
//     console.log();
// }


// console.log(arrayNotas);
// console.log(`
// Você cadastrou:
// ${aprovados} alunos aprovados,
// ${recuperacao} alunos em recuperação,
// ${reprovados} alunos reprovados.
// `)









// Aula 13:

/*
Crie um objeto pessoa com os atributos: nome, idade, peso e altura. 
Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer.
Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, 
ela deve crescer 5 cm. 
Crie um método bio que retorna uma string com todas as informações da pessoa.
*/

// let nome = prompt('Qual o nome? ');
// let idade = +prompt('Qual a idade? ');
// let peso = +prompt('Qual o peso (kg)? ');
// let altura = +prompt('Qual a altura (m)? ');

// let pessoa = {
//     nome,
//     idade,
//     peso,
//     altura,

//     envelhecer: function(){
//         if (this.idade < 21){
//             this.idade++
//             this.altura += 0.05
//             this.altura = this.altura.toFixed(2)
//         } else {
//             this.idade++
//         }
//     },

//     // Método de envelhecer mais de 1 ano
//     envelhecerAnos: function(anos = 1){
//         for (let i = 0; i < anos; i++){
//             if (this.idade < 21){
//                 this.idade++
//                 this.altura += 0.05
//                 this.altura.toFixed(2)
//                 Number(this.altura);
//             } else {
//                 this.idade++
//             }
//         }
//     },

//     engordar: function(peso = 1){
//         // this.peso = this.peso + peso;
        
//         // Outra forma, mesmo resultado:
//         this.peso += peso
//     },

//     emagrecer: function(peso = 1){
//         this.peso -= peso
//     },

//     crescer: function(){
//         this.altura++
//     },

//     bio: function(){
//         return `
//         Dados de ${this.nome}:
//         Altura: ${this.altura}
//         Peso: ${this.peso}
//         Idade: ${this.idade}
//         `
//     }
// };

// console.log(pessoa.bio());
// console.log();



// let quilos = +prompt('Quantos quilos a pessoa vai engordar? ')
// pessoa.engordar(quilos);

// let anos = +prompt('Quantos anos a pessoa vai envelhecer? ')
// pessoa.envelhecerAnos(anos);
// console.log();

// console.log(pessoa.bio());










// let variavel = prompt('Digite: ');

// // Caso variavel seja um número: 0 = false; Qualquer outro valor = true;
// // Caso variavel seja uma string: '' (vazia) = false; Qualquer outro valor (mesmo apenas um espaço) = true;
// // Case variavel seja undefined (não defini nenhum tipo) = false.

// if (variavel){
//     console.log('Entrou')
// } else {
//     console.log('Não entrou.')
// }


// console.log(variavel)
// console.log(typeof variavel)






// Aceitando um número com , 
// recebo o valor como string, para aceitar a ,
// let numeroDecimal = prompt('Digite um número com casas decimais: ');
// console.log(numeroDecimal);

// // Quando uso o método replace(), ele não altera a variável original,
// // Ao invés disso me RETORNA uma nova variável, 
// // Portando é necessário armazenar esse novo valor.
// // Substituindo a , por . na string:
// numeroDecimal = numeroDecimal.replace(',' , '.');

// // Após a substituição, transformo essa string em number.
// numeroDecimal = Number(numeroDecimal);


// // Ou eu posso fazer tudo de uma vez:
// numeroDecimal = Number(numeroDecimal.replace(',' , '.'));

// console.log(typeof numeroDecimal);
// console.log(numeroDecimal);





// // Declarando uma função para fazer essa correção.
// function corrigeNumero(numero){
//     numero = Number(numero.replace(',' , '.'));
//     return numero;
// }

// let novoNumero = corrigeNumero(numeroDecimal);
// console.log(novoNumero)










// // Exemplo para esperar ENTER para continuar o programa
// // E não permitir que meu usuário digite nada além de ENTER

// console.log('A história do meu jogo:');
// console.log('Pressione ENTER para continuar.');

// while (prompt() != ''){
//     console.log('Digite apenas ENTER');
// }











console.log();