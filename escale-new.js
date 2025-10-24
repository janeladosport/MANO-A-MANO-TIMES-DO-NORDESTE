let ids = {
    0: "gol", 1: "ld", 2: "zd", 3: "ze", 4: "le", 5: "vol", 6: "mc", 7: "mei", 8: "pd", 9: "pe", 10: "ca"
}

var dados = {
    Sport: [golSport, ldSport, zagSport, leSport, volSport, meiSport, ponSport, caSport],
    Bahia: [golBahia, ldBahia, zagBahia, leBahia, volBahia, meiBahia, ponBahia, caBahia],
    Fortaleza: [golFortaleza, ldFortaleza, zagFortaleza, leFortaleza, volFortaleza, meiFortaleza, ponFortaleza, caFortaleza],
    Vitoria:[golVitoria, ldVitoria, zdVitoria, zeVitoria, leVitoria, volVitoria, mcVitoria, meiVitoria, pdVitoria, peVitoria, caVitoria],
    Ceara: [golCeara, ldCeara,zagCeara, leCeara, volCeara, meiCeara, ponCeara, caCeara],
    Saopaulo: [golSp, latSp, zagSp, volSp, meiSp, ponSp, caSp],
    Mirassol: [golMir, latMir, zagMir, avolMir, meiMir, ponMir, caMir],
    Bragantino: allConjunto("RBB"),
    Vasco: allConjunto("VAS"),
    Gremio: allConjunto("GRE"),
    Cruzeiro: allConjunto("CRU"),
     Palmeiras: allConjunto("PAL"),
    Inter: allConjunto("INT"),
    Atletico: allConjunto("CAM")
};

let esquemas = {
    0: '4-3-3',
    1: '4-4-2',
    2: '4-4-2-losango',
    3: '3-4-3',
    4: '3-5-2',
    5: '3-6-1'
}

let esqGrid = {
    "4-3-3": [['2/4', 7], [4, 5], [3,6], [2,6], [1,5], ['2/4', '6/4'], ['2/4', '5/3'], ['2/4', '4/2'], [1, 2], [4,2], ['2/4', 1]],
    "4-4-2": [['2/4', 7], [4, 5], [3,6], [2,6], [1,5], ['2/4', '4'], ['2/4', '4/2'], ['2', 1], [1, 2], [4,2], ['3', 1]],
    "4-4-2-losango": [['2/4', 7], [4, 5], [3,6], [2,6], [1,5], ['2/4', '4'], ['2/4', '4/2'], ['2', 1], ['1/3', '2/5'], ['3/5', '2/5'], ['3', 1]],
    "3-4-3": [['2/4', 7], ['1/3', 6], ['2/4',6], ['3/5',6], [1,5], [4,5], ['2/4', '4'], ['2/4', '2/4'], [1, 2], [4,2], ['2/4', 1]],
    "3-5-2": [['2/4', 7], ['1/3', 6], ['2/4',6], ['3/5',6], [1,5], [4,5], ['2', '4'], ['2/4', '2/4'], [3, 4], [2,1], ['3', 1]],
    "3-6-1": [['2/4', 7], [4, 5], ['1/3',6], ['2/4',6], [1,5], ['2/4', '4'], ['2/4', '4/2'], ['2/4', 1], ['1/3', '2/5'], ['3/5', '2/5'], ['3/5', 6]],
}

let draggedSource

function selectTeam(elemento){
    let team = elemento.value
    createCampo() // cria o campo de futebol e coloca as miniaturas
    putElenco(team) // coloca o elenco do time selecionado
}

function createCampo(){
    let campo = document.querySelector("div#campo")
    let esquema = campo.getAttribute("datainfo")
    let players = document.querySelectorAll(".player")
    for (i=0; i < players.length; i++){
        players[i].remove()
    }
    for (i=0; i < 11; i++){
        let img = criarE("img", ids[i], "player", false, "changeSource(this)")
        img.style.gridColumn = esqGrid[esquema][i][0]
        img.style.gridRow = esqGrid[esquema][i][1]
        campo.appendChild(img)
    }
}

function removeDraggedClass(){
    document.body.querySelector(".dragged").classList.remove("dragged")
    draggedSource = undefined
}

