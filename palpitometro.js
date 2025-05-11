function escudos(time){
    if (time == "saopaulo"){time = 'sao-paulo'}
    return `imagens/escudos/${time}.png`
}

jogos = [
    ['sport', 'cruzeiro'],
    ['palmeiras', 'saopaulo'],
    ['atletico', 'fluminense'],
    ['botafogo', 'inter'],
    ['fortaleza', 'juventude', [5,0]],
    ['mirassol', 'corinthians', [2,1]],
    ['gremio', 'bragantino', [1,1]],
    ['vitoria', 'vasco', [2,1]],
    ['flamengo', 'bahia',[1,0]],
    ['santos', 'ceara', true]
]

correspondencia = {
    'ceara': "Ceará", 'vitoria': "Vitória", 'gremio': "Grêmio", 'atletico': "Atlético-MG", "saopaulo": "São Paulo", "bragantino": "RB Bragantino", 'inter': 'Internacional'
}

sport = srcConjunto("sport", ["caique-frança", "hereda", "joao-silva", "chico", "igor-carius", "christian-rivera", "ze-lucas", "sergio-oliveira", "chino-atencio", "barletta", "pablo"])
timesFut['Sport'] = sport

vitoria = srcConjunto("vitoria", ["lucas-arcanjo", "raul-caceres", "neris", "lucas-halter", "jamerson", "ricardo-ryller", "ronald", "matheusinho", "erick", "osvaldo", "janderson"])
timesFut["Vitoria"] = vitoria

let cea = "imagens/ceara/"
ceara = [cea + "fernando-miguel.png", cea + "fabiano-souza.png", cea + "marllon.png", cea + "william-machado.png", cea + "matheus-bahia.png", cea + "dieguinho.png", cea + "fernando-sobral.png", cea + "lucas-mugni.png", cea + "galeano.png", cea + "pedro-henrique.png", cea + "pedro-raul.png"]
timesFut['Ceara'] = ceara

bahia = srcConjunto("bahia", ["marcos-felipe", "gabriel-xavier", "david-duarte", "ramos-mingo", "luciano-juba", "acevedo", "jean-lucas", "cauly", "everton-ribeiro", "erick-pulga", "lucho-rodriguez"])
timesFut['Bahia'] = bahia

botafogo = srcConjunto("botafogo", ["john", "vitinho", "jair", "david-ricardo", "alex-telles", "gregore", "marlon-freitas", "rwan-cruz", "jeffinho", "cuiabano", "igor-jesus"])
timesFut['Botafogo'] = botafogo

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

fluminense = srcConjunto("fluminense", ["fabio", "samuel-xavier", "ignacio", "freytes", "fuentes", "martinelli", "nonato", "ganso", "arias", "canobbio", "everaldo"])
timesFut["Fluminense"] = fluminense


function srcConjunto(time, jogadores){
    let conjunto = []
    for (i=0; i < jogadores.length; i++){conjunto.push(`imagens/${time}/${jogadores[i]}.png`)}
    return conjunto 
}

function createGames(){
    let palpites = document.getElementById("palpites")
    
    for (i=0; i < jogos.length; i++){
        let newCabine = document.createElement("div")
        newCabine.classList.add("jogo-palpite")
        newCabine.setAttribute("datainfo-um", jogos[i][0])
        newCabine.setAttribute("datainfo-dois", jogos[i][1])
        palpites.appendChild(newCabine)

        let span = document.createElement("span")
        let sTu; let sTd; let inputone; let inputtwo
        
        if (correspondencia[jogos[i][0]]){sTu = correspondencia[jogos[i][0]]} else {sTu = jogos[i][0][0].toUpperCase() + jogos[i][0].substring(1)}
        if (correspondencia[jogos[i][1]]){sTd = correspondencia[jogos[i][1]]} else {sTd = jogos[i][1][0].toUpperCase() + jogos[i][1].substring(1)}
        span.innerHTML = `${sTu} X ${sTd}`
        newCabine.appendChild(span)
        span.classList.add("palpite-span")

        let escudoUm = escudos(jogos[i][0])
        let newImg = document.createElement("img")
        newImg.src = escudoUm

        let escudoDois = escudos(jogos[i][1])
        let newImgD = document.createElement("img")
        newImgD.src = escudoDois
        newImg.classList.add("palpites-img")
        newImgD.classList.add("palpites-img")

        let newInput = document.createElement("input")
        newInput.classList.add('palpites-input')
        newInput.setAttribute("type", "number")
        inputone = newInput

        let newInputD = document.createElement("input")
        newInputD.classList.add('palpites-input')
        newInputD.setAttribute("type", "number")
        inputtwo = newInputD

        let spanX = document.createElement("span")
        spanX.innerHTML = "X"

        let buttonMAM = document.createElement("button")
        buttonMAM.classList.add("palpites-button-alone")
        buttonMAM.innerHTML = "MANO A MANO"
        buttonMAM.setAttribute("onclick", "mam(this)")
        if (jogos[i][2]==true){buttonMAM.setAttribute("disabled",""); buttonMAM.style.backgroundColor =  'gray'; buttonMAM.style.cursor = "not-allowed"} else if (jogos[i][2]){
            inputone = document.createElement('span')
            inputone.innerHTML = jogos[i][2][0]
            inputtwo = document.createElement('span')
            inputtwo.innerHTML = jogos[i][2][1]
            inputone.classList.add("result-span"); inputtwo.classList.add("result-span")
        }
        

        newCabine.appendChild(newImg)
        newCabine.appendChild(inputone)
        newCabine.appendChild(spanX)
        newCabine.appendChild(inputtwo)
        newCabine.appendChild(newImgD)
        newCabine.appendChild(buttonMAM)

    }
}

createGames()

function mam(element){
    let palpites = element.parentElement
    let timeUm = palpites.getAttribute("datainfo-um")
    let timeDois = palpites.getAttribute("datainfo-dois")
    
    selecionarUm({value:timeUm}, element.parentElement, escudos(timeUm), escudos(timeDois))
    document.getElementById("titulo").scrollIntoView({ behavior: 'smooth' })
    selecionarDois({value:timeDois})
    
}

function selecionarUm(elemento, element, escUm, escDois){
    if (document.getElementById("escolha")){
        document.getElementById("escolha").remove()
    }
time = elemento.value
time = time[0].toUpperCase() + time.substring(1)
imgFutUm = escudos(elemento.value)
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
imgFutUm = escudos(elemento.value)
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