#include <stdio.h>

#define MAX_ALUNOS 50

int main()
{
    float notas[MAX_ALUNOS][4];
    float media = 0;
    int n = 0, sair = 0;

    for(n=0;sair !=1 && n < MAX_ALUNOS; n++)
    {
        
        printf("digite a nota da prova1 do aluno %i\n", n++);
         scanf("%f", &notas[n][0]);

        printf("digite a nota da prova1 do aluno %i\n", n++);
         scanf("%f", &notas[n][1]);

        printf("digite a nota da prova1 do aluno %i\n", n++);
         scanf("%f", &notas[n][2]);

        printf("Digite 0 para inserir uma nova nota e 1 para parar o programa");
         scanf("%i", &sair);
    }


    for(int i = 0; i<n; i++)
    {
        media = media + notas[i][3];
    }

    media = media/n;
    printf("A media da disciplina foi de %.2f.\n", media);

    printf("A media de cada foi de:\n");
    for(int i = 0; i<n; i++)
    {
        printf("Aluno %d \t Media: %.2f.\n", i+1, notas[i][3]);
    }















    







    return 0;
}