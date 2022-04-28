console.clear();
const prompt = require('prompt-sync')();

// let listaTelefones = ['333-555', '888-777', '555-444'];
// let listaNomes = ['Gabriel', 'Tiago', 'João']

// // Não tem como eu ter certeza que cada telefone corresponde ao nome do mesmo índice
// console.log(listaTelefones[0]);
// console.log(listaNomes[0]);



// // Um objeto é um tipo de coleção que não é indexada, ou seja, não tem índices.
// // Ao invés disso os valores são referenciados por CHAVES.
// // Cada conjunto de CHAVE: VALOR recebe o nome de PROPRIEDADE.
// let telefones = {Gabriel: '333-555', Tiago: '888-777', Joao: '555-444'}



// // Acessando o valor de uma chave dentro do objeto
// console.log(telefones.Gabriel);

// // Alterando o valor de uma chave
// telefones.Gabriel = 555
// console.log(telefones);


// // // Um objeto não é iteravel, portanto não posso usar for of.
// for (let i of telefones){
//     console.log(i);
// }



// // Quando eu tento atribuir um valor à uma chave que não existe, ela é criada.
// // O valor da chave pode estar em uma variável
// // Mas o nome da chave não (ou pode, mas a sintaxe é diferente)
// let telVictor = prompt('Qual o telefone do Victor? ');
// telefones.Victor = telVictor
// console.log(telefones)


// let nome = prompt('Digite o nome: ');
// let numero = prompt('Digite o telefone: ');

// // Quando o valor da chave a ser adicionada vem em uma variável eu uso objeto[variavel] = valor
// // Caso o nome da chave passada já exista no objeto, ele não vai criar uma nova,
// // apenas alterar o valor da existente.
// telefones[nome] = numero;

// console.log(telefones);



// // Esse objeto tem 2 propriedades: Uma com a chave Victor e uma com a chave Ivan
// // O valor de cada uma dessas chaves é um outro objeto, cada um com duas chaves: telefone e endereco
// let alunos = {
//     Victor: {telefone: '444-555', endereco: 'Rua do jamelao'}, 
//     Ivan: {telefone: '222-333', endereco: 'Rua da Alegria'}
// }

// // Acessando o objeto que está dentro da chave Victor
// console.log(alunos.Victor);

// // Acessando o telefone que está dentro do objeto da chave Victor
// console.log(alunos.Victor.telefone);


// let piorado = {
//     lista: ['Gabriel', 'Tiago', 'Joao'], 
//     numero: 13, 
//     string: 'Texto',
//     booleano: true,
//     objeto: {Nome: 'Gabriel', Telefone: '333-555', Cidade: 'Londrina'}
// }









let nomeHeroi = prompt('Digite o nome: ');
console.log('Você tem 20 pontos para distribuir entre Saúde, Força e MP.');

let saudeHeroi;
let forcaHeroi;
let mpHeroi;

do {
    saudeHeroi = +prompt('Digite o valor da saúde: ');
    forcaHeroi = +prompt('Digite o valor da força: ');
    mpHeroi = +prompt('Digite o valor de MP: ')
    if (saudeHeroi + forcaHeroi + mpHeroi > 20){
        console.log('Valores inválidos Você passou de 20 pontos!')
    }
} while (saudeHeroi + forcaHeroi + mpHeroi > 20)





let heroi = {
    nome: nomeHeroi,
    saude: saudeHeroi,
    forca: forcaHeroi,
    mp: mpHeroi,
    ouro: 10,

    // Uma propriedade pode ser uma função!
    // Nesse caso ela é chamada de MÉTODO!
    // Geralmente usamos métodos para acessar e modificar as propriedades do objeto.
    exibirStatus: function(){
        console.log('Status do seu personagem:');
        // Quando uso this.chave, estou me referindo à chave do próprio objeto.
        console.log(`Nome: ${this.nome}`);
        console.log(`HP: ${this.saude}`);
        console.log(`Força: ${this.forca}`);
        console.log(`MP: ${this.mp}`);

        console.log('-----------');
        console.log();
    },

    aumentarForca: function(){
        console.log('Você aumentou sua força!!');
        
        // Alterando o valor de uma propriedade do objeto
        this.forca++

        console.log('A nova força é:', this.forca);
        console.log('-----------');
        console.log();
    },

    // Um método também pode ter parâmetros!!!
    // Usei um valor padrão de 1, caso nenhum argumento seja passado.
    aumentaSaude: function(valor = 1){
        console.log('Você aumentou sua saúde!!');
        
        // Alterando o valor de uma propriedade do objeto
        // Somando com o valor passado como argumento.
        this.saude = this.saude + valor;

        console.log('A nova saúde é:', this.saude);
        console.log('-----------');
        console.log();
    }
}
console.log();

// Esse método vai exibir os valores das propriedades
heroi.exibirStatus();

// Esse método vai aumentar em 1 a força
heroi.aumentarForca();

// Esse método vai aumentar a saúde de acordo com o argumento passado.
heroi.aumentaSaude(3);

heroi.exibirStatus();










console.log();