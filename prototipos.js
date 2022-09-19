//busca determinada palavra em uma frase
let fraseEncontrar = "eu vou pra aula segunda";
Boolean: frase = fraseEncontrar.includes("segunda");


if(frase == true)
{
    console.log("frase encontrada")
}

else
{
console.log("frase nao encontrada")
}

//Converte minúscula em maiúscula
let nomeMaiusculo = "Rincon";
console.log(nomeMaiusculo.toUpperCase());

//Converte maiúscula em minúscula
let nomeMinusculo = "Uilderdsson";
console.log(nomeMinusculo.toLowerCase());

//contagem de quantos caracteres tem uma palavra
let palavra = "saudade";
console.log(palavra.length);

//Array criando com construtor
console.log(['r', 's', 't', 'u'].length);
console.log(['r', {type:"array"},function(){return "r"},].length);
let listaDeAlunos = ["Vadenildes", "Hilderlandes","Joséfa", "Claudete"];
console.log(listaDeAlunos);

let listaDeAlunosConst = new Array ('Azequiével', 'Wandernilsom', 'Carimbo', 'Gerosaldo');
console.log(listaDeAlunosConst);

//// Separa um texto que contem espaços
let phrase = "o-william-vai-para-a-faculdade-amanha";
 phrase = phrase.split("-");
console.log(phrase);
console.log(phrase[1]);