// function verificarReplica(source){
//     let conjunto = []
//     let players = document.body.querySelectorAll(".player")
//     for (i=0; i < players.length; i++){
//         conjunto.push(players[i].src)
//     } 
//     console.log(conjunto)
//     console.log(source)
//     if (conjunto.includes(source)){
//         return false
//     }
// }

function subs(newsource){
    const novaURL = window.location.href.replace(/[^/]+$/, `${newsource}.html`)
    return novaURL
}
function href(source){window.open(source, "_self")}

function verificarReplica(source){
    let players = document.body.querySelectorAll(".player")
    for (i=0; i < players.length; i++){
        if (source == players[i].src){
            let id = players[i].id
            let classe = players[i].classList[0]
            let onclick = players[i].getAttribute("onclick")
            players[i].removeAttribute("src")
            let newPlayer = criarE("img", id, classe, false, onclick)
            let parent = players[i].parentElement
            players[i].remove()
            
            let campo = document.querySelector("div#campo")
            let esquema = campo.getAttribute("datainfo")
            let number
            for (i=0; i < Object.keys(ids).length; i++){
                if (ids[i] == id){
                    number = i
                    
            }}            
            newPlayer.style.gridColumn = esqGrid[esquema][number][0]
            newPlayer.style.gridRow = esqGrid[esquema][number][1]
            parent.appendChild(newPlayer)
        }
    }
}

function changeSource(elemento){
    if (verificarReplica(draggedSource) == false){alert("NÃO SELECIONE JOGADORES IGUAIS"); removeDraggedClass(); return false}
    if (draggedSource != undefined){elemento.src = draggedSource}; removeDraggedClass()
}

function playerEscale(elemento){
    if(document.body.querySelector(".dragged")){removeDraggedClass()}
    elemento.classList.add("dragged")
    draggedSource = elemento.src
}

function criarE(tag, ide, classe, source, onclick){
    let newTag = document.createElement(tag)
    if (ide && ide != false){newTag.id = ide}
    if (classe && classe != false){newTag.classList.add(classe)}
    if (source && source != false){newTag.src = (source)}
    if (onclick && onclick != false){newTag.setAttribute("onclick",onclick)}
    return newTag
}

function putElenco(team,isNotBody){
    console.log(team, 'TIME EM QUESTÃO')
    if (document.body.querySelector("#elenco")){
        if (!isNotBody){
        document.body.querySelector("#elenco").remove()}
    }
    let elenco = criarE("div", "elenco")
    if (isNotBody){
        isNotBody.appendChild(elenco)
    } else{
    document.body.appendChild(elenco)}
    let teamConjunto = dados[team]
    console.log(team)
    for (i=0; i < teamConjunto.length; i++){
        let newClass = teamConjunto[i]
        for (h=0; h < newClass.length; h++){
            if (h != 0 && h != 1){
                let newImg = criarE("img", newClass[1], "jogador", newClass[h], "playerEscale(this)")
                elenco.appendChild(newImg)
            } else if (h==0){
                let newSpan = criarE("span", false, "span-class")
                newSpan.innerHTML = newClass[0]
                elenco.appendChild(newSpan)
            }
        }
    }
}
function putScreenEsquema(){
    let campo = document.getElementById("campo")
    let white = document.createElement("div")
    white.id = 'whiteScreen'
    white.style.backgroundColor = "white"
    white.style.position = "absolute"
    white.style.width = "100%"
    white.style.height = "100%"
    campo.appendChild(white)
    console.log("EXE")
    let newDiv = createElement('div', [['id', 'esqScreen']])
    campo.appendChild(newDiv)
    for (i=0; i < Object.keys(esquemas).length; i++){
        console.log("EXE", i)
        let newButton = createElement("button", [['class', 'esq-button'], ['onclick', 'changeEsq(this)'], ['innerHTML', esquemas[i]]])
        newDiv.appendChild(newButton)
    }
}

function changeEsq(element){
    let newEsquema = element.innerHTML
    document.getElementById("campo").setAttribute("datainfo", newEsquema)
    createCampo()
    document.getElementById('whiteScreen').remove()
    document.getElementById('esqScreen').remove()
}