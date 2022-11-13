const a = {name: 'will'} //a aponta pro mesmo endereço de memoria que o objeto 'nome'

console.log(a)

const b = a

b.name = 'laura'

console.log(a) 

//o valor de 'a' foi alterado, mesmo sem ter recebido nenhuma atribuiçao
//isso acontece pq quando b = a, ele nao recebeu um valor direto de a
//pois o a nao armazenava nada, a armazenava o endereço do objeto, apenas
//entao b = a, b recebe o endereço da memoria que a recebia
//logo se eu mudar b.nome, eu estou mudando diretamente o endereço do objeto
//se eu mudar a partir de a o b percebe a mudança
//se eu mudar a partir de b o a percebe a mudança
//pq os dois apontam pro mesmo mesmo local de memoria
//isso é uma atribuiçao por referencia
//voce passou o endereço de memoria, e a partir de referencia
//voce consegue acessar o objeto


let c = 3
let d = c

d++

console.log(c)
console.log(d)

//neste caso o valor de d é diferente do valor de c
//no ponto d = c o endereço de memoria nao foi igualado
//o valor de c foi atribuido a d ou seja, ele
//apenas pegou oq tinha no endereço de memoria da variavel c
//e passou pro endereço de memoria da variavel d
//sao endereços diferentes, por isso quando d++, c nao muda
//pois c está em outro endereço
//chama-se copia por valor, c tem seu valor, d tem seu valor e 
//eles sao independentes

///////////////////////////////////////////////////////////////////


let valor//nao inicializada
console.log(valor)
//console.log(valor2) essa linha vai dar um erro chamado
// 'is not defined', a diferença pra 'undefined' é
// undefined é uma variavel que nao foi inicializada
// is not defined é uma variavel que nao existe
//logo voce nao pode chama-la pois dará um erro no codigo


//////////////////////////////////////////////////////


valor = null//null signinifica que uma variavel n tem valor nenhum
//voce diz que ela nao aponta para nenhum lugar na mamemoria
//uma variavel 'vazia'
//a diferença pro undefined é que nesse caso voce definiu um valor pra ela
//o valor dela é vazio, diferente de undefined, onde voce nao atribui nada


//console.log(valor.toString()) essa linha dara um erro
//pois uma variavel nula nao tem valor, logo nao é possivel manipular
// 'nada', um 'valor vazio' nao pode ser manipulado


const produto = {}

console.log(produto.preco)//neste caso, nao dara erro pois
//o produto esta definido, oq nao esta definido é o preco
//entao o produto.preco é undefined


