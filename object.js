const prod1 = {}
prod1.nome = "celular"
prod1.preco = 12.000
prod1['desconto bom'] = 0.1 //evitar atributos com espaços
prod1.preco -= prod1

console.log(prod1)

const prod2 = 
{
    nome: 'camisa polo',
    preco: 29.99,
    estoque: 20,

    obj:
    {
        alo: 1,
        obj:
        {
            alo:1,
            obj:
            {
                alo:1
            }
        }

    }
    
 //objetos em js nao sao json, so parecidos, mas json é diferente
 //json significa javascript object notation
 //por isso a similaridade com json
//json é texto e objeto é um atributo, um codigo em si

}

// for(let compra = 20; compra > 0; compra--)
// {
//     prod2.estoque -= 1
//     console.log(prod2.estoque)
// }