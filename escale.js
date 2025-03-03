var golSport = ["Goleiro", "gol-esc", "imagens/sport/caique-frança.png", "imagens/sport/thiago-couto.png", "imagens/sport/davi.png"]
var ldSport = ["Lateral direita", "ld-esc", "imagens/sport/hereda.png", "imagens/sport/matheus-alexandre.png", "imagens/sport/di-placido.png", "imagens/sport/du-queiroz.png"] 
var zdSport = ["Zagueiro Direito", "zd-esc", "imagens/sport/joao-silva.png", "imagens/sport/lucas-cunha.png", "imagens/sport/antonio-carlos.png", "imagens/sport/marcelo-ajul.png", "imagens/sport/rafael-thyere.png"]
var zeSport = ["Zagueiro Esquerdo", "ze-esc", "imagens/sport/chico.png", "imagens/sport/joao-silva.png", "imagens/sport/renzo.png"] 
var leSport = ["Lateral Esquerda", "le-esc", "imagens/sport/igor-carius.png", "imagens/sport/dalbert.png"]    
var volSport = ["1º Volante", "vol-esc", "imagens/sport/christian-rivera.png", "imagens/sport/du-queiroz.png", "imagens/sport/adriel.png", "imagens/sport/ze-lucas.png"]    
var mcSport = ["2º Volante", "mc-esc", "imagens/sport/sergio-oliveira.png", "imagens/sport/dominguez.png", "imagens/sport/du-queiroz.png"]
var meiSport = ["Meia", "mei-esc", "imagens/sport/lucas-lima.png", "imagens/sport/hyoran.png", "imagens/sport/titi-ortiz.png", "imagens/sport/sergio-oliveira.png", "imagens/sport/chino-atencio.png"]
var pdSport = ["Ponta direita", "pd-esc", "imagens/sport/chino-atencio.png", "imagens/sport/barletta.png", "imagens/sport/lenny-lobato.png", "imagens/sport/romarinho.png"]
var peSport = ["Ponta esquerda", "pe-esc", "imagens/sport/barletta.png", "imagens/sport/lenny-lobato.png", "imagens/sport/romarinho.png", "imagens/sport/gustavo-maia.png"]
var caSport = ["Centroavante", "ca-esc", "imagens/sport/paciencia.png", "imagens/sport/pablo.png", "imagens/sport/artur-sousa.png" ,"imagens/sport/lenny-lobato.png"]

var golBahia = ["Goleiro", "gol-esc" , "imagens/bahia/marcos-felipe.png"]
var dados = {
    Sport: [golSport, ldSport, zdSport, zeSport, leSport, volSport, mcSport, meiSport, pdSport, peSport, caSport],
    Bahia: [golBahia]
};
// , ldSport, zdSport, zeSport, leSport, volSport, mcSport, meiSport, pdSport, peSport, caSport


function selecionarEscale(elemento){
    limparEscolhaEscale()
    limparCampoEscale()
    var time = elemento.value
    let timeValor = dados[time]
    for (i=0; i < timeValor.length; i++){
        let div = document.createElement("div")
        let span = document.createElement("div")
        let timeI = timeValor[i]
        let nome = timeI[0]
        let id = timeI[1]
        span.innerHTML = nome
        let escolha = document.getElementById("escolha")
        escolha.appendChild(div)
        span.setAttribute("class", "span-escolha")
        div.appendChild(span)
        div.setAttribute("class", "nome-escolha")
        for (h=2; h < timeI.length; h++){
            let source = timeI[h]
            let imagem = document.createElement("img")
            imagem.setAttribute("src", source)
            div.appendChild(imagem)
            imagem.setAttribute("class", "jogador-selectable")
            imagem.setAttribute("onclick", "clicarEscale(this)")
            imagem.setAttribute("id", id)
        }
    }
}

function limparEscolhaEscale(){
    var escolhas = document.getElementsByClassName("nome-escolha")
    for (i = escolhas.length - 1; i >= 0; i--){
        escolhas[i].remove()
    }
}

function limparCampoEscale(){
    var jogadores = document.getElementsByClassName("jogador")
    for (i = jogadores.length - 1; i >= 0; i--){
        jogadores[i].setAttribute("src", "imagens/branco.png")
    }
}

function clicarEscale(elemento){
    if (elemento.id == "gol-esc"){
        document.getElementById("gol").src = elemento.src
    } if (elemento.id == "ld-esc"){
        document.getElementById("ld").src = elemento.src
    } if (elemento.id == "zd-esc"){
        document.getElementById("zd").src = elemento.src
    } if (elemento.id == "ze-esc"){
        document.getElementById("ze").src = elemento.src
    } if (elemento.id == "le-esc"){
        document.getElementById("le").src = elemento.src
    } if (elemento.id == "vol-esc"){
        document.getElementById("vol").src = elemento.src
    } if (elemento.id == "mc-esc"){
        document.getElementById("mc").src = elemento.src
    } if (elemento.id == "mei-esc"){
        document.getElementById("mei").src = elemento.src
    } if (elemento.id == "pd-esc"){
        document.getElementById("pd").src = elemento.src
    } if (elemento.id == "pe-esc"){
        document.getElementById("pe").src = elemento.src
    } if (elemento.id == "ca-esc"){
        document.getElementById("ca").src = elemento.src
    }
    console.log("MUDOU")


    verificarDuplicata()
}

function verificarDuplicata(){
    let imagens = document.getElementsByClassName("jogador"); // Seleciona apenas as imagens com essa classe
    console.log("Imagens: ", imagens)
    let srcSet = new Set();
    let permitidoCount = 0;
    let permitido = "branco.png"
    for (let img of imagens) {
        console.log("IMG: ", img)
        console.log("Imagem source: ", img.src)
        let nomeArquivo = img.src.substring(img.src.lastIndexOf("/") + 1) 
        console.log("SOURCE: ", nomeArquivo)
        if (nomeArquivo == permitido) {
            permitidoCount++;
            continue;
        }
        if (srcSet.has(img.src)) {
            limparCampoEscale()
            alert("Não selecione jogadores iguais")
            return false;
        }
        
        srcSet.add(img.src);
    }

    return true;
}