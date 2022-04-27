console.clear();
const prompt = require('prompt-sync')();

// Declarando a função.
// Sempre que eu quiser passar um valor para DENTRO da função, devo usar ARGUMENTOS!
function chover_meteoro(possibilidade){
    // Sorteio um número entre 1 e 100 e guardo em d100
    let d100 = Math.floor(Math.random()*100)+1

    // Se o número sorteado for menor que o passado no argumento, a possibilidade ocorre
    // Ou seja, quanto maior o número do argumento, maior a probabilidade.
    if (d100 <= possibilidade){
        console.log('Choveu meteoro!!!');
        return true;
    } else {
        console.log('Você continuou sua viagem.');
        return false;
    }
}

// for (let i = 0; i < 5; i++){
//     chover_meteoro();
// }




// // Usando uma função para dar um break em um ciclo
// // A função não pode ter um break dentro dela
// // Por isso uso um return, e caso ela retorne um valor especificado (nesse caso, true), vai dar o break
// let distancia = +prompt('Quantos quadrantes você precisa andar? ');

// for (let i = 1; i <= distancia; i++){
//     console.log(`Quadrante ${i}:`)
//     // let choveu = chover_meteoro(30);
//     // if (choveu == true){
//     //     console.log();
//     //     console.log('AVISO!!!')
//     //     console.log('Você pegou uma chuva de meteoros e não conseguiu continuar!');
//     //     break;
//     // }

//     // // Outra forma:
//     // // Se o retorno for true, vai entrar no if e dar o break no ciclo
//     if (chover_meteoro(30)){
//         console.log();
//         console.log('AVISO!!!')
//         console.log('Você pegou uma chuva de meteoros e não conseguiu continuar!');
//         break;
//     }
    
//     // Só para pular um espaço entre cada execução
//     console.log();
// }








// // O return ENCERRA uma função e RETORNA (devolve, entrega) o valor passado.
function esquiva(lvl = 1){
    // Sorteio um número entre 1 e 20 e guardo em d20
    let d20 = Math.floor(Math.random()*20)+1

    // Se o número sorteado for menor que o passado no argumento, a possibilidade ocorre
    // Ou seja, quanto maior o número do argumento, maior a probabilidade.
    if (d20 <= lvl * 1.5){
        // console.log('Esquivou!!!');
        return "Ele conseguiu esquivar."
    } else {
        // console.log('Você tomou o dano.');
        return "Ele não conseguiu esquivar."
    }
}

nivel = 10

// // Como minha função retorna uma string, eu posso usá-la em um console.log para exibi-la
// console.log(esquiva(nivel));

// // Ou eu posso armazenar essa string retornada em uma variável
// let tentEsquiva = esquiva(nivel);
// console.log(tentEsquiva)









// lista = ['Gabriel','Jorge','Thais'];

// // Exemplos de métodos que RETORNAM um valor
// let maiuscula = lista[2].toUpperCase();
// let removido = lista.pop();

// console.log(lista);
// console.log(removido);
// console.log(maiuscula)








// // Retornando mais de um valor em uma lista:
function calculadora(num1, num2){
       
    let soma = num1 + num2;
    let subt = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;

    // O return sempre retorna apenas um valor
    // Porém esse valor pode ser uma lista.
    return [soma, subt, mult, div];
}

// let numero1 = +prompt('Digite o primeiro número: ');
// let numero2 = +prompt('Digite o segundo número: ');

// // Armazenando a lista de resultados que foi retornada da função
// let resultados = calculadora(numero1, numero2);

// // Exibindo cada elemento da lista de resultados armazenada
// console.log(`A soma é:`, resultados[0]);
// console.log(`A subtração é:`, resultados[1]);
// console.log(`A multipicação é:`, resultados[2]);
// console.log(`A divisão é:`, resultados[3]);






console.log();