/*Expressões e operadores
    -Expressions
    -Operators
        Binary
        Unary
        Ternary
/
//Expresssões são bem tranquilass, porque expressões são qualquer linha de código que resolve alguma coisa no
 JavaScript, um exemplo é a expressão:
let number = 1;

//UNÁRIO
let numberA = 1;
console.log(++numberA);

//BINÁRIO
let numberB = 1;
console.log(numberB + 1);

let numberC = 1;
console.log(true ? 'alo' : 'nada');

//Expression NEW; A determinante New identifica que o conteúdo da variável é um novo objeto
//let nameStudent = new String ('Thiago');
//let ageStudent = new Number (25);
//console.log(nameStudent, ageStudent);

//---------------------------------------
//let nameStudent = new String ('Thiago');
//nameStudent.surName = "Garcia";
//let ageStudent = new Number (25);
//console.log(nameStudent.surName, ageStudent);

/
    Operadores unários
    typeof
    deleter
 */

    const Students = {
        nameStudent: 'Thiago',
        age: 25,
    }
    delete Students.age; // Se o identificar age existir ele será deletado
    console.log(Students);
