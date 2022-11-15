//funçao é o coraçao de js
//uma funçao é como se fosse um verbo
//ela executa uma açao baseada na sentença de codigo
//a funçao, assim como uma receita de bolo
//recebe todo o passo a passo a passo
//e no final voce retorna um resultado
//a funçao é um bloco de codigo que voce de uum nome pra ele
//pode ser usado varias vezes pelo codigo


console.log(typeof Object)//



class Produto{}
console.log(typeof Produto)//toda classe em js é uma funçao
//em js vc pode ter uma funçao dentro de outra
//atribuir uma funçao a uma variavel
//pode passar uma funçao como parametro


//funçao sem retorno

function imprimirSoma(a,b)
{
    
  
   console.log(a + b)
}

imprimirSoma(10,2)
imprimirSoma(2)//voce pode passar apenas um valor 
//se vc passar um valor em uma funçao que pede 2
//o 2 valor será undefined
//e o resultado sera NaN


function soma(a, b=1)//voce pode atribuir um valor pra variavel
//antes de chama-la na funçao, voce inicia a variavel
{
  return a + b
}

console.log(soma(2,3))
console.log(soma(2))//essa linha nao da NaN pois b ja foi
//iniciado como 1
console.log(soma())


//armazenando uma funçao em variavel

const imprimirSub = function(a,b)
{
   console.log(a - b)
}

imprimirSub(10,3)

//armazenando uma fumçao arrow em uma variavel

const sub = (a,b) =>
{
   return a - b
}

console.log(sub(10,20))

//retorno implicito

const divisao = (a,b) => a*b //essa funçao nao precisa do return
//pois ela ja declaramos o que ela fara, no caso a*b


console.log(divisao(2,6))

//essas 3 funçoes sao a mesma coisa, a unica diferença entre elas é o jeito
//de escrever. Uma arrow funcion nada mais é doq uma funçao que
//nao está explicito ou seja, nao esta escrito function



const imprimir2 = a => console.log(a)
imprimir2("funçao com 1 valor")
//no caso dessa funçao, nao precisa nem dos parenteses
//pois o valor é um so, simplificando ainda mais
