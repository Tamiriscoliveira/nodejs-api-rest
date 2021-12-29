// => novidade do ES6

function apresentar(nome){
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

/* novidade que surgiu em 2016, ela não pode ser nomiada
sempre vem com uma const e o nome da variaval
Se tiver mais de uma linha e bom usar chave e o return
*/

//Arrow function com + de 1 linha e instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente números de 1  a 9"
    }else{
        return num1 + num2;
    }
} 
// hoisting: arrow function se comporta como expressao
// operador maior ou igual que >=
