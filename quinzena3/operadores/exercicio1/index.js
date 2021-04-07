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

let array //Declara uma variável localmente no escopo do bloco atual
console.log('a. ', array)

array = null // representa um valor vazio
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0 //indica o inicio do indice
console.log('d. ', array[i])

array[i+1] = 19 
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/


//Escrita

//1. a, b
const idade = Number(prompt("Qual a sua idade?"))
const idadeDaAmiga = Number(prompt("Qual a idade da sua melhor amiga?"))
console.log(idade)
console.log(idadeDaAmiga)

const suaIdade = 36
const idadeAmiga = 25

//1. c,d
const diferenca = Number(prompt("Sua idade é maior do que a da sua melhor amiga?"))
console.log("Maior", suaIdade > idadeAmiga)*/

//2.
const par = Number(prompt("Insira um numero par"))
console.log("Numero: ", par) //numero 12
const resultado = 12/2 //resultado 6
console.log("Divisão: ", resultado)

const resultadoResto = 6%2 //resto 0
console.log("Resto: ", resultadoResto)

let listaDeTarefas = ["", "", ""]
console.log("Essas são minhas três tarefas do dia: ")

console.log(listaDeTarefas[0]) //Lavar roupas
console.log(listaDeTarefas[1]) //Limpar casa
console.log(listaDeTarefas[2]) //Lavar os pratos

const pTarefa = prompt("Qual sua primeira tarefa do dia?")
console.log("Primeira tarefa: ", pTarefa)

const sTarefa = prompt("Qual sua segunda tarefa do dia?")
console.log("Segunda tarefa: ", sTarefa)

const tTarefa = prompt("Qual sua terceira tarefa do dia?")
console.log("Terceira tarefa: ", tTarefa)

const rTarefa = prompt("Qual tarefa você já realizou?")
console.log("tarefa realizada: ", rTarefa)

arrayDeLista.splice(1)
console.log(arrayDeLista)


let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu e-mail?")

console.log("O e-email", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vindo(a)", nomeDoUsuario)


