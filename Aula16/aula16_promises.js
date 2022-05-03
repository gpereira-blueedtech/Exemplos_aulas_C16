console.clear();
const prompt = require('prompt-sync')();

// function pedirPizza(){
//     console.log('Chego na Pizzaria');
//     console.log('Escolho o sabor');
//     console.log('Peço a pizza');
//     console.log('Espero a pizza ficar pronta');
//     console.log('Vou embora com a pizza');
// }

// pedirPizza();

// console.log('Comer a pizza.');







// // Essa função será chamada como callback, ou seja, vai ser chamada por outra função.
// // Ela tem parâmetros declarados normalmente, e esses argumentos serão passados também dentro da outra função.
// // Assim como acontece em qualquer função, o nome do parâmetro declarado, e o argumento passado, não precisam ser os mesmos.
// function pizzaPronta(pizza, valor) {
//     console.log(`Sua pizza de ${pizza} está pronta.`);
//     console.log(`Ficou em R$${valor}`)
// }

// function acabouSabor(pizza) {
//     console.log(`Nós não temos mais pizza de ${pizza}.`);
// }
  
// function pedirPizza(callback) {
//     console.log('Cheguei na pizzaria.')
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     const preco = 50.00

//     // Nesse momento, ela vai chamar a função que foi passada como argumento.
//     // A vantagem disso, é que ao invés dessa função (pedirPizza) sempre chamar a mesma,
//     // Eu posso usá-la para chamar funções diferentes dependendo da situação, o que torna minha função mais versátil.
//     // Ela pode receber argumentos normalmente.
//     callback(sabor, preco);
// }


// let calabresa = prompt('Tem pizza de calabresa? ');
// if (calabresa == 'sim'){
//     // Caso sim, chamo a função inicial e passo como argumento uma função que faz a pizza ficar pronta.
//     pedirPizza(pizzaPronta);
// } else {
//     // Caso não, chamo a função inicial e passo como argumento uma função que diz que acabou a pizza.
//     pedirPizza(acabouSabor);
// }

// // As funções chamadas nesse caso ainda são síncronas.
// // Então apenas após a conclusão das duas é que o programa vai continuar.
// console.log('Vou para casa.');








// //          ### FUNÇÕES ASSÍNCRONAS
// //          # Promises

// function primeiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
//         resolve(parametro);
//     });
// }

// function segundaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro + 10;
//         console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
//         resolve(novoParametro);
//     });
// }

// function terceiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro * 2;
//         console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

//         resolve(novoParametro);
//     });
// }

// function quartaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro - 15;
//         console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
//         resolve(novoParametro);
//     });
// }

// let numero = +prompt('Escolha um número a ser zoado: ')

// primeiraFuncao(numero)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao);









// //         # Tratando erros com o catch

// function alteraNome(parametro) {
//     return new Promise((resolve, reject) => {
//         parametro = parametro.toUpperCase();

//         resolve(parametro);
//     });
// }

// function escreveNome(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

//         resolve(parametro);
//     });
// }

// // let nome = prompt('Escreva um nome para passar para maiúsculas: ');

// alteraNome(13)
//     .then(escreveNome)
//     .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));














// Exemplo de método de controle de tempo simples:

let personagem = {
    cansaco: 0,
    vital: 10,
    peso: 80,

    horas: 6,
    dia: 1,
    periodo: 'Manhã',

    comer: function(){
        this.peso++
    },

    bio: function(){
        console.log(`
        São ${this.horas} horas do dia ${this.dia}.
        Agora é ${this.periodo}.
        
        Você está:
        Vitalidade: ${this.vital}
        Cansaço: ${this.cansaco}
        Peso: ${this.peso} kg.
        `)
    },

    passaTempo: function(horas){
        this.horas += horas
        if (this.horas >= 24){
            this.horas -= 24;
            this.dia++
        }

        if (this.horas >= 19){
            this.periodo = 'Noite'
        } else if(this.horas >= 12){
            this.periodo = 'Tarde'
        } else if(this.horas >= 6){
            this.periodo = 'Manhã'
        } else {
            this.periodo = 'Madrugada'
        }
    }
}


while(true){ 
    console.clear();
    personagem.bio();

    console.log('Escolha a sua ação:');
    console.log('1 - Trabalhar');
    console.log('2 - Comer');
    console.log('3 - sair');
    let escolha = prompt('Escolha o que fazer: ')

    if (escolha == 1){
        console.log('Ele foi trabalhar')
        personagem.passaTempo(8)
    } else if (escolha == 2){
        console.log('Você comeu');
        personagem.comer();
        personagem.passaTempo(1)
    } else if (escolha == 3){
        break;
    } 
}










// // Exemplo de método para passar períodos

// let tempo = {
//     periodo: 'Manhã',

//     passaPeriodo: function(){
//         if (this.periodo == 'Manhã'){
//             this.periodo = 'Tarde'
//         } else if (this.periodo == 'Tarde'){
//             this.periodo = 'Noite'
//         } else if (this.periodo == 'Noite'){
//             this.periodo = 'Manhã'
//         }
//     }
// }

// console.log(tempo.periodo)

// tempo.passaPeriodo();

// console.log(tempo.periodo)







console.log();