let teamOne
let teamTwo

function escudos(time){
    if (time == "saopaulo"){time = 'sao-paulo'}
    return `imagens/escudos/${time}.png`
}

jogos = [
    ['bahia', 'saopaulo'],
    ['vasco', 'bragantino'],
    ['mirassol', 'sport'],
    ['santos', 'botafogo'],
    ['juventude', 'gremio'],
    ['flamengo', 'fortaleza'],
    ['corinthians', 'vitoria'],
    ['ceara', 'atletico'],
    ['cruzeiro', 'palmeiras']
]



correspondencia = {
    'ceara': "Ceará", 'vitoria': "Vitória", 'gremio': "Grêmio", 'atletico': "Atlético-MG", "saopaulo": "São Paulo", "bragantino": "RB Bragantino", 'inter': 'Internacional'
}

juventude = srcConjunto("juventude", ["marcao", "ewerthon", "rodrigo-sam", "marcos-paulo", "alan-ruschel", "caique", "daniel-peixoto", "mandaca", "batalla", "giovany", "gilberto"])
sport = srcConjunto("sport", ["caique-frança", "hereda", "lucas-cunha", "antonio-carlos", "chico", "christian-rivera", "ze-lucas", "lucas-lima", "barletta", "igor-carius", "pablo"])
ceara = srcConjunto("ceara", ["fernando-miguel", "fabiano-souza", "marllon", "william-machado", "matheus-bahia", "dieguinho", "lourenço", "lucas-mugni", "galeano", "pedro-henrique", "pedro-raul"])
vitoria = srcConjunto("vitoria", ["lucas-arcanjo", "claudinho", "edu", "lucas-halter", "jamerson", "ricardo-ryller", "baralhas", "ronald", "wellington-rato", "osvaldo", "renato-kayzer"])
bahia = srcConjunto("bahia", ["marcos-felipe", "gilberto", "david-duarte", "ramos-mingo", "luciano-juba", "caio-alexandre", "jean-lucas", "everton-ribeiro", "cauly", "erick-pulga", "william-jose"])
botafogo = srcConjunto("botafogo", ["john", "vitinho", "jair", "david-ricardo", "alex-telles", "gregore", "marlon-freitas", "allan", "rwan-cruz", "artur", "igor-jesus"])
fortaleza = srcConjunto("fortaleza", ["joao-ricardo", "eros-mancuso", "david-luiz", "gustavo-mancha", "bruno-pacheco", "ze-welisson", "martinez", "pochettino", "pikachu", "breno-lopes", "lucero"])
vasco = srcConjunto("vasco", ["leo-jardim", "paulo-henrique", "joao-victor", "lucas-freitas", "lucas-piton", "jair", "tche-tche", "coutinho", "nuno-moreira","rayan", "vegetti"])
corinthians = srcConjunto("corinthians", ["hugo-souza", "felix-torres", "andre-ramalho", "caca", "angileri", "maycon", "raniele", "carillo", "romero", "igor-coronado", "yuri-alberto"])
gremio = srcConjunto("gremio", ["tiago-volpi", "ronald", "wagner-leonardo", "kannemann", "marlon", "dodi", "villasanti", "cristaldo", "cristian-oliveira", "aravena", "braithwaite"])
bragantino = srcConjunto("bragantino", ["cleiton", "andres-hurtado", "pedro-henrique", "eduardo", "juninho-capixaba", "gabriel", "eric-ramires", "jhon-jhon", "laquintana", "vinicinho", "sasha"])
fluminense = srcConjunto("fluminense", ["fabio", "samuel-xavier", "thiago-silva", "freytes", "fuentes", "martinelli", "hercules", "ganso", "arias", "keno", "everaldo"])
saopaulo = srcConjunto("sao paulo", ["rafael", "ferraresi", "arboleda", "alan-franco", "enzo-diaz", "pablo-maia", "bobadilla", "luciano", "cedric", "lucas-ferreira", "ryan-francisco"])
santos = srcConjunto("santos", ['gabriel-brazao', 'leo-godoy', 'joao-basso', 'ze-ivaldo', 'escobar', 'rincon', 'ze-rafael', 'neymar', 'rollheiser', 'guilherme', 'deivid-washington'])
flamengo = srcConjunto("flamengo", ['rossi', 'wesley', 'leo-ortiz', 'leo-pereira', 'alex-sandro', 'evertton-araujo', 'gerson', 'arrascaeta', 'luiz-araujo', 'cebolinha', 'bruno-henrique'])
timesFut = setTimesFut()


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
        if (jogos[i][3]=="notas"){
            buttonMAM.setAttribute("onclick", "verifyMAMNOTES(), mam(this)")
            let button = document.createElement("button")
            button.classList.add("palpites-button-alone")
            button.innerHTML = "NOTAS"
            teamOne = getFirstUppercase(newCabine.getAttribute("datainfo-um"))
            teamTwo = getFirstUppercase(newCabine.getAttribute("datainfo-dois"))
            button.setAttribute("onclick", `verifyMAMNOTES(); notes('${teamOne}', '${teamTwo}');`);            
            newCabine.appendChild(button)
        }
        
    }
}

