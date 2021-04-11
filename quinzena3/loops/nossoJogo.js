console.log("Bem-vindo(a) ao jogo de blackjack")

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {

    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário sua carta é: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador sua carte é: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario > pontuacaoPc) {
        console.log("Quem ganhou foi o usuário!")
    } else if (pontuacaoPc > pontuacaoUsuario) {
        console.log("Quem ganhou foi o computador!")
    } else if (pontuacaoUsuario === pontuacaoPc) {
        console.log("Eita, deu empate!")
    }

} else {
    console.log("O jogo acabou")
}