function selecionarEscaleEsq(elemento){
    console.log('fiz')
    var time = elemento.value
    botarEscale(time, true, false, "", false, false, true)
}



function selecionarEscale(elemento){
    var time = elemento.value
    botarEscale(time, true, false, "", false)
}

function botarEscale(time, clean, perso, numb, check, elemento, changeable){
    console.log("number", numb)
    console.log("check: ", check)
    if (check == true){
        console.log("Checando")
        if (document.getElementById("escolha")){
            window.scrollTo({top: 0, behavior: "smooth"})
            if (elemento & elemento != "ignore"){
                elemento.querySelector("button").innerHTML = "PERSONALIZAR TIMES"
                console.log("Tem elemento", elemento.querySelector("button").innerHTML)
            }
            console.log("Tem escolha")
            document.getElementById("escolha").remove()
            if (elemento){
                if (elemento != "ignore"){
                    return false
                } else{
                    createEscolha()
                }
            } else{
                return false
            }
            
        } else{
            createEscolha()
        }
    }
    if (clean == true){
        limparEscolhaEscale()
    }
    limparCampoEscale()
    let timeValor = dados[time]
    let escolha
    
    for (i=0; i < timeValor.length; i++){
        console.log("Ainda estou aqui")
        let div = document.createElement("div")
        let span = document.createElement("div")
        let timeI = timeValor[i]
        let nome = timeI[0]
        let id = timeI[1]
        span.innerHTML = nome
        escolha = document.getElementById("escolha")
        if (escolha){
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
                imagem.setAttribute("data-info", time)
                imagem.setAttribute("onclick", "clicarEscale(this)")
                if(changeable == true){
                    imagem.setAttribute("onclick", "clicarEscaleEsq(this)")
                } else if (changeable == "janelaSelect()"){imagem.setAttribute("onclick", "janelaSelect(this)")}
                if (elemento){
                    if (elemento == "ignore"){
                        imagem.setAttribute("onclick", "clicarEscale(this, true)")
                    }
                }
                if (perso == true){
                    imagem.removeAttribute("onclick")
                    imagem.setAttribute("onclick", `playerEscale(this, '${numb}')`)
                }
                imagem.setAttribute("id", id)
            }
        }
    }
    if (escolha){
        if (time == "Fortaleza" || time == "Vitoria" || time == "Ceara"){
            if (numb=="um"){console.log("EXECUTANDO CRIAÇÃO...", "Time: ", time, "Numb: ", numb)
            let divFortal = document.createElement("div")
            divFortal.setAttribute("class", "nome-escolha anormal")
            escolha.appendChild(divFortal)
            let imagemF = document.createElement("img")
            divFortal.appendChild(imagemF)
            imagemF.setAttribute("class", "jogador-selectable incomum")
            divFortal.style.flexDirection = "column"
            divFortal.style.opacity = "0"
            imagemF.style.cursor = "default"
            if (time == "Vitoria"){
                imagemF.setAttribute("class", "jogador-selectable incomum vitoria")
            }
            if (time == "Fortaleza"){
                let imagemFD = document.createElement("img")
                divFortal.appendChild(imagemFD)
                imagemFD.setAttribute("class", "jogador-selectable incomum")
                imagemFD.style.cursor = "default" 
            }
        } 
    }     
}
}

