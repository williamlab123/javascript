#include<stdio.h>  


#define NUM_ALUNOS 10

void ler_dados(float vet[], int num)
{
    int i;
    for(i=0;i<num;i++)
    {
        printf("Entre com o valor %d: ", i+1);  
        scanf("%f", &vet[i]);
    }
}

float calcula_media(float vet[], int num)
{
    float soma = 0.0;  
    int i;  
    for(i=0;i<num;i++)
        soma = soma + vet[i];
    return soma/num;
}

int busca(int n, float vet[], float elem)
{
    int i;
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] == elem)
        {
            return i;
        }
    }
    return -1;
}	

int busca_ultimo(int n, float vet[], float elem)
{
    int i, id_elem = -1;
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] == elem)
        {
        id_elem = i;
        }
    }
    return id_elem;
}	

int busca_primeiro(int n, float vet[], float elem)
{
    int i, id_elem = -1;
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] == elem)
        {
            id_elem = i;
            break;
        }
    }
    return id_elem;
}	

float maximo(int n, float vet[])
{
    int i;
    float vmax = vet[0];
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] > vmax)
        {
            vmax = vet[i];
        }
    }
    return vmax;
}	

float minimo(int n, float vet[])
{
    int i;
    float vmin = vet[0];
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] < vmin)
        {
            vmin = vet[i];
        }
    }
    return vmin;
}	

int repetido(int n, float vet[], float valor){
    int i, rep = 0;
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] == valor)
        {
            rep++;
        }
    }
    return rep;
}

void ordem_crescente_sem_repeticao(float vet[], int num)
{
    float vet2[num];

    for(int i=0; i<num; i++){
        int indice=0;
        for(int j=0;j<num;j++){
            if(vet[j]<vet[i]){
                indice++;
            }            
        }
        vet2[indice]=vet[i];
    }
    printf("\nOrdem crescente: ");
    for(int i=0;i<num;i++){
        printf("%.2f ",vet2[i]);
    }
}

void ordem_crescente_com_repeticao(float vet[], int num)
{
    float vet2[num];
    for(int k=0; k<num; k++){
        vet2[k] = -1.0;
    }

    for(int i=0; i<num; i++){
        int indice=0;
        for(int j=0;j<num;j++){
            if(vet[j]<vet[i]){
                indice++;
            }            
        }
        vet2[indice]=vet[i];
    }
    printf("\nOrdem crescente: ");
    for(int i=0;i<num;i++){
        if(vet2[i] != -1.0){
            printf("%.2f ",vet2[i]);
        }
    }
}

int main (void)
{
    float notas[NUM_ALUNOS];
    ler_dados(notas, NUM_ALUNOS);
    printf("Maior nota = %.2f.\n",maximo(NUM_ALUNOS,notas));
    printf("Menor nota = %.2f.\n",minimo(NUM_ALUNOS,notas));
    printf("Media = %.2f.\n", calcula_media(notas, NUM_ALUNOS)); 
    

    
    for(int i=0; i < NUM_ALUNOS; i++){
        int r = repetido(NUM_ALUNOS,notas,notas[i]);
        
        if( r == 1){
            printf("O valor %.2f não teve repetição\n", notas[i]);
        } else if(r>1){
            printf("O valor %.2f teve %d repetições.\n", notas[i], r);
        }
    } 

    //ordem_crescente_sem_repeticao(notas,NUM_ALUNOS);

    ordem_crescente_com_repeticao(notas,NUM_ALUNOS);

    return 0;
}