function getFirstUppercase(text){
    let newText = String(text[0].toUpperCase() + text.substring(1))
    return `${newText}`
}

function cleanItemResultado(){
    itemResultado = document.getElementsByClassName("item-resultado")
    for (let item of itemResultado){
        let img = item.querySelector("img")
        if (img){
            img.remove()
        }
    }
}

function mam(element){
    let palpites = element.parentElement
    let timeUm = palpites.getAttribute("datainfo-um")
    let timeDois = palpites.getAttribute("datainfo-dois")
    
    selecionarUm({value:timeUm}, element.parentElement, escudos(timeUm), escudos(timeDois))
    document.getElementById("titulo").scrollIntoView({ behavior: 'smooth' })
    selecionarDois({value:timeDois})
    cleanItemResultado()
    if (document.getElementById("person-div")){
        document.getElementById("person-div").remove()
        document.getElementsByClassName("selected")[0].classList.remove("selected")
    }
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
        teamOne = element.getAttribute("datainfo-um")
        let newTeamOne
        let newTeamTwo
        if (correspondencia[teamOne]){newTeamOne = firstLetterUpercase(correspondencia[teamOne])} else{newTeamOne = teamOne}
        teamTwo = element.getAttribute("datainfo-dois")
        if (correspondencia[teamTwo]){newTeamTwo = firstLetterUpercase(correspondencia[teamTwo])} else {newTeamTwo = teamTwo}
        nsExist.innerHTML = `${newTeamOne} X ${newTeamTwo}`
        if (dados[firstLetterUpercase(teamOne)] && dados[firstLetterUpercase(teamTwo)]){
            if (document.getElementById("personalizar")){
        document.getElementById("personalizar").remove()
        console.log("REMOVIDO", teamOne, teamTwo)
    }
    console.log(dados[firstLetterUpercase(teamOne)])
    let newPerson = document.createElement("img")
    newPerson.classList.add("maximizar")
    newPerson.id = 'personalizar'
    newPerson.src = "imagens/personalizar.png"
    newPerson.setAttribute("onclick", 'personalizar(this)')
    titleExisted.appendChild(newPerson)
    } else if (document.getElementById("personalizar")){
        document.getElementById("personalizar").remove()
        console.log("REMOVIDO", teamOne, teamTwo)
    }
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
        teamOne = element.getAttribute("datainfo-um")
        teamTwo = element.getAttribute("datainfo-dois")
        let newTeamOne
        let newTeamTwo
        if (correspondencia[teamOne]){newTeamOne = firstLetterUpercase(correspondencia[teamOne])} else{newTeamOne = teamOne}
        teamTwo = element.getAttribute("datainfo-dois")
        if (correspondencia[teamTwo]){newTeamTwo = firstLetterUpercase(correspondencia[teamTwo])} else {newTeamTwo = teamTwo}
        newSpan.innerHTML = `${newTeamOne} X ${newTeamTwo}`
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
        let newMax = document.createElement("img")
    newMax.id = "maximizar"
    newMax.classList.add("maximizar")
    newMax.setAttribute("onclick",'maximizar(this)')
    newMax.src = 'imagens/maximizar.png'
    titulo.appendChild(newMax)
    if (dados[firstLetterUpercase(teamOne)] && dados[firstLetterUpercase(teamTwo)]){
    console.log(dados[firstLetterUpercase(teamOne)])
    let newPerson = document.createElement("img")
    newPerson.classList.add("maximizar")
    newPerson.id = 'personalizar'
    newPerson.src = "imagens/personalizar.png"
    newPerson.setAttribute("onclick", 'personalizar(this)')
    titulo.appendChild(newPerson)
    } else if (document.getElementById("personalizar")){
        document.getElementById("personalizar").remove()
        console.log("REMOVIDO", teamOne, teamTwo)
    }
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
        // let imgResultado = document.createElement("img")
        // itemResultado.appendChild(imgResultado)

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


    corresp = {
    'Ceara': "Ceará", 'Vitoria': "Vitória", 'Gremio': "Grêmio", 'Atletico': "Atlético-MG", "Saopaulo": "São Paulo", "Bragantino": "RB Bragantino", 'Inter': 'Internacional'
}
function verifyMAMNOTES(){
let containerall = document.getElementById("container-all")
        let mam = document.getElementsByClassName("mam")[0]
        if (containerall){containerall.remove()}
        if (mam){mam.remove()}
}
    function notes(timeUm, timeDois){
        console.log(timesFut, timeUm, timesFut[timeUm])
        teamOne = timesFut[timeUm]
        teamTwo = timesFut[timeDois]
        console.log(teamOne)
        let containerAll = document.createElement("div")
        containerAll.id = 'container-all'
        let containerTeamOne = document.createElement("div")
        containerTeamOne.id = 'team-one-container'
        let titleOne = document.createElement("div")
        let titleTwo = document.createElement("div")
        titleOne.id ='titulo'
        titleTwo.id = 'titulo'
        containerTeamOne.appendChild(titleOne)
        let spanTO = document.createElement("span")
        if (corresp[timeUm]){
        spanTO.innerHTML = corresp[timeUm]}
        else {
            spanTO.innerHTML = timeUm
        }
        spanTO.classList.add("span-team")
        let newMax = document.createElement("img")
        newMax.id = "maximizar"
        newMax.src = "imagens/maximizar.png"
        newMax.setAttribute("onclick",'maximizar(this)')
        newMax.style.left = '40%'
        titleOne.appendChild(newMax)
        titleOne.appendChild(spanTO)
        let containerTeamTwo = document.createElement("div")
        containerTeamOne.id = 'team-one-container'
        let spanTT = document.createElement("span")
        if (corresp[timeDois]){
        spanTT.innerHTML = corresp[timeDois]}
        else {
            spanTT.innerHTML = timeDois
        }
        let newMaxT = document.createElement("img")
        newMaxT.id = "maximizar"
        newMaxT.src = "imagens/maximizar.png"
        newMaxT.setAttribute("onclick",'maximizar(this)')
        titleTwo.appendChild(newMaxT)
        containerTeamTwo.appendChild(titleTwo)
        spanTT.classList.add("span-team")
        titleTwo.appendChild(spanTT)
        document.body.appendChild(containerAll)
        containerAll.appendChild(containerTeamOne)
        containerAll.appendChild(containerTeamTwo)
        constructNotes(teamOne, containerTeamOne)
        constructNotes(teamTwo, containerTeamTwo)
        document.getElementById("titulo").scrollIntoView({behavior: 'smooth'})
    }
    function constructNotes(conjunto, mother){
        for (i=0; i < conjunto.length; i++){
            let jogadorTier = document.createElement("div")
            jogadorTier.classList.add("jogador-tier")
            mother.appendChild(jogadorTier)
            let newImg = document.createElement("img")
            newImg.classList.add("img-jogador")
            newImg.src = conjunto[i]
            jogadorTier.appendChild(newImg)
            let range = document.createElement("input")
            let span = document.createElement("span")
            let spanClass = document.createElement("span")
            let newDiv = document.createElement("div")
            newDiv.setAttribute("class", "container-nota")
            newDiv.style.display = "flex"
            newDiv.style.flexWrap = "wrap"
            span.style.flexBasis = "auto"
            spanClass.style.flexBasis = "auto"
            span.style.marginTop = "15px"
            spanClass.style.marginTop = "15px"
            spanClass.setAttribute("class", "classificacao")
            range.setAttribute("type", "range")
            range.setAttribute("min", 0)
            range.setAttribute("max", 10)
            range.setAttribute("step", 0.5)
            range.style.flexBasis = "100%"
            range.style.width = "300px"
            range.style.marginBottom = "15px"
            newDiv.style.alignItems = "center"
            newDiv.style.justifyContent = "center"
            span.innerHTML = "0"
            jogadorTier.appendChild(newDiv)
            newDiv.appendChild(span)
            newDiv.appendChild(spanClass)
            newDiv.appendChild(range)
            jogadorTier.classList.add("container-family")
            jogadorTier.style.display = "flex"
            jogadorTier.style.margin = "10px"
            range.addEventListener("input", function(){
                notaSet(range, span, spanClass)
        })
        }
    }
    function notaSet(elemento, span, classificacao){
    nota = elemento.value
    span.innerHTML = nota
    if (nota <= 2.5){
        classificacao.innerHTML = "PIOR EM CAMPO"
        classificacao.setAttribute("class", "pec")
        span.setAttribute("class", "pec")
    } if (nota > 2.5 & nota <= 4){
        classificacao.innerHTML = "RUIM"
        classificacao.setAttribute ("class", "ruim")
        span.setAttribute ("class", "ruim")
    } if (nota > 4 & nota <= 5.5){
        classificacao.innerHTML = "REGULAR"
        classificacao.setAttribute("class", "regular")
        span.setAttribute("class", "regular")
    } if (nota > 5.5 & nota <= 7){
        classificacao.innerHTML = "OK"
        classificacao.setAttribute("class", "ok")
        span.setAttribute("class", "ok")
    } if (nota > 7 & nota <= 8.5){
        classificacao.innerHTML = "BOM"
        classificacao.setAttribute("class", "bom")
        span.setAttribute("class", "bom")
    } if (nota > 8.5 & nota <= 10){
        classificacao.innerHTML = "MELHOR EM CAMPO"
        classificacao.setAttribute("class", "mec")
        span.setAttribute("class", "mec")
    }
    let verificar = verificarTierListNota()
    if (verificar == true){
        ordenarButton()
    }
}

    function maximizar(elemento){
    let mam = elemento.parentElement.parentElement
    personStyle(mam, {'position': 'fixed', 'top': 0, 'left': 0, 'width': '100vw', 'height': '100vh', 'display': 'block', "overflowY": 'auto', 'background-color': 'rgb(39, 36, 36)', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'z-index': 9999})
    if (elemento.style.left == '40%'){
        elemento.style.left = '90%'
        elemento.setAttribute("metadata", "40%")
    }

    elemento.setAttribute("onclick", "minimizar(this)")
    elemento.src = 'imagens/minimizar.png'

}
function minimizar(elemento){
    let mam = elemento.parentElement.parentElement
    mam.style = undefined
    window.scrollTo({top: document.getElementById("titulo").offsetTop - 150})
    elemento.setAttribute("onclick", "maximizar(this)")
    elemento.src = "imagens/maximizar.png"
    if (elemento.getAttribute("metadata")){
        elemento.style.left = elemento.getAttribute("metadata")
    }
}

function firstLetterUpercase(string){
   return String(string)[0].toUpperCase() +  String(string).substring(1)
}

function personalizar(element){
    let isSelected=false
    if (element.classList.contains("selected")){isSelected=true}
    if (isSelected == false){
        element.classList.add("selected")
        let newDiv = document.createElement("div")
        newDiv.id = 'person-div'
        document.body.appendChild(newDiv)
        putElenco(firstLetterUpercase(teamOne), newDiv)
        putElenco(firstLetterUpercase(teamTwo), newDiv)
        setAllOnclick('item', 'changeSource(this)')
        document.getElementsByClassName("mam")[0].style.marginBottom = "50%"
    } else if (isSelected == true){
        element.classList.remove("selected")
        document.getElementById('person-div').remove()
        setAllOnclick("item", "clicar(this)")
        document.getElementsByClassName("mam")[0].style.marginBottom = "0"
    }
}

function setAllOnclick (classe,onclick){
    let conjunto = document.getElementsByClassName(classe)
    for (i=0; i < conjunto.length; i++){
        conjunto[i].setAttribute("onclick", onclick)
    }
}

function changeSource(element){
    if (document.querySelector(".dragged") == null) {return}
    element.querySelector("img").src = document.querySelector(".dragged").src
    document.querySelector(".dragged").classList.remove("dragged")
}