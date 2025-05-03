escudos = {
    'fluminense': 'imagens/escudos/fluminense.png',
    'sport': 'imagens/escudos/sport.svg',
    'corinthians': 'imagens/escudos/corinthians.png',
    'flamengo': 'imagens/escudos/flamengo.png',
    'saopaulo': 'imagens/escudos/sao-paulo.png',
    'botafogo': 'imagens/escudos/botafogo.png',
    'bahia': 'imagens/escudos/bahia.png',
    'vitoria': 'imagens/escudos/vitoria.png',
    'cruzeiro': 'imagens/escudos/cruzeiro.png',
    'atletico': 'imagens/escudos/atletico.png',
    'santos': 'imagens/escudos/santos.png',
    'bragantino': 'imagens/escudos/bragantino.png',
    'ceara': 'imagens/escudos/ceara.png',
    'gremio': 'imagens/escudos/gremio.png',
    'inter': 'imagens/escudos/inter.png',
    'juventude': 'imagens/escudos/juventude.png',
    'mirassol': 'imagens/escudos/mirassol.png',
    'palmeiras': 'imagens/escudos/palmeiras.png',
    'vasco': 'imagens/escudos/vasco.png',
    'fortaleza': 'imagens/escudos/fortaleza.png'
}
jogos = [
    ['Fluminense X Sport', escudos['fluminense'], escudos['sport'], ['fluminense', 'sport']],
    ['Ceará X Vitória', escudos['ceara'], escudos['vitoria'], ['ceara', 'vitoria']],
    ['Corinthians X Internacional', escudos['corinthians'], escudos['inter'], ['corinthians', 'inter']],
    ['Bahia X Botafogo', escudos['bahia'], escudos['botafogo'], ['bahia', 'botafogo']]
]

correspondencia = {
    'ceara': "Ceará",
    'vitoria': "Vitória",
    'gremio': "Grêmio",
    'atletico': "Atlético-MG",
    "saopaulo": "São Paulo"
}

let spt = "imagens/sport/"
sport = [spt + "caique-frança.png", spt + "hereda.png", spt + "joao-silva.png", spt + "chico.png", spt + "igor-carius.png", spt + "christian-rivera.png", spt + "ze-lucas.png", spt + "lucas-lima.png", spt + "barletta.png", spt + "lenny-lobato.png", spt + "pablo.png"]
timesFut['Sport'] = sport

let vit = "imagens/vitoria/"
vitoria = [vit + "lucas-arcanjo.png", vit + "claudinho.png", vit + "lucas-halter.png", vit + "edu.png", vit + "jamerson.png", vit + "baralhas.png", vit + "ronald.png", vit + "matheusinho.png", vit + "erick.png", vit + "gustavo-mosquito.png", vit + "janderson.png"]
timesFut['Vitoria'] = vitoria

let cea = "imagens/ceara/"
ceara = [cea + "fernando-miguel.png", cea + "fabiano-souza.png", cea + "marllon.png", cea + "william-machado.png", cea + "matheus-bahia.png", cea + "dieguinho.png", cea + "fernando-sobral.png", cea + "lucas-mugni.png", cea + "galeano.png", cea + "pedro-henrique.png", cea + "pedro-raul.png"]
timesFut['Ceara'] = ceara



function createGames(){
    let palpites = document.getElementById("palpites")
    for (i=0; i < jogos.length; i++){
        let newCabine = document.createElement("div")
        newCabine.classList.add("jogo-palpite")
        newCabine.setAttribute("datainfo-um", jogos[i][3][0])
        newCabine.setAttribute("datainfo-dois", jogos[i][3][1])
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
        buttonMAM.setAttribute("onclick", "mam(this)")
        

        newCabine.appendChild(newImg)
        newCabine.appendChild(newInput)
        newCabine.appendChild(spanX)
        newCabine.appendChild(newInputD)
        newCabine.appendChild(newImgD)
        newCabine.appendChild(buttonMAM)

    }
}

createGames()

