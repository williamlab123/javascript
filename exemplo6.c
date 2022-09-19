#include<stdio.h>  
#define NUM_ALUNOS 6

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

int maximo(int n, float vet[])
{
    int i;
    float vmax = vet[0];
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] > vmax)
        {
            vmax = v[i];
        }
    }
    return vmax;
}	

int minimo(int n, float vet[])
{
    int i;
    float vmin = vet[0];
    for(i = 0 ; i < n ; i++)
    {
        if(vet[i] < vmin)
        {
            vmin = v[i];
        }
    }
    return vmin;
}	

int main (void)
{
    float notas[NUM_ALUNOS];
    ler_dados(notas, NUM_ALUNOS);
    printf("Media = %.2f\n.", calcula_media(notas, NUM_ALUNOS));  

    return 0;
}
