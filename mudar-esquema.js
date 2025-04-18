let atual
function verifyEsquemaExisting(){
    if (document.getElementById("esquema")){
        document.getElementById("esquema").remove()
        return false
    } else {
        return true
    }
}

var esquemas = {
    1: ["4-3-3", ["gol", "ld", "zd", "ze", "le", "vol", "mc", "mei", "pd", "pe", "ca"]],
    2: ["4-4-2", ["gol", "ld", "zd", "ze", "le", "vol", "mc", "pd442", "pe442", "ca1", "ca2"]],
    3: ["4-4-2-losango", ["gol", "ld", "zd", "ze", "le", "vol442", "mc1-442", "mc2-442", "mei442", "ca1", "ca2"]],
    4: ["3-4-3", ["gol", "ld3", "zd3", "zc3", "ze3", "le3", "vol3", "mc3", "pe", "pd", "ca"]],
    5: ["3-5-2", ["gol", "ld", "zd3", "zc3", "ze3", "le", "vol", "mc", "mei", "ca1", "ca2"]],
    6: ["3-6-1", ["gol", "ld", "zd3", "zc3", "ze3", "le", "vol442", "mc1-442", "mc2-442", "mei442", "ca"]]
}

function cleanPlayers(){
    let allPlayers = document.getElementsByClassName("jogador")
    let leng = allPlayers.length
    for (i=0; i < leng; i++){
        allPlayers[0].remove()
    }
}

function clicou(elemento, esq, doesLoad){
    verifyEsquemaExisting()
    let players = esquemas[Number(esq)][1]
    cleanPlayers()
    for (i=0; i < players.length; i++){
        let jogadorEscale = document.createElement("img")
        jogadorEscale.setAttribute("class", "jogador")
        jogadorEscale.setAttribute("id", players[i])
        document.getElementById("camp").insertBefore(jogadorEscale, document.getElementById("campo"))
    }
    document.getElementById("camp").setAttribute("class", "campo")
    document.getElementById("camp").classList.add(esquemas[Number(esq)][0])
    if (doesLoad == true){load()}
}

function mudarEsquema(isTier){
    if (verifyEsquemaExisting() == false){
        return
    }
    const camp = document.getElementById("camp")
    const campo = document.getElementById("campo")
    const esquema = document.createElement("div")
    camp.insertBefore(esquema, campo)
    esquema.setAttribute("id", "esquema")
    for (i=1; i < Object.keys(esquemas).length + 1; i++){
        let butao = document.createElement("button")
        esquema.appendChild(butao)
        butao.innerHTML = esquemas[i][0]
        butao.setAttribute("class", "butao")
        if(isTier == true){butao.setAttribute("onclick", `clicou(this, ${i}, true)`)} else {butao.setAttribute("onclick", `clicou(this, ${i})`)}
    }
    
}

