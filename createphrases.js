function createlovephrases()
{
    let phrases = 
    (
        [{
            phrase: "Lutar pelo amor é bom, mas alcança-lo sem luta é melhor.",
            author: "William  Shakespeare.",
        },
        {
            phrase: "Se me tira a liberdade, a mim nao pertence.",
            author: "William Pedro",

        },
        {
            phrase: "Aquilo que se faz por amor está sempre além da bem e do mal.",
            author: "Niethzse",
            
        },
        {
            phrase: "Quanto mais nos elevamos, menores parecemos aos olhos daqueles que nao sabem voar.",
            author: "Niethzse",
        
        }]

    )
 
    console.log(phrases[2]);
    
    let listsize = phrases.length;
    console.log('tamanho da lista ${listsize}');

    let drawphrase = Math.floor(Math.random() * listsize - 0);
    console.log(drawphrase);
    
    console.log('A frase sorteada é ', phrases[drawphrase]);
}



createlovephrases();