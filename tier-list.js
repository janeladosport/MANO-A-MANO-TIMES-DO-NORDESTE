let ids = ["gol", "ld", "zd", "ze", "le", "vol", "mc", "mei", "pd", "pe", "ca"]
let tecnicos = {
    Fortaleza: "imagens/fortaleza/vojvoda.png",
    Sport: "imagens/sport/pepa.png",
    Bahia: "imagens/bahia/rogerio-ceni.png",
    Ceara: "imagens/ceara/leo-conde.png",
    Vitoria: "imagens/vitoria/thiago-carpini.png"
}
let imagenss

function limparCampoEscaleTier(){
    var jogadores = document.getElementsByClassName("img-jogador")
    for (i = jogadores.length - 1; i >= 0; i--){
        jogadores[i].setAttribute("src", "")
    }
}

function limparTier(){
    const resultado = document.getElementsByClassName("jogador-tier")
    console.log(resultado)

    for (let i = 0; i < resultado.length; i++){
        console.log(resultado[i].classList.contains("tecnico"))
        if (resultado[i].classList.contains("tecnico") == false){
            resultado[i].querySelector('img').remove()
            let img = document.createElement('img')
            resultado[i].append(img)
            img.setAttribute("id", ids[i])
            img.setAttribute("class", "img-jogador")
        }
    }
    let jogadorSelectable = document.getElementsByClassName("jogador-selectable")
    for (h =0; h < jogadorSelectable.length; h++){
        jogadorSelectable[h].setAttribute("onclick", "clicarEscale(this, true)")
    }
    let buttonConcluir = document.querySelector("a[onclick='concluir(this)']")
    if (buttonConcluir){
        buttonConcluir.remove()
    }
}

function iniciate(){
    let jogadores = document.createElement("div")
    let select = document.querySelector("select")
    document.body.insertBefore(jogadores, select)
    jogadores.setAttribute("id", "tier")
    let span = document.createElement("span")
    span.innerHTML = "TITULARES"
    jogadores.appendChild(span)
    for (i=0; i < 11; i++){
        let imgesc = document.createElement("div")
        let imagem = document.createElement("img")
        jogadores.appendChild(imgesc)
        imgesc.appendChild(imagem)
        imgesc.setAttribute("class", "jogador-tier titulares")
        imagem.setAttribute("class", "img-jogador")
        imagem.setAttribute("id", ids[i])
    }
    let jogadoresReservas = document.createElement("div")
    document.body.insertBefore(jogadoresReservas, select)
    jogadoresReservas.setAttribute("id", "tier-reserva")
    let spanReserva = document.createElement("span")
    spanReserva.innerHTML = "SUBSTITUIÇÕES"
    jogadoresReservas.appendChild(spanReserva)
    for (i=0; i < 5; i++){
        let imgescR = document.createElement("div")
        let imagemR = document.createElement("img")
        jogadoresReservas.appendChild(imgescR)
        imgescR.appendChild(imagemR)
        imgescR.setAttribute("class", "jogador-tier reservas")
        imagemR.setAttribute("class", "img-jogador")
    }
    let tecnico = document.createElement("div")
    document.body.insertBefore(tecnico, select)
    tecnico.setAttribute("id", "tier-tecnico")
    let spanTecnico = document.createElement("span")
    spanTecnico.innerHTML = "TÉCNICO"
    tecnico.appendChild(spanTecnico)
    let imgescT = document.createElement("div")
    let imagemT = document.createElement("img")
    tecnico.appendChild(imgescT)
    imgescT.appendChild(imagemT)
    imgescT.setAttribute("class", "jogador-tier tecnico")
    imagemT.setAttribute("class", "img-jogador")
    imagemT.setAttribute("id", "tecnico")
}

function tecnicoEscale(time){
    let tecnico = document.getElementById("tecnico")
    if (tecnico){
        console.log(tecnicos[time])
        tecnico.src = tecnicos[time]
    }
}

function substitutos(elemento){
    let verificarr = verificarDuplicata("img-jogador", elemento.src)
    if (verificarr == false){
        return false
    }
    let reservas = document.getElementsByClassName("reservas")
    if (reservas.length > 0){
        reservas[0].querySelector("img").src = elemento.src
        reservas[0].setAttribute("class", "jogador-tier")
    }
}

function verificarTierListNota(){
    let classif = document.getElementsByClassName("classificacao")
    for (i=0; i < classif.length; i++){
        if (classif[i].innerHTML == ""){
            return false
        } 
    } 
    return true
}

