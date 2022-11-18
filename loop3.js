const funcs = []

for (let i = 0; i<10;i++)
{
    funcs.push(function()
    {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//nesse caso ele printou 10 pois o let tem escopo local
//entao é respeitado o valor do i printado
//no console.log

//no outro caso o valor sempre será 10 pois
//o valor de i, como var, será o mesmo pra todas
//as funçoes, pois a variavel é global, entao seu valor
//será global ou seja, o ultimo valor de i
//apenas é lembrado pelo var
//o let tem 'memoria' do i pois seu escopo é local

