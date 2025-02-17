let numeroSorteado = parseInt(Math.random()*100)
let numeroSorteado2 = parseInt(Math.random()*100)
console.log(`Número sorteado = ${numeroSorteado}`);

// 1. exemplo
if(numeroSorteado % 2 === 0){
console.log('O número é par');
} else{
    console.log('O número é impar');
    
}

// Exibir o próximo e o anterior número
let proximoNumero = numeroSorteado +1;
let anteriorNumero = numeroSorteado -1;
console.log(`Próximo número = ${proximoNumero}`);
console.log(`Número anterior = ${anteriorNumero}`);


numeroSorteado++;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado--;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado+=10;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado-=10;
console.log(`Novo número = ${numeroSorteado}`);

// Sortear dois números e exibir o maior
console.log(numeroSorteado, numeroSorteado2);

if(numeroSorteado > numeroSorteado2){
    console.log(`Maior número = ${numeroSorteado}`);
}else if (numeroSorteado2 > numeroSorteado){
    console.log(`Maior número = ${numeroSorteado2}`);
}else{
    console.log(`Os números são iguais`);
    
}

let valor = parseInt(Math.random()*10001)
let numeroRendimento = 0
let valorTotal = 0

if(valor < 2001){
numeroRendimento = valor * 0.05;
valorTotal = valor + numeroRendimento;
}
else if(valor < 4001){
    numeroRendimento = valor * 0.10;
    valorTotal = valor + numeroRendimento;
    }
    else if(valor < 6001){
        numeroRendimento = valor * 0.15;
        valorTotal = valor + numeroRendimento;
}
else if(valor < 8001){
    numeroRendimento = valor * 0.20;
    valorTotal = valor + numeroRendimento;
}
else {
    numeroRendimento = valor * 0.25;
    valorTotal = valor + numeroRendimento;
}

console.log(`Valor Inicial = ${valor.toFixed(2)}`);
console.log(`Valor do rendimento = ${numeroRendimento.toFixed(2)}`);
console.log(`Valor total = ${valorTotal.toFixed(2)}`);