function ordenar(){
    if (verificarTierListNota() == false){
        return
    }
    let create
    let order
    let classes = ["pec", "ruim", "regular", "ok", "bom", "mec"]
    if (document.getElementById("tier-order") == null){
        order = document.createElement("div")
        document.body.appendChild(order)
        order.setAttribute("id", "tier-order")
        create = true
    }
    console.log("CREATE: ", create) 
    let jogadorTier = document.getElementsByClassName("jogador-tier")
    for (i=0; i < jogadorTier.length; i++){
        if (create == true){
            jogadorTier[0].classList.add(jogadorTier[0].querySelector('span').className)
            order.appendChild(jogadorTier[0])
        } else{
            for (h=0; h < classes.length; h++){
                if (jogadorTier[i].classList.contains(classes[h])){
                    jogadorTier[i].classList.remove(classes[h])
                }
            }
            jogadorTier[i].classList.add(jogadorTier[i].querySelector('span').className)
        }
    }
    let tier = document.getElementById("tier")
    let tierReserva = document.getElementById("tier-reserva")
    let tierTecnico = document.getElementById("tier-tecnico")
    tier.style.display = 'none'
    tierReserva.style.display = 'none'
    tierTecnico.style.display = 'none'
}

function ordenarButton(){
    let jaExist = document.querySelector("a[onclick='concluirTier()']")
    if (jaExist){
        jaExist.setAttribute("onclick", "ordenar()")
        jaExist.querySelector("button").innerHTML = "ORDENAR"
    } else{
        return
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

function concluirTier(){
    let select = document.querySelector("select")
    let escolha = document.querySelector("div#escolha")
    select.style.display = "none"
    escolha.style.display = "none"
    let tier = document.getElementById("tier")
    let tierReserva = document.getElementById("tier-reserva")
    let tierTecnico = document.getElementById("tier-tecnico")
    tier.style.flexDirection = "column"
    tierReserva.style.flexDirection = "column"
    tierTecnico.style.flexDirection = "column"
    tier.style.alignItems = "center"
    tierReserva.style.alignItems = "center"
    tierTecnico.style.alignItems = "center"
    let jogadorTier = document.getElementsByClassName('jogador-tier')
    for (i=0; i < jogadorTier.length; i++){
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
        jogadorTier[i].appendChild(newDiv)
        newDiv.appendChild(span)
        newDiv.appendChild(spanClass)
        newDiv.appendChild(range)
        jogadorTier[i].classList.add("container-family")
        jogadorTier[i].style.display = "flex"
        jogadorTier[i].style.margin = "10px"
        range.addEventListener("input", function(){
            notaSet(range, span, spanClass)
    })
    }
    ordenarButton()
}



function concluir(element, ignore){
    if (ignore != true){element.remove()}
    let titularesCounte = document.getElementsByClassName("jogador-selectable")
    for (i = 0; i < titularesCounte.length; i++){
        titularesCounte[i].setAttribute("onclick", "substitutos(this)")
    }
}


function mudou(){
    console.log("mudando")
    let titularesCount = document.getElementsByClassName("titulares")
    for (i = 0; i < titularesCount.length; i++){
        let imgTitularesCount = titularesCount[i].querySelector("img")
        if (imgTitularesCount.src == ""){
            return false
        } 
}
    let titularesInsert = document.getElementById("tier")
    let botaoA = document.createElement("a")
    botaoA.setAttribute("onclick", "concluir(this)")
    let botao = document.createElement("button")
    botao.setAttribute("id", "voltar")
    botao.innerHTML = "CONCLUIR"
    botaoA.appendChild(botao)
    titularesInsert.appendChild(botaoA)
    for (i=0; i < imagenss.length; i++){
        imagenss[i].removeEventListener("click", mudou)
    }
    
}

function eventoListener(){
    imagenss = document.getElementsByClassName("jogador-selectable")
    for (i = 0; i < imagenss.length; i++){
        imagenss[i].addEventListener("click", mudou)
    }
}

function tierlistTimeChange(elemento){
    let time = elemento.value
    botarEscale(time, false, false, "um", true, "ignore")
    let tier = document.getElementById("tier")
    let tierReserva = document.getElementById("tier-reserva")
    if (tier & tierReserva){
        tier.remove()
        tierReserva.remove()
        iniciate()
    }
    tecnicoEscale(time)
    eventoListener()
}


