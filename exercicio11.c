#include <stdio.h>


int negativos(int vet[], int num){
    int neg=0;

    for(int i=0;i<num;i++){
        if(vet[i]<0){
            neg++;
        }
    }

    return neg;
}

int main(){
    int n,i;
    
    printf("Infome a quantidade de valores: ");
    scanf("%d",&n);

    int v[n],a[n],b[n];

    for( i=0; i<n; i++){
        printf("Infome os valores: ");
        scanf("%d",&v[i]);
    }

    int nulo=0, pos=0, neg=0;
    for( i=0; i<n; i++){

        if(v[i]>0){
            a[pos] = v[i];
            pos++;
        } else if(v[i]<0){
            b[neg] = v[i];
            neg++;
        } else {
            nulo++;
        }
    }

    printf("Foram inseridos %d valores negativos, %d valores positivos e %d valores iguais a 0."
    ,neg,pos,nulo);
    
    //printf("O total de numeros negativos foi de %d.",negativos(v,n));

    return 0;
}