let counta = "first"
let countamc = "first"
let countazd = "first"
let countaze = "first"
function clicarEscaleEsq(elemento){
    let ver = verificarDuplicata("jogador", elemento.src)
    if (ver == false){
        return
    }
    var listaClasse = document.getElementById("camp").classList
    if (listaClasse.contains("4-3-3")){
        console.log("É 4-3-3")
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
    } if (listaClasse.contains("4-4-2")){
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
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "pd-esc"){
            document.getElementById("pd442").src = elemento.src
        } if (elemento.id == "pe-esc"){
            document.getElementById("pe442").src = elemento.src
        } if (elemento.id == "ca-esc"){
            let ca1 = document.getElementById("ca1")
            let ca2 = document.getElementById("ca2")
            let ca1src = converterCaminhoParaRelativo(ca1.src)
            let ca2src = converterCaminhoParaRelativo(ca2.src)
            console.log("SOURCE: ", ca1src)
            if (ca1src == "" || ca1src == "imagens/branco.png"){
                console.log("NÃO TEM SOURCE")
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca1.src = elemento.src
                } else{
                    ca2.src = elemento.src
                }
            } else{
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca2.src = elemento.src
                } else{
                    if (counta == "first"){
                        ca1.src = elemento.src
                        counta = "second"
                    } else if (counta == "second"){
                        ca2.src = elemento.src
                        counta = "first"
                    }
                console.log("AGORA O COUNT É", counta)
                }
            }
        }
    } if (listaClasse.contains("4-4-2-losango")){
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
            let vol442 = document.getElementById("vol442")
            let vol442src = converterCaminhoParaRelativo(vol442.src)
            let mc1442 = document.getElementById("mc1-442")
            let mc2442 = document.getElementById("mc2-442")
            let mc1442src = converterCaminhoParaRelativo(mc1442.src)
            let mc2442src = converterCaminhoParaRelativo(mc2442.src)
            if (vol442src == "" || vol442src == "imagens/branco.png"){
                document.getElementById("vol442").src = elemento.src
            } else if (mc1442src == "" || mc1442src == "imagens/branco.png"){
                mc1442.src = elemento.src
            } else if (mc2442src == "" || mc2442src == "imagens/branco.png"){
                mc2442.src = elemento.src
            } else{
                vol442.src = elemento.src
            }
            
        } if (elemento.id == "mc-esc"){
            let mc1442 = document.getElementById("mc1-442")
            let mc2442 = document.getElementById("mc2-442")
            let mc1442src = converterCaminhoParaRelativo(mc1442.src)
            let mc2442src = converterCaminhoParaRelativo(mc2442.src)
            if (mc1442src == "" || mc1442src == "imagens/branco.png"){
                mc1442.src = elemento.src
            } else if (mc2442src == "" || mc2442src == "imagens/branco.png"){
                mc2442.src = elemento.src
            } else{
                if (countamc == "first"){
                    mc1442.src = elemento.src
                    countamc = "second"
                } else if (countamc == "second"){
                    mc2442.src = elemento.src
                    countamc = "first"
                }
            }
        } if (elemento.id == "mei-esc"){
            document.getElementById("mei442").src = elemento.src
        } if (elemento.id == "pd-esc" || elemento.id == "pe-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "ca-esc"){
            
            let ca1 = document.getElementById("ca1")
            let ca2 = document.getElementById("ca2")
            let ca1src = converterCaminhoParaRelativo(ca1.src)
            let ca2src = converterCaminhoParaRelativo(ca2.src)
            console.log("SOURCE: ", ca1src)
            if (ca1src == "" || ca1src == "imagens/branco.png"){
                console.log("NÃO TEM SOURCE")
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca1.src = elemento.src
                } else{
                    ca2.src = elemento.src
                }
            } else{
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca2.src = elemento.src
                } else{
                    if (counta == "first"){
                        ca1.src = elemento.src
                        counta = "second"
                    } else if (counta == "second"){
                        ca2.src = elemento.src
                        counta = "first"
                    }
                console.log("AGORA O COUNT É", counta)
                }
            }
        }
    } if (listaClasse.contains("3-4-3")){
        if (elemento.id == "gol-esc"){
            document.getElementById("gol").src = elemento.src
        } if (elemento.id == "ld-esc"){
            document.getElementById("ld3").src = elemento.src
        } if (elemento.id == "zd-esc"){
            let zd3 = document.getElementById("zd3")
            let zc3 = document.getElementById("zc3")
            let zd3src = converterCaminhoParaRelativo(zd3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (zd3src == "" || zd3src == "imagens/branco.png"){
                zd3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countazd == "first"){
                    zd3.src = elemento.src
                    countazd = "second"
                } else if (countazd == "second"){
                    zc3.src = elemento.src
                    countazd = "first"
                }
            }
        } if (elemento.id == "ze-esc"){
            let ze3 = document.getElementById("ze3")
            let zc3 = document.getElementById("zc3")
            let ze3src = converterCaminhoParaRelativo(ze3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (ze3src == "" || ze3src == "imagens/branco.png"){
                ze3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countaze == "first"){
                    ze3.src = elemento.src
                    countaze = "second"
                } else if (countaze == "second"){
                    zc3.src = elemento.src
                    countaze = "first"
                }
            }
        } if (elemento.id == "le-esc"){
            document.getElementById("le3").src = elemento.src
        } if (elemento.id == "vol-esc"){
            document.getElementById("vol3").src = elemento.src
        } if (elemento.id == "mc-esc"){
            document.getElementById("mc3").src = elemento.src
        } if (elemento.id == "mei-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "pd-esc"){
            document.getElementById("pd").src = elemento.src
        } if (elemento.id == "pe-esc"){
            document.getElementById("pe").src = elemento.src
        } if (elemento.id == "ca-esc"){
            document.getElementById("ca").src = elemento.src
        }
    } if (listaClasse.contains("3-5-2")){
        if (elemento.id == "gol-esc"){
            document.getElementById("gol").src = elemento.src
        } if (elemento.id == "ld-esc"){
            document.getElementById("ld").src = elemento.src
        } if (elemento.id == "zd-esc"){
            let zd3 = document.getElementById("zd3")
            let zc3 = document.getElementById("zc3")
            let zd3src = converterCaminhoParaRelativo(zd3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (zd3src == "" || zd3src == "imagens/branco.png"){
                zd3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countazd == "first"){
                    zd3.src = elemento.src
                    countazd = "second"
                } else if (countazd == "second"){
                    zc3.src = elemento.src
                    countazd = "first"
                }
            }
        } if (elemento.id == "ze-esc"){
            let ze3 = document.getElementById("ze3")
            let zc3 = document.getElementById("zc3")
            let ze3src = converterCaminhoParaRelativo(ze3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (ze3src == "" || ze3src == "imagens/branco.png"){
                ze3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countaze == "first"){
                    ze3.src = elemento.src
                    countaze = "second"
                } else if (countaze == "second"){
                    zc3.src = elemento.src
                    countaze = "first"
                }
            }
        } if (elemento.id == "le-esc"){
            document.getElementById("le").src = elemento.src
        } if (elemento.id == "vol-esc"){
            document.getElementById("vol").src = elemento.src
        } if (elemento.id == "mc-esc"){
            document.getElementById("mc").src = elemento.src
        } if (elemento.id == "mei-esc"){
            document.getElementById("mei").src = elemento.src
        } if (elemento.id == "pd-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "pe-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "ca-esc"){
            let ca1 = document.getElementById("ca1")
            let ca2 = document.getElementById("ca2")
            let ca1src = converterCaminhoParaRelativo(ca1.src)
            let ca2src = converterCaminhoParaRelativo(ca2.src)
            console.log("SOURCE: ", ca1src)
            if (ca1src == "" || ca1src == "imagens/branco.png"){
                console.log("NÃO TEM SOURCE")
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca1.src = elemento.src
                } else{
                    ca2.src = elemento.src
                }
            } else{
                if (ca2src == "" || ca2src == "imagens/branco.png"){
                    ca2.src = elemento.src
                } else{
                    if (counta == "first"){
                        ca1.src = elemento.src
                        counta = "second"
                    } else if (counta == "second"){
                        ca2.src = elemento.src
                        counta = "first"
                    }
                console.log("AGORA O COUNT É", counta)
                }
            }
        }
    } if (listaClasse.contains("3-6-1")){
        if (elemento.id == "gol-esc"){
            document.getElementById("gol").src = elemento.src
        } if (elemento.id == "ld-esc"){
            document.getElementById("ld").src = elemento.src
        } if (elemento.id == "zd-esc"){
            let zd3 = document.getElementById("zd3")
            let zc3 = document.getElementById("zc3")
            let zd3src = converterCaminhoParaRelativo(zd3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (zd3src == "" || zd3src == "imagens/branco.png"){
                zd3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countazd == "first"){
                    zd3.src = elemento.src
                    countazd = "second"
                } else if (countazd == "second"){
                    zc3.src = elemento.src
                    countazd = "first"
                }
            }
        } if (elemento.id == "ze-esc"){
            let ze3 = document.getElementById("ze3")
            let zc3 = document.getElementById("zc3")
            let ze3src = converterCaminhoParaRelativo(ze3.src)
            let zc3src = converterCaminhoParaRelativo(zc3.src)
            if (ze3src == "" || ze3src == "imagens/branco.png"){
                ze3.src = elemento.src
            } else if (zc3src == "" || zc3src == "imagens/branco.png"){
                zc3.src = elemento.src
            } else{
                if (countaze == "first"){
                    ze3.src = elemento.src
                    countaze = "second"
                } else if (countaze == "second"){
                    zc3.src = elemento.src
                    countaze = "first"
                }
            }
        } if (elemento.id == "le-esc"){
            document.getElementById("le").src = elemento.src
        } if (elemento.id == "vol-esc"){
            let vol442 = document.getElementById("vol442")
            let vol442src = converterCaminhoParaRelativo(vol442.src)
            let mc1442 = document.getElementById("mc1-442")
            let mc2442 = document.getElementById("mc2-442")
            let mc1442src = converterCaminhoParaRelativo(mc1442.src)
            let mc2442src = converterCaminhoParaRelativo(mc2442.src)
            if (vol442src == "" || vol442src == "imagens/branco.png"){
                document.getElementById("vol442").src = elemento.src
            } else if (mc1442src == "" || mc1442src == "imagens/branco.png"){
                mc1442.src = elemento.src
            } else if (mc2442src == "" || mc2442src == "imagens/branco.png"){
                mc2442.src = elemento.src
            } else{
                vol442.src = elemento.src
            }
            
        } if (elemento.id == "mc-esc"){
            let mc1442 = document.getElementById("mc1-442")
            let mc2442 = document.getElementById("mc2-442")
            let mc1442src = converterCaminhoParaRelativo(mc1442.src)
            let mc2442src = converterCaminhoParaRelativo(mc2442.src)
            if (mc1442src == "" || mc1442src == "imagens/branco.png"){
                mc1442.src = elemento.src
            } else if (mc2442src == "" || mc2442src == "imagens/branco.png"){
                mc2442.src = elemento.src
            } else{
                if (countamc == "first"){
                    mc1442.src = elemento.src
                    countamc = "second"
                } else if (countamc == "second"){
                    mc2442.src = elemento.src
                    countamc = "first"
                }
            }
        } if (elemento.id == "mei-esc"){
            document.getElementById("mei442").src = elemento.src
        } if (elemento.id == "pd-esc" || elemento.id == "pe-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "ca-esc"){
            document.getElementById("ca").src = elemento.src
        }
    }
        
}

function converterCaminhoParaRelativo(caminhoAbsoluto) {
    const diretorioBase = 'https://janeladosport.github.io/MANO-A-MANO-TIMES-DO-NORDESTE/';
    if (caminhoAbsoluto.startsWith('file:///') && caminhoAbsoluto.includes(diretorioBase)) {
        return caminhoAbsoluto.replace('file:///' + diretorioBase, '');
    }
    return caminhoAbsoluto;
}

window.addEventListener("resize", function (){mudou();})

function mudou(){
    let muda = document.querySelector("a[onclick='mudarEsquema()']")
    if (window.innerWidth <= 425){
        muda.style.setProperty("display", "none", "important")
    } else if (window.innerWidth <= 1210){
        muda.style.setProperty("display", "inline", "important")
    } else {
        muda.style.setProperty("display", "block", "important")
    } 
}

