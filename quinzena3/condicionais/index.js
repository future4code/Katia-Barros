//Interpretação código -Exercicio 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")//a partir do numero que o usuario digitar o sistema dirá se é par ou ímpar.
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")//se o numero tiver resto 0 ele é par
} else {
  console.log("Não passou no teste.")//caso não, ele é ímpar
}

//Interpretação código -Exercicio 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {//a condição switch serve para analise de um valor que executa instruções associado ao case
  case "Laranja":
    preco = 3.5
    break;//serve para sair de uma condição
  case "Maçã": //assim que sai o programa lê a prox instruçãao
    preco = 2.25 //caso a pfruta escolhida for maçã, será impresso na tela - nome e valor
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.//caso o break seja retirado, o programa irá rodar o case seguinte independente do critério. 
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


//Interpretação código -Exercicio 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)