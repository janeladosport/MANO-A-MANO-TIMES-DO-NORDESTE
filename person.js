let fortaleza = ["imagens/fortaleza/joao-ricardo.png", "imagens/fortaleza/eros-mancuso.png", "imagens/fortaleza/kuscevic.png", "imagens/fortaleza/david-luiz.png", "imagens/fortaleza/diogo-barbosa.png", "imagens/fortaleza/pol-fernandez.png", "imagens/fortaleza/lucas-sasha.png", "imagens/fortaleza/pochettino.png", "imagens/fortaleza/marinho.png", "imagens/fortaleza/moises.png", "imagens/fortaleza/lucero.png"]
let sport = srcConjunto("sport", ["caique-frança", "hereda", "joao-silva", "chico", "igor-carius", "christian-rivera", "sergio-oliveira", "lucas-lima", "chino-atencio", "barletta", "paciencia"])
let bahia = ["imagens/bahia/marcos-felipe.png", "imagens/bahia/santi-arias.png", "imagens/bahia/kanu.png", "imagens/bahia/ramos-mingo.png", "imagens/bahia/luciano-juba.png", "imagens/bahia/caio-alexandre.png", "imagens/bahia/jean-lucas.png", "imagens/bahia/everton-ribeiro.png", "imagens/bahia/ademir.png", "imagens/bahia/erick-pulga.png", "imagens/bahia/lucho-rodriguez.png"]
let ceara = ["imagens/ceara/bruno-ferreira.png", "imagens/ceara/fabiano-souza.png", "imagens/ceara/marllon.png", "imagens/ceara/ramon-menezes.png", "imagens/ceara/matheus-bahia.png", "imagens/ceara/richardson.png", "imagens/ceara/fernando-sobral.png", "imagens/ceara/lucas-mugni.png", "imagens/ceara/pedro-henrique.png", "imagens/ceara/fernandinho.png", "imagens/ceara/pedro-raul.png"]
let vitoria = srcConjunto("vitoria", ["lucas-arcanjo", "claudinho", "neris", "lucas-halter", "jamerson", "baralhas", "pepê", "matheusinho", "gustavo-mosquito", "wellington-rato", "janderson"])
flu = "imagens/fluminense/"
let fluminense = [flu + "fabio.png", flu + "guga.png", flu + "ignacio.png", flu + "freytes.png", flu + "fuentes.png", flu + "martinelli.png", flu + "nonato.png", flu + "ganso.png", flu + "arias.png", flu + "keno.png", flu + "everaldo.png"]

let corinthians = srcConjunto("corinthians", ["hugo-souza", "matheuzinho", "andre-ramalho", "caca", "angileri", "raniele", "alex-santana", "carillo", "romero", "depay", "yuri-alberto"])

let internacional = srcConjunto("inter", ["anthoni", "aguirre", "vitao", "victor-gabriel", "bernabei", "fernando", "thiago-maia", "oscar-romero", "bruno-tabata", "wesley", "lucca"])

let botafogo = srcConjunto("botafogo", ["john", "vitinho", "jair", "david-ricardo", "cuiabano", "danilo-barbosa", "marlon-freitas", "patrick-de-paula", "artur", "igor-jesus", "mastriani"])

let vasco = srcConjunto("vasco", ["leo-jardim", "paulo-henrique", "lucas-freitas", "joao-victor", "lucas-piton", "hugo-moura", "tche-tche", "coutinho", "nuno-moreira", "garre", "vegetti"])

let bragantino = srcConjunto("bragantino", ["cleiton", "andres-hurtado", "pedro-henrique", "guzman", "juninho-capixaba", "gabriel", "eric-ramires", "jhon-jhon", "lucas-barbosa", "laquintana", "sasha"])

let juventude = srcConjunto("juventude", ["marcao", "ewerthon", "rodrigo-sam", "abner", "alan-ruschel", "giraldo", "jadson", "mandaca", "batalla", "enio", "gilberto"])

let mirassol = srcConjunto("mirassol", ["walter", "lucas-ramon", "joao-victor", "jemmes", "reinaldo", "neto-moura", "danielzinho", "gabriel", "edson-carioca", "fabricio-daniel", "cristian-renato"])

let flamengo = srcConjunto("flamengo", ["rossi", "wesley", "leo-ortiz", "leo-pereira", "alex-sandro", "evertton-araujo", "de-la-cruz", "arrascaeta", "luiz-araujo", "michael", "bruno-henrique"])

let saopaulo = srcConjunto("sao paulo", ["rafael", "ferraresi", "arboleda", "alan-franco", "enzo-diaz", "alisson", "marcos-antonio", "matheus-alves", "cedric", "ferreirinha", "andre-silva"])

let palmeiras = srcConjunto("palmeiras", ["weverton", "giay", "gustavo-gomez", "murilo", "piquerez", "martinez", "richard-rios", "facundo-torres", "felipe-anderson", "estevao", "vitor-roque"])

let cruzeiro = srcConjunto("cruzeiro", ["cassio", "fagner", "fabricio-bruno", "villalba", "kaiki", "lucas-romero", "lucas-silva", "matheus-pereira", "christian", "wanderson", "kaio-jorge"])

let atletico = srcConjunto("atletico", ["everson", "natanael", "lyanco", "alonso", "rubens", "alan-franco", "fausto-vera", "scarpa", "bernard", "rony", "hulk"])

let gremio = srcConjunto("gremio", ["tiago-volpi", "igor-serrote", "jemerson", "wagner-leonardo", "marlon", "dodi", "camilo", "cristaldo", "alysson", "cristian-oliveira", "braithwaite"])

let santos = srcConjunto("santos", ["gabriel-brazao", "aderlan", "ze-ivaldo", "luan-peres", "escobar", "rincon", "gabriel-bontempo", "rollheiser", "barreal", "soteldo", "tiquinho-soares"])

function srcConjunto(time, jogadores){
    let conjunto = []
    for (i=0; i < jogadores.length; i++){
        conjunto.push(`imagens/${time}/${jogadores[i]}.png`)
    }
    console.log(conjunto)
    return conjunto 
}

function srcImg(team, player){
    return `imagens/${team}/${player}.png`
}
function setTimesFut(){
timesFut = {
    Fortaleza: fortaleza,
    Sport: sport,
    Bahia: bahia,
    Ceara: ceara,
    Vitoria: vitoria,
    Fluminense: fluminense,
    Corinthians: corinthians,
    Inter: internacional,
    Botafogo: botafogo,
    Vasco: vasco,
    Bragantino: bragantino,
    Juventude: juventude,
    Mirassol: mirassol,
    Flamengo: flamengo,
    Saopaulo: saopaulo,
    Palmeiras: palmeiras,
    Cruzeiro: cruzeiro,
    Atletico: atletico,
    Gremio: gremio,
    Santos: santos
}
return timesFut
}
timesFut = setTimesFut()
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
