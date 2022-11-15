let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)



isativo = 1
console.log(!!isativo)

console.log('verdadeiros: ')
console.log(!!2)//qualquer numero inteiro
console.log(!!-2)
console.log(!!' ')//qualquer string NAO VAZIA
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



console.log('falsos: ')
console.log(!!0)
console.log(!!'')//qualquer string VAZIA
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(!!('' || null || 0 || ' '))

let nome = 'Laura'
let nome_vazio = ''
let nome_3 = 'III'
console.log(nome || 'desconhecido')
console.log(nome_vazio || 'desconhecido')
console.log(nome_3.length <= 3 || 'desconhecido')