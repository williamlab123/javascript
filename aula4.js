//Criar a lista de 10 carros
let cars = [
    {
        name: 'Fusca',
        brand: 'Volkswagen',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'AMG',
        brand: 'Mercedes',
        year: 1983,
        color: 'red',
        isSubscribed: true,

    },
    {
        name: 'A3',
        brand: 'BMW',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'KA',
        brand: 'Ford',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'Uno',
        brand: 'Fiat',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'Lancer',
        brand: 'Mitsubishi',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'f100',
        brand: 'Ford',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'Onix',
        brand: 'Chevrolet',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        name: 'Giulla',
        brand: 'Alfa romeu',
        year: 1983,
        color: 'red',
        isSubscribed: false,
    },
    {
        name: 'Giulla',
        brand: 'Alfa romeu',
        year: 1983,
        color: 'red',
        isSubscribed: false,
    }]

      
    //Verifica se o carro é igual - Função do JS
    const isObjectEqual = (objA, objB) => 
    {
        return JSON.stringify(objA) === JSON.stringify(objB);
    };
    carDelete = isObjectEqual(cars[0], cars[3]) ? 'Carro repetido' : 'Carro diferente';
    console.log("Carro repetido", carDelete);

    console.log("Carro a ser deletado",cars.splice(3,1)); // corta o carro da posição 3 em diante, apenas uma posição
    console.log(cars); // Mostra a lista de carro sem o carro repetido


    let position = 8;
    let cantRent = cars[position].isSubscribed;

    if (cantRent === true) 
    {
        // Mostra que o carro não pode alugar
        console.log("O carro", cars[position], "pode alugar");
    }
    else
    {
        //Mostra que o carro pode ser alugado
        console.log("O carro", cars[position], "Não Pode Alugar");
    }