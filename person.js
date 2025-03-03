let fortaleza = ["imagens/fortaleza/joao-ricardo.png", "imagens/fortaleza/eros-mancuso.png", "imagens/fortaleza/david-luiz.png", "imagens/fortaleza/gaston-avila.png", "imagens/fortaleza/bruno-pacheco.png", "imagens/fortaleza/pol-fernandez.png", "imagens/fortaleza/ze-welisson.png", "imagens/fortaleza/pochettino.png", "imagens/fortaleza/marinho.png", "imagens/fortaleza/moises.png", "imagens/fortaleza/lucero.png"]
let sport = ["imagens/sport/caique-frança.png", "imagens/sport/hereda.png", "imagens/sport/joao-silva.png", "imagens/sport/chico.png", "imagens/sport/igor-carius.png", "imagens/sport/christian-rivera.png", "imagens/sport/sergio-oliveira.png", "imagens/sport/lucas-lima.png", "imagens/sport/chino-atencio.png", "imagens/sport/lenny-lobato.png", "imagens/sport/paciencia.png"]
let bahia = ["imagens/bahia/marcos-felipe.png", "imagens/bahia/santi-arias.png", "imagens/bahia/kanu.png", "imagens/bahia/ramos-mingo.png", "imagens/bahia/luciano-juba.png", "imagens/bahia/caio-alexandre.png", "imagens/bahia/jean-lucas.png", "imagens/bahia/everton-ribeiro.png", "imagens/bahia/ademir.png", "imagens/bahia/erick-pulga.png", "imagens/bahia/lucho-rodriguez.png"]
let ceara = ["imagens/ceara/bruno-ferreira.png", "imagens/ceara/fabiano-souza.png", "imagens/ceara/marllon.png", "imagens/ceara/ramon-menezes.png", "imagens/ceara/matheus-bahia.png", "imagens/ceara/richardson.png", "imagens/ceara/fernando-sobral.png", "imagens/ceara/lucas-mugni.png", "imagens/ceara/pedro-henrique.png", "imagens/ceara/fernandinho.png", "imagens/ceara/aylon.png"]
let vitoria = ["imagens/vitoria/lucas-arcanjo.png", "imagens/vitoria/claudinho.png", "imagens/vitoria/neris.png", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/jamerson.png", "imagens/vitoria/baralhas.png" ,"imagens/vitoria/pepê.png", "imagens/vitoria/matheusinho.png", "imagens/vitoria/gustavo-mosquito.png", "imagens/vitoria/wellington-rato.png", "imagens/vitoria/janderson.png"]
let corBahia = "linear-gradient(90deg, rgb(7, 99, 171), rgb(255,255,255), rgb(238, 49, 38))"
let corSport = "linear-gradient(90deg, rgb(227, 26, 33), rgb(35,31,32))"
let corFortaleza = "linear-gradient(90deg, rgb(40, 97, 166), rgb(209,47,20), rgb(254,254,254))"
let corCeara = "linear-gradient(90deg, black,white)"
let corVitoria = "linear-gradient(90deg, rgb(237, 27, 59), rgb(36,31,33))"

function selecionarUm(elemento){
    let time = elemento.value
    console.log("Elemento:", elemento)
    let imagem = document.getElementsByClassName("time-um")
    if (time == "Fortaleza"){
      for (i=0; i < imagem.length; i++){
        imagem[i].querySelector('img').src = fortaleza[i]
        imagem[i].setAttribute("onclick", "clicar(this)")
        elemento.style.background = corFortaleza
        elemento.setAttribute("class", "tricolor")
        }  
    } if (time == "Sport") {
        for (i=0; i < imagem.length; i++){
            imagem[i].querySelector('img').src = sport[i]
            imagem[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background = corSport
            elemento.setAttribute("class", "normal")
            }
    } if (time == "Bahia") {
        for (i=0; i < imagem.length; i++){
            imagem[i].querySelector('img').src = bahia[i]
            imagem[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background = corBahia
            elemento.setAttribute("class", "tricolor")
            }
    } if (time == "Ceara") {
        for (i=0; i < imagem.length; i++){
            imagem[i].querySelector('img').src = ceara[i]
            imagem[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background = corCeara
            elemento.setAttribute("class", "normal")
            }
    } if (time == "Vitoria") {
        for (i=0; i < imagem.length; i++){
            imagem[i].querySelector('img').src = vitoria[i]
            imagem[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background= corVitoria
            elemento.setAttribute("class", "normal")
            } 
    }

    verificar()
    
}

function selecionarDois(elemento){
    let time = elemento.value
    let imagemDois = document.getElementsByClassName("time-dois")
    if (time == "Fortaleza"){
      for (i=0; i < imagemDois.length; i++){
        imagemDois[i].querySelector('img').src = fortaleza[i]
        imagemDois[i].setAttribute("onclick", "clicar(this)")
        elemento.style.background= corFortaleza
            elemento.setAttribute("class", "tricolor")
        }  
    } if (time == "Sport") {
        for (i=0; i < imagemDois.length; i++){
            imagemDois[i].querySelector('img').src = sport[i]
            imagemDois[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background= corSport
            elemento.setAttribute("class", "normal")
            }
    } if (time == "Bahia") {
        for (i=0; i < imagemDois.length; i++){
            imagemDois[i].querySelector('img').src = bahia[i]
            imagemDois[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background= corBahia
            elemento.setAttribute("class", "tricolor")
            }
    } if (time == "Ceara") {
        for (i=0; i < imagemDois.length; i++){
            imagemDois[i].querySelector('img').src = ceara[i]
            imagemDois[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background= corCeara
            elemento.setAttribute("class", "normal")
            }
    } if (time == "Vitoria") {
        for (i=0; i < imagemDois.length; i++){
            imagemDois[i].querySelector('img').src = vitoria[i]
            imagemDois[i].setAttribute("onclick", "clicar(this)")
            elemento.style.background= corVitoria
            elemento.setAttribute("class", "normal")
            } 
    }

    verificar()
    
}

function verificar(){
    let timeUm = document.getElementById('timeUm')
    let timeDois = document.getElementById('timeDois')
    var mam = document.getElementsByClassName('mam')[0]
    var aviso = document.getElementById('aviso')
    console.log('Verificando', mam)
    if (timeUm.value == timeDois.value){
        mam.style.display = "none"
        console.log(aviso)
        aviso.style.display="flex"
        console.log('É igual')
    } if (timeUm.value != timeDois.value){
        mam.style.display = "block"
        mam.style.flexDirection = "column"
        aviso.style.display = "none"
    }
    limpar()
}

