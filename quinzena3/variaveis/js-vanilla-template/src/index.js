a = 10 //variavel - number
b = 10 //variavel - number

console.log(b) //gera uma mensagem no console.prompt - solicita ao usuario que insira uma informação

b = 5
console.log(a, b) //imprimi um valor porem ao inves de ser 10 será atribuido o valor 5 

a = 10 //variavel - number
b = 20 //variavel - number
c = a //valor de c será a
b = c //valor de b será c
a = b //valor de a será b

console.log(a, b, c) //solicita ao usuario que insira uma informação

let primeiroNome = "Nome:"
let idade = "Idade:"

console.log(primeiroNome)
console.log(idade)

console.log(typeof primeiroNome) 
console.log(typeof idade) ////o retorno será uma string

//Prompt

primeiroNome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log("Olá", primeiroNome, "você tem", idade, "anos")

let celular = prompt("Qual o numero do seu celular?")
console.log(celular)

let cidade = prompt("Qual o nome da sua cidade?")
console.log(cidade)

let olhos = prompt("Qual a cor dos seus olhos?")
console.log(olhos)

let livro = prompt("Qual seu filme favorito?")
console.log(livro)

let pessoas = prompt("Quantas pessoas moram com você?")
console.log(pessoas)

//Comida Favorita

let comidas = ["Pão de queijo", "Sanduíche", "Coxinha", "Pastel", "Pizza"]

console.log(comidas)

console.log("Essas são minhas comidas favoritas:")

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidaFavorita = prompt("Qual a sua comida favorita?")
comidas[1] = comidaFavorita

console.log(comidas) //verificar

//Três perguntas

let perguntas = ["Você esta usando uma roupa azul hoje?"]
let perguntas = ["Você tem gatos?"]
let perguntas = ["Você mora em um apartamento?"]
let respostas = [false, true, true]

console.log(perguntas[0], repostas[0])
console.log(perguntas[1], repostas[1])
console.log(perguntas[2], repostas[2])
