function removeDraggedClass(){
    document.body.querySelector(".dragged").classList.remove("dragged")
    draggedSource = undefined
}
function playerEscale(elemento){
    console.log("Exe")
    if(document.body.querySelector(".dragged")){removeDraggedClass()}
    elemento.classList.add("dragged")
    draggedSource = elemento.src
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

function clicarEscale(elemento, nocamp){
    let ver = verificarDuplicata("jogador", elemento.src)
    if (nocamp){
        ver = verificarDuplicata("img-jogador", elemento.src)
    }
    if (ver == false){
        return
    }
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


    
}

function alterarTime(elemento, numb){
    let numeros = {
        "gol-esc": 0,
        "ld-esc": 1,
        "zd-esc": 2,
        "ze-esc": 3,
        "le-esc": 4,
        "vol-esc": 5,
        "mc-esc": 6,
        "mei-esc": 7,
        "pd-esc": 8,
        "pe-esc": 9,
        "ca-esc": 10
    }
    let verificate = verificarDuplicataAntes("item", elemento.src)
    console.log("Verificate: ", verificate)
    if (verificate == true) {
        limpar()
        timesFut[elemento.dataset.info][numeros[elemento.id]] = elemento.src
        if (numb = "um"){
            botarUm(timeUno, false)
        } if (numb = "dois"){
            botarDois(timeDuno, false)
        }}
    // verificarDuplicata("item", true)
}

// function verificarDuplicata(classe, query){
//     console.log("Classe: ", classe)
//     let imagens = document.getElementsByClassName(classe);
//     let srcSet = new Set();
//     let permitidoCount = 0;
//     let permitido = "branco.png"
//     let nomeArquivo
//     for (let img of imagens) {
//         console.log("IMG: ", img)
//         console.log("Imagem source: ", img.src)
//         if (query == true){
//             let imgTrue = img.querySelector("img")
//             console.log(imgTrue.src)
//             nomeArquivo = imgTrue.src.substring(imgTrue.src.lastIndexOf("/") + 1) 
//         } else{
//             nomeArquivo = img.src.substring(img.src.lastIndexOf("/") + 1) 
//         }
        
//         console.log("SOURCE: ", nomeArquivo)
//         if (nomeArquivo == permitido) {
//             permitidoCount++;
//             continue;
//         }
//         if (srcSet.has(nomeArquivo)) {
//             limparCampoEscale()
//             alert("Não selecione jogadores iguais")
//             return false;
//         }
        
//         srcSet.add(nomeArquivo);
//     }

//     return true;
// }

// function verificarDuplicata(classe){
//     let imagens = document.getElementsByClassName(classe);
//     let srcSet = new Set();
//     let permitidoCount = 0;
//     let permitido = "branco.png"
//     let nomeArquivo
//     for (let img of imagens) {
//         nomeArquivo = img.src.substring(img.src.lastIndexOf("/") + 1) 
//         if (nomeArquivo == permitido) {
//             permitidoCount++;
//             continue;
//         }
//         if (srcSet.has(nomeArquivo)) {
//             // limparCampoEscale()
//             alert("Não selecione jogadores iguais")
//             return false;
//         }
        
//         srcSet.add(nomeArquivo);
//     }

//     return true;
// }

function verificarDuplicata(classe, source){
    let imagens = document.getElementsByClassName(classe);
    let srcSet = new Set();
    let permitidoCount = 0;
    let permitido = "branco.png"
   
    for (i=0; i < imagens.length; i++) {
        nomeArquivoAtual = source.substring(source.lastIndexOf("/") + 1) 
        nomeArquivo = imagens[i].src.substring(imagens[i].src.lastIndexOf("/") + 1)
        srcSet.add(nomeArquivo);
        if (nomeArquivoAtual == permitido) {
            permitidoCount++;
            continue; 
        }
        if (srcSet.has(nomeArquivoAtual)) {
            alert("Não selecione jogadores iguais")
            return false;
        }
        
    }

    return true;
}

function verificarDuplicataAntes(classe, sourceAntes){
    let imagens = document.getElementsByClassName(classe);
    let srcSet = new Set();
    let permitidoCount = 0;
    let permitido = "branco.png"
   
    for (i=0; i < imagens.length; i++) {

        let sourceImagens = imagens[i].querySelector("img").src
        nomeArquivoAtual = sourceAntes.substring(sourceAntes.lastIndexOf("/") + 1) 
        console.log(nomeArquivoAtual)
        nomeArquivo = sourceImagens.substring(sourceImagens.lastIndexOf("/") + 1)
        srcSet.add(nomeArquivo);
        if (nomeArquivoAtual == permitido) {
            permitidoCount++;
            continue; 
        }
        if (srcSet.has(nomeArquivoAtual)) {
            alert("Não selecione jogadores iguais")
            return false;
        }
        
    }

    return true;
}