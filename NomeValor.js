//par nome/valor

const saudacao = 'opa' //contexto léxico 1
//contexto é o local na qual a sua variavel fooi
//definida fisicamente no código
//léxico é a palavra
//neste caso, o local fisico onde a variavel foi 
//definida foi nesse arquivo, nomeevalor
//poderia ter sido no browser, por exemplo
//uma funçao define um contexto, o contexto
//local daquela funçao


function exec()
{
    const saudacao = 'alooo' //contexto léxico 2
    return saudacao
}
//note q o nome da constante é o mesmo nos 2 casos,
//mas por estarem em contextos diferentes nao gera 
//conflito



//objetos sao grupos alinhados de pares nome/valor

const cliente =
 {
    nome:'william',
    pedro:60,
    idade:19,
    enredeco: 
    {
        //aqui dentro eu poderia ter os mesmos nomes
        //como por exemplo 'nome'
        //nao conflitaria pois estao em contextos diferentes
        logradouro: 'sebastiao dias',
        numero: 123,
        nome: 'test'
    }

 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)

