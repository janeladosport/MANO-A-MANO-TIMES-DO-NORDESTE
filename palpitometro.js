escudos = {
    'fluminense': 'imagens/escudos/fluminense.png',
    'sport': 'imagens/escudos/sport.png',
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
    ['Fortaleza X Juventude', escudos['fortaleza'], escudos['juventude'], ['fortaleza', 'juventude']],
    ['Mirassol X Corinthians', escudos['mirassol'], escudos['corinthians'], ['mirassol', 'corinthians']],
    ['Grêmio X RB Bragantino', escudos['gremio'], escudos['bragantino'], ['gremio', 'bragantino']],
    ['Vitória X Vasco', escudos['vitoria'], escudos['vasco'], ['vitoria', 'vasco']],
    ['Flamengo X Bahia', escudos['flamengo'], escudos['bahia'], ['flamengo', 'bahia']],
    ['Sport X Cruzeiro', escudos['sport'], escudos['cruzeiro'], ['sport', 'cruzeiro'], true],
    ['Palmeiras X São Paulo', escudos['palmeiras'], escudos['saopaulo'], ['palmeiras', 'saopaulo'], true],
    ['Atlético-MG X Fluminense', escudos['atletico'], escudos['fluminense'], ['atletico', 'fluminense'], true],
    ['Botafogo X Internacional', escudos['botafogo'], escudos['inter'], ['botafogo', 'inter'], true],
    ['Santos X Ceará', escudos['santos'], escudos['ceara'], ['santos', 'ceara'], true]
]

correspondencia = {
    'ceara': "Ceará",
    'vitoria': "Vitória",
    'gremio': "Grêmio",
    'atletico': "Atlético-MG",
    "saopaulo": "São Paulo",
    "bragantino": "RB Bragantino"
}

let spt = "imagens/sport/"
sport = [spt + "caique-frança.png", spt + "hereda.png", spt + "joao-silva.png", spt + "chico.png", spt + "igor-carius.png", spt + "christian-rivera.png", spt + "ze-lucas.png", spt + "lucas-lima.png", spt + "barletta.png", spt + "lenny-lobato.png", spt + "pablo.png"]
timesFut['Sport'] = sport

vitoria = srcConjunto("vitoria", ["lucas-arcanjo", "raul-caceres", "neris", "lucas-halter", "jamerson", "ricardo-ryller", "ronald", "matheusinho", "erick", "osvaldo", "janderson"])
timesFut["Vitoria"] = vitoria

let cea = "imagens/ceara/"
ceara = [cea + "fernando-miguel.png", cea + "fabiano-souza.png", cea + "marllon.png", cea + "william-machado.png", cea + "matheus-bahia.png", cea + "dieguinho.png", cea + "fernando-sobral.png", cea + "lucas-mugni.png", cea + "galeano.png", cea + "pedro-henrique.png", cea + "pedro-raul.png"]
timesFut['Ceara'] = ceara

bahia = srcConjunto("bahia", ["marcos-felipe", "gabriel-xavier", "david-duarte", "ramos-mingo", "luciano-juba", "acevedo", "jean-lucas", "cauly", "everton-ribeiro", "erick-pulga", "lucho-rodriguez"])
timesFut['Bahia'] = bahia



fortaleza = srcConjunto("fortaleza", ["joao-ricardo", "eros-mancuso", "kuscevic", "gustavo-mancha", "bruno-pacheco", "rosseto", "lucas-sasha", "martinez", "marinho", "breno-lopes", "deyverson"])
timesFut['Fortaleza'] = fortaleza

vasco = srcConjunto("vasco", ["leo-jardim", "puma-rodriguez", "joao-victor", "luiz-gustavo", "lucas-piton", "hugo-moura", "matheus-carvalho", "coutinho", "nuno-moreira", "rayan", "vegetti"])
timesFut["Vasco"] = vasco

corinthians = srcConjunto("corinthians", ["hugo-souza", "matheuzinho", "felix-torres", "caca", "angileri", "raniele", "carillo", "breno-bidon", "romero", "depay", "yuri-alberto"])
timesFut["Corinthians"] = corinthians

gremio = srcConjunto("gremio", ["tiago-volpi", "igor-serrote", "jemerson", "wagner-leonardo", "marlon", "dodi", "camilo", "cristaldo", "alysson", "cristian-oliveira", "braithwaite"])
timesFut["Gremio"] = gremio

bragantino = srcConjunto("bragantino", ["cleiton", "andres-hurtado", "pedro-henrique", "guzman", "juninho-capixaba", "gabriel", "eric-ramires", "jhon-jhon", "lucas-barbosa", "vinicinho", "sasha"])
timesFut["Bragantino"] = bragantino

function srcConjunto(time, jogadores){
    let conjunto = []
    for (i=0; i < jogadores.length; i++){
        conjunto.push(`imagens/${time}/${jogadores[i]}.png`)
    }
    console.log(conjunto)
    return conjunto 
}

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
        newInput.setAttribute("type", "number")

        let newInputD = document.createElement("input")
        newInputD.classList.add('palpites-input')
        newInputD.setAttribute("type", "number")

        let spanX = document.createElement("span")
        spanX.innerHTML = "X"

        let buttonMAM = document.createElement("button")
        buttonMAM.classList.add("palpites-button-alone")
        buttonMAM.innerHTML = "MANO A MANO"
        buttonMAM.setAttribute("onclick", "mam(this)")
        if (jogos[i][4]==true){buttonMAM.setAttribute("disabled",""); buttonMAM.style.backgroundColor =  'gray'; buttonMAM.style.cursor = "not-allowed"}
        

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
    document.getElementById("titulo").scrollIntoView({ behavior: 'smooth' })
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
        limpar()
        let titleExisted = document.getElementById("titulo")
        titleExisted.querySelector(".counter-um").innerHTML = "0"
        titleExisted.querySelector(".counter-dois").innerHTML = "0"
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