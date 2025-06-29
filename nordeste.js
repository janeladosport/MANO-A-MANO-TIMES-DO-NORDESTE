let teams = [sport, bahia, vitoria, fortaleza, ceara]
let teamNumber = {
    0: 'sport',
    1: 'bahia',
    2: 'vitoria',
    3: 'fortaleza',
    4: 'ceara'
}
        let mam = document.getElementsByClassName("mam")[0]
        for (i=0; i < 11; i++){
            let newRow = createElement('div', [['class', 'row']])
            mam.appendChild(newRow)
            for (h=0; h < 4; h++){
                playerSpan(newRow, h, i, 'X')
            }
            playerSpan(newRow, 4, i, '=')
            let item = createElement("div", [['class', 'item-resultado']])
            let itemResult = createElement("img")
            itemResult.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            item.appendChild(itemResult)
            newRow.appendChild(item)
}

function createElement(tag, properties){
    let newElement = document.createElement(tag)
    if (!properties){return newElement}
    for (j=0; j < properties.length; j++){
        let actual = properties[j]
        if (actual[0] == 'class'){newElement.classList.add(actual[1])} else if (actual[0] == 'innerHTML'){newElement.innerHTML = actual[1]} else{
            newElement.setAttribute(actual[0], actual[1])
        }
    }
    return newElement
}

function playerSpan(newRow, h, i, inner){
    createPlayer(newRow,h,i)
    createSpan(inner, newRow)
}

function createPlayer(newRow,h,i){
    let item = createElement("div", [['class', 'item'], ['onclick', 'clicar(this), checar()'], ['class', teamNumber[h]]])
    let img = document.createElement("img")
    item.appendChild(img)
    newRow.appendChild(item)
    img.src = teams[h][i]
}

function createSpan(inner, newRow){
    let newSpan = document.createElement('span')
    newSpan.innerHTML = inner
    newRow.appendChild(newSpan)    
}

function checar(){
    let itemResults = document.getElementsByClassName("item-resultado")
    let hasNoSource
    for (n=0; n<itemResults.length; n++){
        let actual = itemResults[n].querySelector("img")
        console.log(actual.src)
        if (!actual.src || actual.src == "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="){
            hasNoSource = true
        console.log("TRUE", actual.src)
            break
        } 
    }
    if (hasNoSource != true){
        if(document.getElementsByClassName('escale')[0] == undefined){
        let newButton = createElement("button", [['id', 'voltar'], ['innerHTML', 'ESCALAÇÃO DO NORDESTE'], ['class', 'escale'], ['onclick', 'selecaoNordeste()']])
        document.body.appendChild(newButton)}
    } else{
        console.log("TRUE")
    }
}

function selecaoNordeste(){
    let campo = document.getElementsByTagName("iframe")[0]
    if (!campo){
    let iframe = createElement("iframe", [['src', 'only-camp.html']])
    iframe.onload = () => {
    putPlayersIframe(iframe)
    }
    document.body.appendChild(iframe)
    campo = iframe
    personStyle(campo, {'width': '100vw', 'height': '80vh', 'border': 0, 'margin-top': '95px'})
    
    }
    let mam = document.getElementsByClassName("mam")[0]
    let buttonNordeste = document.getElementsByClassName("escale")[0]
    if (campo.style.display == "block"){
        mam.style.display = "block"
        buttonNordeste.innerHTML = "ESCALAÇÃO DO NORDESTE"
        campo.style.display = 'none'
    } else{
    mam.style.display = 'none'
    campo.style.display = 'block'
    buttonNordeste.innerHTML = "PERSONALIZAR ESCALAÇÃO"
    putPlayersIframe(campo)
}
}

function putPlayersIframe(iframe){
    let itemResults = document.getElementsByClassName("item-resultado")
    for (i=0; i < itemResults.length; i++){
        let player = iframe.contentDocument.querySelector(`#${ids[i]}`)
        console.log(player)
        player.src = itemResults[i].querySelector("img").src
    }
}