console.log('a =',a)

var a = 2

console.log('a =',a)

//hoisting é o 'levantamento', traduzido do ingles, da variavel
//em varias outras linguagens, essas 3 linhas nao rodariam, pq?
//pq na linha 1 o console.log está printando uma variavel a, que até entao
//nao foi declarada. Mas esse erro nao acontece no js, usando var
//o var sofre 'hoisting' ou seja, seu valor é interpretado pelo compilador
//como se ele estivesse sido declarado na primeira linha.


console.log('//////////////////////////')

function teste()
{
    console.log('a =',b)

  var b = 2

console.log('a =',b)
}

teste()

//mesmo dentro da funçao esse fenomeno ocorre.
//mesmo com esse tipo de estratégia, nao faz sentido usa-la
//sempre que voce quiser usar uma variavel, declare-a na mesma linha ou 
//anteriormente, para evitar confusao ou até mesmo bugs em atribuiçao, etc



//essas linhas darao erro pois o efeito de içamento('hoisting') so ocorro no var
// console.log(c)
// let c = 3
