let fortaleza = ["imagens/fortaleza/joao-ricardo.png", "imagens/fortaleza/eros-mancuso.png", "imagens/fortaleza/kuscevic.png", "imagens/fortaleza/david-luiz.png", "imagens/fortaleza/diogo-barbosa.png", "imagens/fortaleza/pol-fernandez.png", "imagens/fortaleza/lucas-sasha.png", "imagens/fortaleza/pochettino.png", "imagens/fortaleza/marinho.png", "imagens/fortaleza/moises.png", "imagens/fortaleza/lucero.png"]
let sport = ["imagens/sport/caique-frança.png", "imagens/sport/hereda.png", "imagens/sport/joao-silva.png", "imagens/sport/chico.png", "imagens/sport/igor-carius.png", "imagens/sport/christian-rivera.png", "imagens/sport/sergio-oliveira.png", "imagens/sport/lucas-lima.png", "imagens/sport/chino-atencio.png", "imagens/sport/lenny-lobato.png", "imagens/sport/paciencia.png"]
let bahia = ["imagens/bahia/marcos-felipe.png", "imagens/bahia/santi-arias.png", "imagens/bahia/kanu.png", "imagens/bahia/ramos-mingo.png", "imagens/bahia/luciano-juba.png", "imagens/bahia/caio-alexandre.png", "imagens/bahia/jean-lucas.png", "imagens/bahia/everton-ribeiro.png", "imagens/bahia/ademir.png", "imagens/bahia/erick-pulga.png", "imagens/bahia/lucho-rodriguez.png"]
let ceara = ["imagens/ceara/bruno-ferreira.png", "imagens/ceara/fabiano-souza.png", "imagens/ceara/marllon.png", "imagens/ceara/ramon-menezes.png", "imagens/ceara/matheus-bahia.png", "imagens/ceara/richardson.png", "imagens/ceara/fernando-sobral.png", "imagens/ceara/lucas-mugni.png", "imagens/ceara/pedro-henrique.png", "imagens/ceara/fernandinho.png", "imagens/ceara/pedro-raul.png"]
let vitoria = ["imagens/vitoria/lucas-arcanjo.png", "imagens/vitoria/claudinho.png", "imagens/vitoria/neris.png", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/jamerson.png", "imagens/vitoria/baralhas.png" ,"imagens/vitoria/pepê.png", "imagens/vitoria/matheusinho.png", "imagens/vitoria/gustavo-mosquito.png", "imagens/vitoria/wellington-rato.png", "imagens/vitoria/janderson.png"]
flu = "imagens/fluminense/"
let fluminense = [flu + "fabio.png", flu + "guga.png", flu + "ignacio.png", flu + "freytes.png", flu + "fuentes.png", flu + "martinelli.png", flu + "nonato.png", flu + "ganso.png", flu + "arias.png", flu + "keno.png", flu + "everaldo.png"]
let cor = "imagens/corinthians/"
corinthians = [cor + "hugo-souza.png", cor + "matheuzinho.png", cor + "andre-ramalho.png", cor + "caca.png", cor + "angileri.png", cor + "raniele.png", cor + "martinez.png", cor + "igor-coronado.png", cor + "carillo.png", cor + "depay.png", cor + "yuri-alberto.png"]
let int = "imagens/inter/"
let internacional = [int + "anthoni.png", int + "aguirre.png", int + "vitao.png", int + "victor-gabriel.png", int + "bernabei.png", int + "fernando.png", int + "thiago-maia.png", int + "alan-patrick.png", int + "bruno-tabata.png", int + "wesley.png", int + "enner-valencia.png"]
timesFut = {
    Fortaleza: fortaleza,
    Sport: sport,
    Bahia: bahia,
    Ceara: ceara,
    Vitoria: vitoria,
    Fluminense: fluminense,
    Corinthians: corinthians,
    Inter: internacional
}
fotosTimes = {
    Fortaleza: ["imagens/escudos/fortaleza.png", "Fortaleza"],
    Sport: ["imagens/escudos/sport.svg", "Sport"],
    Bahia: ["imagens/escudos/bahia.png", "Bahia"],
    Ceara: ["imagens/escudos/ceara.png", "Ceará"],
    Vitoria: ["imagens/escudos/vitoria.png", "Vitória"]
}
let corBahia = "linear-gradient(90deg, rgb(7, 99, 171), rgb(255,255,255), rgb(238, 49, 38))"
let corSport = "linear-gradient(90deg, rgb(227, 26, 33), rgb(35,31,32))"
let corFortaleza = "linear-gradient(90deg, rgb(40, 97, 166), rgb(209,47,20), rgb(254,254,254))"
let corCeara = "linear-gradient(90deg, black,white)"
let corVitoria = "linear-gradient(90deg, rgb(237, 27, 59), rgb(36,31,33))"
let timeUno
let timeDuno
let imgFutUm
let nameFutUm
let nameFutDois
let imgFutDois

function selecionarUm(elemento){
        if (document.getElementById("escolha")){
            document.getElementById("escolha").remove()
            let button = document.querySelector("a[onclick='personalizar(this, true)'")
            console.log("BOTÃO: ", button)
            if (button){
                button.querySelector("button").innerHTML = "PERSONALIZAR TIMES"
            }
        }
    time = elemento.value
    imgFutUm = fotosTimes[time][0]
    nameFutUm = fotosTimes[time][1]
    let veri = botarUm(time, true)
    botarNome(veri)
}

function createEscolha(){
    if (document.getElementById("escolha")){
        console.log("Já tem")
       return 
    } else{
        console.log("Criando")
        let escolhaCreate = document.createElement("div")
        let footer = document.querySelector("footer")
        document.body.insertBefore(escolhaCreate, footer)
        escolhaCreate.setAttribute("id", "escolha")
    }
    
}


function botarUm(time, verify, change){
    console.log("BOTANDO UM...")
    timeUno = time
    let imagem = document.getElementsByClassName("time-um")
    if (change){
        imagem = document.getElementsByClassName("titulares")
    }
    let leng = imagem.length
    for (i=0; i < imagem.length; i++){
        imagem[i].querySelector("img").src = timesFut[time][i]
        imagem[i].setAttribute("onclick", "clicar(this)")
    }
    if (verify == true){
        let ver = verificar()
        if (ver == false){
            return false
        }
    }     
}

function selecionarDois(elemento){
    if (document.getElementById("escolha")){
        document.getElementById("escolha").remove()
        let button = document.querySelector("a[onclick='personalizar(this, true)'")
        console.log("BOTÃO: ", button)
        if (button){
            button.querySelector("button").innerHTML = "PERSONALIZAR TIMES"
        }
    }
    time = elemento.value
    imgFutDois = fotosTimes[time][0]
    nameFutDois = fotosTimes[time][1]
    botarDois(time, false)
}

function botarDois(time, verify){
    timeDuno = time
    let imagemDois = document.getElementsByClassName("time-dois")
    for (i=0; i < imagemDois.length; i++){
        imagemDois[i].querySelector("img").src = timesFut[time][i]
        imagemDois[i].setAttribute("onclick", "clicar(this)")
    }

    if (verify == true){
        let ver = verificar()
        if (ver == false){
            return false
        }
    }   
    
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
        return false
    } if (timeUm.value != timeDois.value){
        mam.style.display = "block"
        mam.style.flexDirection = "column"
        aviso.style.display = "none"
    }
    limpar()
}

