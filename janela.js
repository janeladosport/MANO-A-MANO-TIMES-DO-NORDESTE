timesNE = {
    'Bahia': {
        'link': 'imagens/escudos/bahia.png'
    },
    'Fortaleza': {
        'link': 'imagens/escudos/fortaleza.png'
    },
    'Sport': {
        'link': 'imagens/escudos/sport.png'
    },
    'Ceara': {
        'link': 'imagens/escudos/ceara.png'
    },
    'Vitoria': {
        'link': 'imagens/escudos/vitoria.png'
    },
    'Nautico': {
        'link': 'imagens/escudos/nautico.png'
    }
}


function draggerAdd(){
    let newDiv = document.getElementsByClassName("player")
    for (item in newDiv){
    }
}

function putTime(team){
    let bigBox = document.createElement("div")
    bigBox.id = 'bigbox'
    document.body.appendChild(bigBox)
    let elenco = document.createElement("div")
    elenco.id = "elenco"
    bigBox.appendChild(elenco)
    let elArray = dados[team]
    for (pos in elArray){
        let actual = elArray[pos]
        let boxPosition = document.createElement("div")
        boxPosition.classList.add("posicao")
        elenco.appendChild(boxPosition)
        let span = document.createElement("span")
        span.innerHTML = actual[0]
        let idcomon = actual[1]
        boxPosition.appendChild(span)
        for (num in actual){
            if (num != 1 && num != 0){
                let newDiv = document.createElement("div")
                newDiv.style.backgroundImage = `url(${actual[num]})`
                boxPosition.appendChild(newDiv)
                newDiv.classList.add("player")
                newDiv.setAttribute("draggable", 'true')
            }
        }
    }
}

positions = ['Goleiro', 'Lateral direito', 'Lateral esquerdo', 'Zagueiro', '1º Volante', '2º Volante', 'Meia', 'Pontas', 'Centroavante']

function putJanela(){
    let bigBox = document.getElementById("bigbox")
    let janelaIdeal = document.createElement("div")
    janelaIdeal.id = "janelaideal"
    bigBox.appendChild(janelaIdeal)
    for (pos in positions){
        let nome = positions[pos]
        let newSpan = document.createElement("span")
        newSpan.innerHTML = nome
        let positionBox = document.createElement("div")
        positionBox.classList.add("position-box")
        let adicionar = document.createElement("div")
        adicionar.classList.add("adicionar")
        janelaIdeal.appendChild(newSpan)
        janelaIdeal.appendChild(positionBox)
        positionBox.appendChild(adicionar)
        adicionar.addEventListener("click", (e) => {
            let img = document.createElement("div")
            img.classList.add("jogador-choice")
            positionBox.prepend(img)
            let close = document.createElement("div")
            close.classList.add("close")
            img.appendChild(close)
            close.addEventListener("click", (e)=>{
                e.target.parentElement.remove()    
            })
        })
    }
}

function putEmprest(){
    let span = document.createElement("span")
    span.innerHTML = 'EMPRÉSTIMOS'
    let bigBox = document.getElementById("bigbox")
    let emprestimos = document.createElement("div")
    let emprestBox = document.createElement("div")
    emprestimos.appendChild(span)
    emprestBox.id = "emprestimos"
    emprestimos.appendChild(emprestBox)
    emprestimos.id = "emprestBox"
    bigBox.appendChild(emprestimos)
}

function putVenda(){
    let span = document.createElement("span")
    span.innerHTML = 'VENDE/RESCINDE'
    let bigBox = document.getElementById("bigbox")
    let venda = document.createElement("div")
    let vendaBox = document.createElement("div")
    venda.appendChild(span)
    vendaBox.id = "venda"
    venda.appendChild(vendaBox)
    venda.id = "vendaBox"
    bigBox.appendChild(venda)
}

function selectTeam(object){
    elemento = object.target
    time = elemento.getAttribute("data")
    source = elemento.src
    console.log(time)
    document.getElementById("choiceBox").remove()
    let image = document.createElement("img")
    image.src = source
    image.id = 'imageFixed'
    document.body.appendChild(image)
    putTime(time)
    putJanela()
    putEmprest()
    putVenda()
}

function putChoiceBox(){
    let box = document.createElement("div")
    box.id = "choiceBox"
    document.body.appendChild(box)
    let text = document.createElement('span')
    text.innerHTML = "ESCOLHA O SEU TIME"
    box.appendChild(text)
    for (times in timesNE){
        console.log(timesNE[times]['link'])
        let team = document.createElement("img")
        team.src = timesNE[times]['link']
        team.setAttribute("data", times)
        box.appendChild(team)
        team.addEventListener("click", (e) => {selectTeam(e)})
    }
}

putChoiceBox()

