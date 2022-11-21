console.log(typeof console)


console.log(typeof Math)
console.log(Math.ceil(6.1))//ceil é o arredondamento de um valor pra cima
console.log(Math.floor(6.1))//math é o arredondamento de um valor pra baixo

const obj1 = {}

obj1.nome = 'bola'

//obj1['nome'] = 'bola2'//essa notaçao tb é válida, ela te da mais flexibilidade
//pq a partir de uma string voce pode acessar o atributo do objeto, ou até
//collocar objetos com espaço, mas atributos com espaço nao sao bons.
//a notaçao ponto é bem mais conveniente, entao prefira usar o .


console.log(obj1.nome)

function Obj(nome)
{
    this.nome = nome//this é usado para tornar o objeto ou funçao publica
    //nesse caso, o nome é do escopo local Obj, mas usando o this.nome = nome
    //o nome se torna publico
    this.exec = function()
    {
        console.log('exec...')
    }
}


const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

//console.log(nome)