function checarPs(){
    let selectUm = document.getElementById("timeUm")
    let selectDois = document.getElementById("timeDois")
    if (selectUm.value == "Time 1"){
        return false
    } if (selectDois.value == "Time 2"){
        return false
    }
    
}

function personalizar(elemento, checar){
    console.log("DADOS: ",imgFutUm, imgFutDois, nameFutUm, nameFutDois)
    if (checar == true){
        var tof = checarPs()
        if (tof == false){
            return
        }
    }
    
    elemento.querySelector("button").innerHTML = "RECOLHER"
    botarEscale(timeUno, false, true, "um", true, elemento)
    botarEscale(timeDuno, false, true, "dois", false, elemento)
    let escolha = document.getElementById("escolha")
    if (escolha){
        let offset = 80
        window.scrollTo({ top: escolha.getBoundingClientRect().top + window.scrollY - offset,behavior: "smooth" });
    }
}

function botarNome(igual){
    if (checarPs() == false){
        return
    } 
    let titulo = document.getElementById("titulo")
    console.log(titulo)
    let imagemFutUm = document.createElement("img")
    imagemFutUm.src = imgFutUm
    let imagemFutDois = document.createElement("img")
    imagemFutDois.src = imgFutDois
    let span = document.createElement("span")
    span.innerHTML = `${nameFutUm} X ${nameFutDois}`
    span.style.textTransform = "uppercase"
    span.style.margin = 0
    span.style.fontWeight = 700
    titulo.innerHTML = ""
    titulo.appendChild(imagemFutUm)
    titulo.appendChild(span)
    titulo.appendChild(imagemFutDois)
    if (igual == false){
        titulo.innerHTML = "PERSONALIZADO"
    }
}