const funcs = []

for (var i = 0; i<10;i++)
{
    funcs.push(function()
    {
        console.log(i)
    })
   // console.log(i)
 
}

funcs[2]()
funcs[8]()

//ele printou 10 nas 2 ocasioes pois o var nao tem
//escopo local, entao nao é respeitado o valor de i
//no console.log