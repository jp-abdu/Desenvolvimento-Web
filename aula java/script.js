//Parte 1

// var -> possui escopo de função.

var mensagem = 'olá';
{
    var mensagem = 'adeus'
    console.log(mensagem);
}
console.log(mensagem);

// let -> leva em conta, não a função onde foi criada, mas sim o escopo de bloco de origem.

let texto = 'olá';
{
    let texto = 'adeus'
    console.log(texto);
}
console.log(texto);

//const -> uma constante, que significa que não podemos sobrescrever o seu identificador.

/*
const numero = 1;
numero = “1”;               // Este caso demonstra um erro no uso 
console.log(numero); */ 

const pessoa = {
    nome: 'Joao',
    idade: 18,
  }
  
  pessoa.sobrenome = 'Abdu';
  
  console.log(pessoa);


const num1 = 2 ;
const num2 = 2 ;
num1 + num2; // soma
num1 - num2; // subtracao
num1 * num2; // multiplicacao
num1 ** num2; // exponenciacao
num1 % num2; // modulo (resto da divisao)

//Parte 2

console.log('Parte 2:');

console.log('comecou');

let lista = [1,2,3,4];

console.log('no meio');

console.log(lista.length);

console.log(lista.toString());

console.log(lista.at(2));

console.log(lista.join(' * '));

console.log(lista.pop());

console.log(lista.push(4));

console.log(lista.shift());

console.log(lista.unshift(1));

console.log(delete lista[0]);

let lista2 = [5,6,7,8];

console.log(lista.concat(lista2));

console.log(lista2.copyWithin(2,0));

let lista3 = [[9,10],[11,12]];

console.log(lista3.flat());

console.log(lista2.splice(2, 0, 'a', 'b'));

console.log(lista);
console.log(lista2);
console.log(lista3);

console.log('terminou');

