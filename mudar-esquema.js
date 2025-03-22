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
    4: ["3-4-3"],
    5: ["3-5-2"],
    6: ["3-6-1"]
}

function cleanPlayers(){
    let allPlayers = document.getElementsByClassName("jogador")
    let leng = allPlayers.length
    for (i=0; i < leng; i++){
        allPlayers[0].remove()
    }
}

function clicou(elemento, esq){
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
}

function mudarEsquema(){
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
        butao.setAttribute("onclick", `clicou(this, ${i})`)
    }
}

let counta = "first"
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
            console.log("SOURCE: ", ca1.src)
            if (ca1.src == "" || ca1.src == "imagens/branco.png"){
                console.log("NÃO TEM SOURCE")
                if (ca2.src == "" || ca2.src == "imagens/branco.png"){
                    ca1.src = elemento.src
                } else{
                    ca2.src = elemento.src
                }
            } else{
                if (ca2.src == "" || ca2.src == "imagens/branco.png"){
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
            document.getElementById("vol442").src = elemento.src
        } if (elemento.id == "mc-esc"){
            document.getElementById("mc").src = elemento.src
        } if (elemento.id == "mei-esc"){
            document.getElementById("mei").src = elemento.src
        } if (elemento.id == "pd-esc" || elemento.id == "pe-esc"){
            alert("O ESQUEMA NÃO SUPORTA JOGADORES DESSA POSIÇÃO")
        } if (elemento.id == "ca-esc"){
            
            let ca1 = document.getElementById("ca1")
            let ca2 = document.getElementById("ca2")
            console.log("SOURCE: ", ca1.src)
            if (ca1.src == "" || ca1.src == "imagens/branco.png"){
                console.log("NÃO TEM SOURCE")
                if (ca2.src == "" || ca2.src == "imagens/branco.png"){
                    ca1.src = elemento.src
                } else{
                    ca2.src = elemento.src
                }
            } else{
                if (ca2.src == "" || ca2.src == "imagens/branco.png"){
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
    }
        
}