escudos = {
    'fluminense': 'imagens/escudos/fluminense.png',
    'sport': 'imagens/escudos/sport.svg',
    'corinthians': 'imagens/escudos/corinthians.png',
    'flamengo': 'imagens/escudos/flamengo.png',
    'são paulo': 'imagens/escudos/sao-paulo.png',
    'botafogo': 'imagens/escudos/botafogo.png',
    'bahia': 'imagens/escudos/bahia.png',
    'vitória': 'imagens/escudos/vitoria.png',
    'cruzeiro': 'imagens/escudos/cruzeiro.png',
    'atlético-mg': 'imagens/escudos/atletico.png',
    'santos': 'imagens/escudos/santos.png',
    'bragantino': 'imagens/escudos/bragantino.png',
    'ceará': 'imagens/escudos/ceara.png',
    'grêmio': 'imagens/escudos/gremio.png',
    'inter': 'imagens/escudos/inter.png',
    'juventude': 'imagens/escudos/juventude.png',
    'mirassol': 'imagens/escudos/mirassol.png',
    'palmeiras': 'imagens/escudos/palmeiras.png',
    'vasco': 'imagens/escudos/vasco.png',
    'fortaleza': 'imagens/escudos/fortaleza.png'
}
jogos = [
    ['Fluminense X Sport', escudos['fluminense'], escudos['sport']],
    ['Ceará X Vitória', escudos['ceará'], escudos['vitória']],
    ['Corinthians X Internacional', escudos['corinthians'], escudos['inter']],
    ['Bahia X Botafogo', escudos['bahia'], escudos['botafogo']],
    ['Grêmio X Santos', escudos['grêmio'], escudos['santos']],
    ['Vasco X Palmeiras', escudos['vasco'], escudos['palmeiras']],
    ['Cruzeiro X Flamengo', escudos['cruzeiro'], escudos['flamengo']],
    ['Bragantino X Mirassol', escudos['bragantino'], escudos['mirassol']],
    ['Juventude X Atlético-MG', escudos['juventude'], escudos['atlético-mg']]
]

function createGames(){
    let palpites = document.getElementById("palpites")
    for (i=0; i < jogos.length; i++){
        let newCabine = document.createElement("div")
        newCabine.classList.add("jogo-palpite")
        palpites.appendChild(newCabine)

        let span = document.createElement("span")
        span.innerHTML = jogos[i][0]
        newCabine.appendChild(span)
        span.classList.add("palpite-span")

        let escudoUm = jogos[i][1]
        let newImg = document.createElement("img")
        newImg.src = escudoUm

        let escudoDois = jogos[i][2]
        let newImgD = document.createElement("img")
        newImgD.src = escudoDois
        newImg.classList.add("palpites-img")
        newImgD.classList.add("palpites-img")

        let newInput = document.createElement("input")
        newInput.classList.add('palpites-input')

        let newInputD = document.createElement("input")
        newInputD.classList.add('palpites-input')

        let spanX = document.createElement("span")
        spanX.innerHTML = "X"

        let buttonMAM = document.createElement("button")
        buttonMAM.classList.add("palpites-button-alone")
        buttonMAM.innerHTML = "MANO A MANO"
        

        newCabine.appendChild(newImg)
        newCabine.appendChild(newInput)
        newCabine.appendChild(spanX)
        newCabine.appendChild(newInputD)
        newCabine.appendChild(newImgD)
        newCabine.appendChild(buttonMAM)

    }
    // let buttonMAM = document.createElement("button")
    // buttonMAM.classList.add("palpites-button-alone")
    // buttonMAM.innerHTML = "MANO A MANO"
    // palpites.appendChild(buttonMAM)
}

createGames()