function mam(element){
    let palpites = element.parentElement
    let timeUm = palpites.getAttribute("datainfo-um")
    let timeDois = palpites.getAttribute("datainfo-dois")
    
    selecionarUm({value:timeUm}, element.parentElement, escudos[timeUm], escudos[timeDois])
    selecionarDois({value:timeDois})
}

function selecionarUm(elemento, element, escUm, escDois){
    if (document.getElementById("escolha")){
        document.getElementById("escolha").remove()
    }
time = elemento.value
time = time[0].toUpperCase() + time.substring(1)
imgFutUm = escudos[elemento.value]
nameFutUm = time
createMAM(element, escUm, escDois)
botarUm(time, false)
}
function selecionarDois(elemento){
    if (document.getElementById("escolha")){
        document.getElementById("escolha").remove()
    }
time = elemento.value
time = time[0].toUpperCase() + time.substring(1)
imgFutUm = escudos[elemento.value]
nameFutUm = time
botarDois(time, false)
}

function createMAM(element, escUm, escDois){
    if (document.getElementsByClassName("mam")[0]){
        let titleExisted = document.getElementById("titulo")
        let allImgs = titleExisted.querySelectorAll("img")
        allImgs[0].src = escUm
        allImgs[1].src = escDois
        let nsExist = document.getElementById("new-span")
        let teamOne = element.getAttribute("datainfo-um")
        if (correspondencia[teamOne]){console.log("tem corresp");teamOne = correspondencia[teamOne]}
        let teamTwo = element.getAttribute("datainfo-dois")
        if (correspondencia[teamTwo]){console.log("tem corresp");teamTwo = correspondencia[teamTwo]}
        nsExist.innerHTML = `${teamOne[0].toUpperCase() + teamOne.substring(1)} X ${teamTwo[0].toUpperCase() + teamTwo.substring(1)}`
        return
    }
    let mam = document.createElement('div')
    mam.classList.add("mam")
    document.body.appendChild(mam)
    let titulo = document.createElement("div")
        titulo.id = 'titulo'
        let counterUm = document.createElement("span")
        counterUm.classList.add("counter-um")
        counterUm.innerHTML = "0"
        let counterDois = document.createElement("span")
        counterDois.classList.add("counter-dois")
        counterDois.innerHTML = "0"
        let newSpan = document.createElement("span")
        newSpan.id = 'new-span'
        let teamOne = element.getAttribute("datainfo-um")
        if (correspondencia[teamOne]){console.log("tem corresp");teamOne = correspondencia[teamOne]}
        let teamTwo = element.getAttribute("datainfo-dois")
        if (correspondencia[teamTwo]){console.log("tem corresp");teamTwo = correspondencia[teamTwo]}
        newSpan.innerHTML = `${teamOne[0].toUpperCase() + teamOne.substring(1)} X ${teamTwo[0].toUpperCase() + teamTwo.substring(1)}`
        let escudoUm = document.createElement("img")
        escudoUm.src = escUm
        let escudoDois = document.createElement("img")
        escudoDois.src = escDois
        mam.appendChild(titulo)
        titulo.appendChild(escudoUm)
        titulo.appendChild(counterUm)
        titulo.appendChild(newSpan)
        titulo.appendChild(counterDois)
        titulo.appendChild(escudoDois)
    for (i=0; i < 11; i++){
        let row = document.createElement("div")
        row.classList.add("row")
        
        let itemUm = document.createElement("div")
        itemUm.setAttribute("class", "item time-um")
        let imgUm = document.createElement("img")
        itemUm.appendChild(imgUm)

        let spanU = document.createElement("span")
        spanU.innerHTML = "X"

        let itemDois = document.createElement("div")
        itemDois.setAttribute("class", "item time-dois")
        let imgDois = document.createElement("img")
        itemDois.appendChild(imgDois)

        let itemResultado = document.createElement("div")
        itemResultado.setAttribute("class", "item-resultado")
        let imgResultado = document.createElement("img")
        itemResultado.appendChild(imgResultado)

        let spanD = document.createElement("span")
        spanD.innerHTML = "="
        mam.appendChild(row)
        row.appendChild(itemUm)
        row.appendChild(spanU)
        row.appendChild(itemDois)
        row.appendChild(spanD)
        row.appendChild(itemResultado)
    }
}