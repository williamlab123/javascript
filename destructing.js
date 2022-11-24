
////////// DESTRUCTURING OBJETO //////////////
const pessoa = 
{
    nome: 'ana',
    idade: 25,
    endereco: 
    {
        logradouro: 'rua tal',
        numero: 34
    }
}

//'tirar' os elementos de um objeto, essa é a sintaxe
//oq essa linha de baixo fará é, tire apenas
//os elementos 'nome' e 'idade' do ojbeto pessoa

//console.log(nome,idade)
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade :i} = pessoa
console.log(n, i)

//neste caso, caso vc tente tirar algo
//que nao exista de dentro do objeto, ele 
//retornara um valor 'undefined'
const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)


//nesta linha de baixo ele dará erro pois
//ele está tentando acessar algo dentro de um objeto
//que nao existe, no caso conta
//conta nao existe dentro de pessoa
// const {conta: {ag, num}} = pessoa
// console.log(ag, num)




///////// DESTRUCTURING ARRAY //////////////
console.log('///////// DESTRUCTURING ARRAY //////////////')

const [a] = [10]
console.log(a)

const [n1, , n3, ,n5, n6 = 0] = [10, 6,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)


///////// DESTRUCTURING FUNCAO //////////////
console.log('///////// DESTRUCTURING FUNCAO //////////////')


function  rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log((rand({max: 50, min: 40})))  