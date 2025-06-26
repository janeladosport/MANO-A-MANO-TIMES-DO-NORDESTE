function verifyAndExcluse(){
    console.log("EXECUTANDO ...")
    let jogadorSelectable = document.querySelectorAll(".jogador-selectable")
    let srcConjunto = new Set()
    for (i=0; i < jogadorSelectable.length; i++){
        if (srcConjunto.has(jogadorSelectable[i].src)){
            console.log("TEM DOBRO...", jogadorSelectable[i].src)
            jogadorSelectable[i].remove()
        } else {
            srcConjunto.add(jogadorSelectable[i].src)
            console.log("NÃO TEM...", srcConjunto)
        }
    }
}

function count(){
    if (!document.querySelector('.counter-um')){console.log("não tem");return}
    let itemsResult = document.querySelectorAll(".item-resultado")
    let counterUm = 0
    let counterDois = 0
    for (i=0; i < itemsResult.length; i++){ 
        if (itemsResult[i].classList.contains('time-um')){
            counterUm = counterUm + 1
        } else if (itemsResult[i].classList.contains('time-dois')){
            counterDois = counterDois + 1
        }
    }
    console.log("COUNTER DOIS É", counterUm, counterDois)
    document.querySelector('.counter-um').innerHTML = counterUm
    document.querySelector('.counter-dois').innerHTML = counterDois

}

janelaInners = {0: "MANTÉM", 1: "PODE FICAR", 2: "EMPRESTA", 3: "VAZA DESGRAÇA"}
janelaClass = {"MANTÉM": ["imagens/check.png", "rgb(0, 190, 32)"], "PODE FICAR": ["imagens/soso.png", "rgb(218, 214, 15)"], "EMPRESTA": ["imagens/emprestimo.png", "rgb(226, 90, 0)"], "VAZA DESGRAÇA": ["imagens/bad.png", "rgb(175, 15, 15)"]}

function removeSelecting(){
    let selecting = document.querySelector(".selecting")
    let selectingParent = selecting.parentElement
    let divParent = selectingParent.parentElement
    let avoltars = selectingParent.querySelectorAll("a")
    for (i=0; i < selectingParent.length; i++){avoltars[i].remove()}
    divParent.insertBefore(selecting, selectingParent)
    selectingParent.remove()
    selecting.classList.remove("selecting")
}

function janelaSelect(elemento){
    let selecting = document.querySelector(".selecting")
    if (selecting){
        removeSelecting()
    } else if (elemento.classList.contains("selected")){
        let parent = elemento.parentElement
        parent.parentElement.insertBefore(elemento, parent)
        parent.remove()
    }
    elemento.classList.add("selecting")
    let div = document.createElement("div")
    elemento.parentElement.insertBefore(div, elemento)
    div.appendChild(elemento)
    div.style.width = "130px"
    div.style.height = "150px"
    div.style.position = "relative"
    for(i=0; i < 4; i++){
        let aVoltar = document.createElement("a")
        aVoltar.id = "button-janela"
        aVoltar.style.position = "absolute"
        aVoltar.style.top = `${i*32 + 10}px`
        if (i==0){aVoltar.style.marginTop = "10px"; aVoltar.style.top = 0}
        aVoltar.style.right = 0; aVoltar.style.bottom = 0
        elemento.style.marginTop = "-2px"
        aVoltar.innerHTML = janelaInners[i]
        if (i==3){aVoltar.style.fontSize = "9pt"}
        div.appendChild(aVoltar)
        aVoltar.setAttribute("onclick", "selecionarClass(this)")
    }
    
    div.id = "selecting-div"
}

function selecionarClass(elemento){
    let selecting = document.querySelector(".selecting")
    let selectingParent = selecting.parentElement
    let avoltars = selectingParent.querySelectorAll("a")
    console.log(avoltars)
    for (i=0; i < avoltars.length; i++){console.log(avoltars[i]); avoltars[i].remove()}
    console.log(elemento.innerHTML)
    console.log(janelaClass[elemento.innerHTML])
    selecting.style.filter = `opacity(0.65) drop-shadow(0 0 0 ${janelaClass[elemento.innerHTML][1]}`
    let img = document.createElement("img")
    img.classList.add("suspense")
    selectingParent.appendChild(img)
    selecting.classList.remove("selecting")
    selecting.classList.add("selected")
    img.src = janelaClass[elemento.innerHTML][0]
    // removeSelecting()
}

function clicar(elemento){
    const imagem = elemento.querySelector('img');
    const imagemSrc = imagem.src;
    let ultimoItem = elemento.parentElement.querySelector('.item-resultado img');
    if (!ultimoItem){
        let newImg = document.createElement("img")
        elemento.parentElement.querySelector(".item-resultado").appendChild(newImg)
        ultimoItem = newImg
    }
    ultimoItem.src = imagemSrc;
    let itemResultado = elemento.parentElement.querySelector(".item-resultado")
    if (itemResultado.classList.contains("time-um")){itemResultado.classList.remove("time-um")} else if (itemResultado.classList.contains("time-dois")){itemResultado.classList.remove("time-dois")}
    itemResultado.classList.add(elemento.classList[1])
    count()
}

function limpar(){
    const resultado = document.getElementsByClassName("item-resultado")
    console.log(resultado)

    for (let i = 0; i < resultado.length; i++){
        if (resultado[i].classList.contains("time-um")){console.log("TEM 1"); resultado[i].classList.remove("time-um")
        } if (resultado[i].classList.contains("time-dois")){console.log("TEM 2");resultado[i].classList.remove("time-dois")}
        let imgRes = resultado[i].querySelector("img")
        if (imgRes){
        resultado[i].querySelector('img').remove()
        let img = document.createElement('img')
        resultado[i].append(img)}
    }
    count()
}

function createElement(tag, properties){
    let newElement = document.createElement(tag)
    if (!properties){return newElement}
    for (j=0; j < properties.length; j++){
        let actual = properties[j]
        if (actual[0] == 'class'){newElement.classList.add(actual[1])} else if (actual[0] == 'innerHTML'){newElement.innerHTML = actual[1]} else if (actual[0] == 'src'){newElement.src = actual[1]} else{
            newElement.setAttribute(actual[0], actual[1])
        }
    }
    return newElement
}

function personStyle(element, attributes){
    let stylesheet = element.style
    for (i=0; i < Object.keys(attributes).length; i++){
        let attributeName = Object.keys(attributes)[i]
        stylesheet[attributeName] = attributes[attributeName]

    }
    return stylesheet
}

function maximizar(elemento){
    let mam = document.querySelector(".mam")
    personStyle(mam, {'position': 'fixed', 'top': 0, 'left': 0, 'width': '100vw', 'height': '100vh', 'display': 'block', "overflowY": 'auto', 'background-color': 'rgb(39, 36, 36)'})
    elemento.setAttribute("onclick", "minimizar(this)")
    elemento.src = 'imagens/minimizar.png'
}
function minimizar(elemento){
    let mam = document.querySelector(".mam")
    mam.style = undefined
    window.scrollTo({top: document.getElementById("titulo").offsetTop - 150})
    elemento.setAttribute("onclick", "maximizar(this)")
    elemento.src = "imagens/maximizar.png"
}