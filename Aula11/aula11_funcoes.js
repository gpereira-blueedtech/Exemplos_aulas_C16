console.clear();
const prompt = require('prompt-sync')();

/*

Vá para o banheiro
Tire a roupa suja
Ligue o chuveiro
Lave o cabelo
Enxague o cabelo
Ensaboe todo o corpo
    Ensaboar o pescoço
    Ensaboar o suvaco
    ...
Enxague o corpo
Feche o chuveiro
Se seque
Coloque uma roupa limpa




Vá tomar banho.

Faça um bolo de chocolate

Pilote o ônibus espacial

*/


// Nesse momento eu estou apenas ENSINANDO a função ao computador
// Ou seja, ele não vai executar nada do que foi passado enquanto eu não pedir.
function saudacao(){
    let nome = prompt('Qual o seu nome? ');
    console.log(`Boa noite ${nome}! Estamos felizes que você está aqui.`);
    let idade = +prompt('Quantos anos você tem? ');
    if (idade >= 18){
        console.log('Vou te pagar uma cerveja!');
    } else {
        console.log('Vou te pagar um refri.')
    }
}


// Aqui estou de fato executando minha função.
// É só chamá-la pelo nome.
// saudacao();
// console.log();
// saudacao();



// let qtdAlunos = +prompt('Quantos alunos temos hoje? ')

// // Usando uma função dentro de um loop
// for (let i = 0; i < qtdAlunos; i++){
//     saudacao();
// }








// Escrevendo a mesma função, mas usando argumentos para receber nome e idade de fora do escopo dela.
// Os parâmetros estão recebendo um valor padrão.
// Isso quer dizer que caso o valor não seja passado como argumento ao chamar a função, ele vai assumir esse valor.
// Caso o argumento seja passado, ele recebe o valor do argumento normalmente.
function saudacao2(a = 'Aluno(a)', b = 18){
    console.log(`Boa noite ${a}! Estamos felizes que você está aqui.`);
    console.log(`Você tem ${b} anos.`);
    if (b >= 18){
        console.log('Vou te pagar uma cerveja!');
    } else {
        console.log('Vou te pagar um refri.')
    }
}

// let nome = prompt('Qual o seu nome? ');
// let idade = +prompt('Quantos anos você tem? ');

// let aluno = prompt('Qual o nome do aluno? ')
// let anos = +prompt('Quantos anos ele tem? ')

// // Eu posso chamar a função cada vez com uma variável diferente como argumento
// saudacao2(nome, idade);
// saudacao2(aluno, anos);


// let lista = ['Caio','Rayner',20,16]
// // Usando elementos de uma lista como argumentos
// saudacao2(lista[0], lista[2]);
// saudacao2(lista[1], lista[3]);


// // Estou chamando a função sem nenhum argumento, nesse caso ela vai assumir os valores padrão declarados.
// saudacao2();









// Essa função receberá apenas 1 argumento, que será uma lista.
// Então dentro dela eu posso usar os índices para acessar valores individuais
function saudacao3(a){
    console.log(`Boa noite ${a[0]}! Estamos felizes que você está aqui.`);
    console.log(`Boa noite ${a[1]}! Estamos felizes que você está aqui.`);
    
    if (a[2] >= 18){
        console.log(`Para o ${a[0]} vou pagar uma cerveja!`);
    } else {
        console.log(`Para o ${a[0]} vou pagar um refri!`)
    }

    if (a[3] >= 18){
        console.log(`Para o ${a[1]} vou pagar uma cerveja!`);
    } else {
        console.log(`Para o ${a[1]} vou pagar um refri!`)
    }
}

let lista3 = ['Thiago','Rayner',15,16];

// saudacao3(lista3);







// Essa função deverá receber 2 argumentos, que serão duas listas
// Uma com nomes dos alunos, e outra com as idades.
// Ele irá executar a saudação para cada aluno da lista, por causa do for.
function saudacao4(nome, idade){
    for (let i in nome){
        console.log(`Boa noite ${nome[i]}! Estamos felizes que você está aqui.`);
        
        if (idade[i] >= 18){
            console.log(`Para o ${nome[i]} vou pagar uma cerveja!`);
        } else {
            console.log(`Para o ${nome[i]} vou pagar um refri!`)
        }
    }
}


let lista4Nomes = ['Thiago','Rayner','Átila'];
let lista4Idades = [20, 16, 25]

// saudacao4(lista4Nomes, lista4Idades);

console.log();










// // Exemplo de função de setTimeout para exibir um texto depois de uma pausa.
// function pausa(texto, tempo){
//     setTimeout(() => {
//         console.log(texto)
//     }, tempo)
// }

// pausa('Olá', 3000)