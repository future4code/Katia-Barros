//Interpretação

const bool1 = true //operador imprime valor true, caso seja correto
const bool2 = false //operador imprime valor false, caso não seja correto
const bool3 = !bool2 //operador retorna um boleano oposto

//retorna true se todos os operadores forem true - operador "e"

let resultado = bool1 && bool2 //true - false - retorna false, para retorna true os dois precisam ser verdadeiros
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 //true - false -true - retona false
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)//!inverte a resposta (negação)- || operador "ou" - retorna false se todos os boleanos forem false
console.log("c. ", resultado)

console.log("e. ", typeof resultado) //permite ver o tipo do valor da variavel

//Escrita

