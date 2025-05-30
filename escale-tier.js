let escudos = [
    ["imagens/escudos/sport.svg", "Sport"],
    ["imagens/escudos/fortaleza.png", "Fortaleza"],
    ["imagens/escudos/sao-paulo.webp", "São Paulo"],
    ["imagens/escudos/palmeiras.png", "Palmeiras"],
    ["imagens/escudos/inter.png", "Internacional"],
    ["imagens/escudos/ceara.png", "Ceará"],
    ["imagens/escudos/flamengo.png", "Flamengo"],
    ["imagens/escudos/corinthians.png", "Corinthians"],
    ["imagens/escudos/gremio.png", "Grêmio"],
    ["imagens/escudos/bahia.png", "Bahia"],
    ["imagens/escudos/fluminense.png", "Fluminense"],
    ["imagens/escudos/atletico.png", "Atlético-MG"],
    ["imagens/escudos/juventude.png", "Juventude"],
    ["imagens/escudos/mirassol.png", "Mirassol"],
    ["imagens/escudos/botafogo.png", "Botafogo"],
    ["imagens/escudos/bragantino.png", "Bragantino"],
    ["imagens/escudos/vitoria.png", "Vitória"],
    ["imagens/escudos/vasco.png", "Vasco"],
    ["imagens/escudos/cruzeiro.png", "Cruzeiro"],
    ["imagens/escudos/santos.png", "Santos"]
]

let tecnicos = {
    Fortaleza: "imagens/fortaleza/vojvoda.png",
    Sport: "imagens/sport/pepa.png",
    Bahia: "imagens/bahia/rogerio-ceni.png",
    Ceara: "imagens/ceara/leo-conde.png",
    Vitoria: "imagens/vitoria/thiago-carpini.png"
}
function selectTimeTierList(selection){
    var drag = document.createElement("div")
    limparTierMaker(drag)
    var time = selection.value
    var jogadores = timesFut[time]
    document.body.appendChild(drag)
    drag.classList.add("tier-container")
    drag.setAttribute("id", "tier-select-content")
    for (i=0; i < jogadores.length; i++){
        var draggable = document.createElement("img")
        draggable.src = jogadores[i]
        drag.appendChild(draggable)
        draggable.setAttribute("class", "player")
        draggable.setAttribute("draggable", "true")
    }
        load()
    }
let firstTime = false
function selectElencoTierList(selection){
    limparCampoEscale()
    var drag = document.createElement("div")
    limparTierMaker(drag)
    var time = selection.value
    var players = dados[time]
    document.body.appendChild(drag)
    drag.classList.add("tier-container")
    drag.setAttribute("id", "tier-select-content")
    for(h=0; h < players.length; h++){
        let jogadores = players[h]
        let span = document.createElement("span")
        span.innerHTML = jogadores[0]
        drag.appendChild(span)
        for (i=2; i < jogadores.length; i++){
            var draggable = document.createElement("img")
            draggable.src = jogadores[i]
            drag.appendChild(draggable)
            draggable.setAttribute("class", "player")
            draggable.setAttribute("draggable", "true")
        }
    }
        
    if (firstTime == false){
        let newSpan = document.createElement("span")
        newSpan.innerHTML = "ARRASTE O JOGADOR PARA A POSIÇÃO"
        document.body.appendChild(newSpan)
        newSpan.id = "new-span"
        newSpan.style.position = "absolute"
        newSpan.style.transform = "translateX(-50%)"
        newSpan.style.left = "50%"
        newSpan.style.top = 0
        newSpan.style.width = "98vw"
        newSpan.style.backgroundColor = "rgba(241, 22, 22, 0.34)"
        newSpan.style.textAlign = "center"
        newSpan.style.padding = "5px 0 "
        firstTime = true
    }
    load()
    }

function limparTierMaker(drag){
    let tierContainer = document.querySelectorAll('.tier-container')
    for (i=0; i < tierContainer.length; i++){
        let imgsContainer = tierContainer[i].querySelectorAll("img")
        for (h=0; h < imgsContainer.length; h++){
            imgsContainer[h].remove()
        }
    }
    for (i=0; i < drag.length; i++){
        let dragimgs = drag[i].querySelectorAll("img")
        for (h=0; h < dragimgs.length; h++){
            dragimgs[h].remove()
        }
    }
    let tsc = document.getElementById("tier-select-content")
    let tpr = document.getElementById("tier-person")
    if (tsc){tsc.remove()}
    if (tpr){tpr.remove()}
}


function converterCaminhoParaRelativo(caminhoAbsoluto) {
    const diretorioBase = 'https://janeladosport.github.io/MANO-A-MANO-TIMES-DO-NORDESTE/';
    if (caminhoAbsoluto.startsWith('file:///') && caminhoAbsoluto.includes(diretorioBase)) {
        return caminhoAbsoluto.replace('file:///' + diretorioBase, '');
    }
    return caminhoAbsoluto;
}

function load(cantTwo){
    const images = document.querySelectorAll(".player");
    const dropZones = document.getElementById("camp").querySelectorAll("img");
    let isOverDropZone = false;
            document.body.addEventListener("dragover", (e) => {
                e.preventDefault();
                if (!isOverDropZone) {
                    document.body.style.cursor = "not-allowed";
                }
            });
    
            document.body.addEventListener("drop", (e) => {
                e.preventDefault(); // Impede que imagens sejam soltas em qualquer lugar
                document.body.style.cursor = "default"; 
            });
            const smallPlaceholder = document.createElement("canvas");
            smallPlaceholder.width = 10;
            smallPlaceholder.height = 10;
            const ctx = smallPlaceholder.getContext("2d");
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fillRect(0, 0, 10, 10);
            images.forEach(img => {
                
                img.addEventListener("dragstart", (e) => {
                    e.dataTransfer.setData("text/plain", e.target.id);
                    e.target.classList.add("dragging");
                    document.body.style.cursor = "not-allowed"; // Cursor proibido por padrão
                    e.dataTransfer.setDragImage(smallPlaceholder, 5, 5)
                });
    
                img.addEventListener("dragend", (e) => {
                    e.target.classList.remove("dragging");
                    document.body.style.cursor = "default"; // Retorna ao normal ao soltar
                });
            });
            removeAllEventListeners(dropZones)
            dropZones.forEach(zone => {
                if (zone.id != 'campo'){
                zone.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    isOverDropZone = true; // Marca que estamos sobre uma área válida
                    document.body.style.cursor = "default"; // Cursor normal dentro da zona
                }, {once: true});
    
                zone.addEventListener("dragleave", () => {
                    isOverDropZone = false; // Saiu da zona válida
                    document.body.style.cursor = "not-allowed"; // Volta para proibido
                }, {once: true});
    
                zone.addEventListener("drop", (e) => {
                    e.preventDefault();
                    isOverDropZone = false; // Soltou na zona válida
                    const draggedElement = document.querySelector(".dragging");
                    if (draggedElement) {
                        console.log(document.getElementsByClassName("jogador"), draggedElement.src)
                        let ver = verificarDuplicataTier("jogador", draggedElement.src)
                        
                        if (ver == false){
                            console.log(ver)
                            return
                        }
                        zone.src = draggedElement.src
                        if (firstTime == true){let newspan = document.getElementById("new-span"); if(newspan){newspan.remove()}}
                        let nomeInner = draggedElement.getAttribute("data-value") 
                        draggedElement.addEventListener("dragstart", (e) => {
                            e.dataTransfer.setData("text/plain", e.target.id);
                            e.target.classList.add("dragging");
                            document.body.style.cursor = "not-allowed"; // Cursor proibido por padrão
                            e.dataTransfer.setDragImage(smallPlaceholder, 5, 5)
                        }, {once:true});
            
                        draggedElement.addEventListener("dragend", (e) => {
                            e.target.classList.remove("dragging");
                            document.body.style.cursor = "default"; // Retorna ao normal ao soltar
                        }, {once:true})}                       
                        if(zone.id != "tier-select-content"){draggedElement.classList.add("selected")} else if (draggedElement.classList.contains("selected")){draggedElement.classList.remove("selected")}
                    verificarTimesTier()
                    document.body.style.cursor = "default"; // Cursor normal ao soltar na área correta

                }, { once: true }); }
            }, {once: true})   
        }
    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

function verificarTimesTier(){
   let containers = document.getElementById("camp").querySelectorAll("img")
    for (i=0; i < containers.length; i ++){
        if (!containers[i].querySelector(".player")){
            return
        }
    }
    console.log("JÁ PODE BAIXAR")
    let newButton = document.createElement("a")
    document.body.appendChild(newButton)
    newButton.id = "voltar"
    newButton.innerHTML = "BAIXAR TABELA"
    newButton.style.position = "fixed"
    newButton.style.left = "1%"
    newButton.setAttribute("onclick", "salvar()")
    newButton.style.width = "unset"
}
let alreadySelected = false
function colocar(source, element){
    let players = document.getElementsByClassName("player")
        for (i=0; i < players.length; i++){
            let playerEspO = players[i]
            let playerEsp = converterCaminhoParaRelativo(source)
            players[i].addEventListener("click", async function change(){
                let playersNew = document.getElementsByClassName("player")
                let nomeArquivo
                let srcSet = new Set()
                let retorno = false
                for (h=0; h < playersNew.length; h++){
                    let atual = converterCaminhoParaRelativo(playersNew[h].src)
                    if (srcSet.has(playerEsp)){
                       document.getElementById("selectable").style.display = "none"
                       document.getElementById("tier-select-content").classList.add("selecione-jogador")
                       document.getElementById("alert").style.display = "block"
                        element.classList.remove("selecionado")
                        alreadySelected = false
                        retorno = true
                        await esperar(2500);
                       document.getElementById("alert").style.display = "none"
                       document.getElementById("tier-select-content").classList.remove("selecione-jogador")
                        return                        
                    } 
                    if (retorno == true){
                        return
                    }
                    srcSet.add(atual)
                }
                playerEspO.src = source
                element.classList.remove("selecionado")
                alreadySelected = false
                document.getElementById("selectable").style.display = "none"
                document.getElementById("tier-select-content").classList.remove("selecione-jogador")
                document.getElementById("alert").style.display = "none"
                return
                
            })
        }
}


function changePlayerTier(element){
    document.getElementById("alert").style.display = "none"
    let source = element.src
    document.getElementById("selectable").style.display = "block"
    document.getElementById("tier-select-content").classList.add("selecione-jogador")
    if (alreadySelected == false){
        element.classList.add("selecionado")
        alreadySelected = true
        colocar(source, element)
    } else{
        let players = document.getElementsByClassName("player")
        for (i=0; i < players.length; i++){players[i].removeEventListener('click', false)}
        document.getElementsByClassName("selecionado")[0].classList.remove("selecionado")
        element.classList.add("selecionado")
        alreadySelected = true
        colocar(source, element)
    }
}
        
function personalizarTier(){
    if (document.querySelector("select[onchange='selectTimeTierList(this)'").value == "Time"){
        return
    }
    let time = document.querySelector("select[onchange='selectTimeTierList(this)'").value
    let timeValor = dados[time]
    let tp = document.getElementById("tier-person")
    if (tp){
        tp.remove()
        return
    }
    let tpNew = document.createElement("div")
    tpNew.setAttribute("id", "tier-person")
    document.body.appendChild(tpNew)
    let avoltar = document.createElement("a")
    avoltar.id = "voltar"
    avoltar.setAttribute("onclick", "personalizarTier()")
    avoltar.innerHTML = "CONCLUIR"
    tpNew.appendChild(avoltar)
    for (i=0; i < timeValor.length; i++){
        let div = document.createElement("div")
        let span = document.createElement("div")
        let timeI = timeValor[i]
        let nome = timeI[0]
        let id = timeI[1]
        span.innerHTML = nome
        tpNew.appendChild(div)
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
                imagem.setAttribute("onclick", "changePlayerTier(this)")
                imagem.setAttribute("id", id)
            }
        }

}

function adReservas(){
    let tierContent = document.getElementById("tier-select-content")
    let reservas = document.getElementsByClassName("reserva")
    if (reservas.length > 0){personalizarTier(); return; window.scrollTo({ top: document.getElementById("tier-person").offsetTop - 180, behavior: "smooth" })}
    if (tierContent){
        for (i=0; i < 5; i++){
            let newImg = document.createElement("img")
            tierContent.appendChild(newImg)
            newImg.innerHTML = `Reserva ${i+1}`
            newImg.setAttribute("class", "player")
            newImg.classList.add("reserva")
        newImg.setAttribute("draggable", "true")
        }
        let trainer = document.createElement("img")
        trainer.src = tecnicos[document.getElementById("timeUm").value]
        tierContent.append(trainer)
        trainer.setAttribute("class", "player")
        trainer.setAttribute("draggable", "true")
        load()
        window.scrollTo({ top: document.getElementById("tier-person").offsetTop - 180, behavior: "smooth" })
    }
}

function verificarDuplicataTier(classe, source){
    let imagens = document.getElementsByClassName(classe);
    let srcSet = new Set();
    let permitidoCount = 0;
    let permitido = "branco.png"
   
    for (i=0; i < imagens.length; i++) {
        nomeArquivoAtual = source.substring(source.lastIndexOf("/") + 1) 
        nomeArquivo = imagens[i].src.substring(imagens[i].src.lastIndexOf("/") + 1)
        
        if (nomeArquivoAtual == permitido) {
            permitidoCount++;
            continue; 
        }
        if (nomeArquivoAtual == nomeArquivo) {
            alert("Não selecione jogadores iguais")
            console.log("SRC SET", srcSet, "NOME ATUAL", nomeArquivoAtual, "NOME ARQUIVO", nomeArquivo, imagens, imagens[i])
            return false;
        }
        srcSet.add(nomeArquivo);
    }

    return true;
}

function removeAllEventListeners(objects){
    objects.forEach(zone => {
        zone.removeEventListener("dragover", (e) => {
            e.preventDefault();
            isOverDropZone = true; // Marca que estamos sobre uma área válida
            document.body.style.cursor = "default"; // Cursor normal dentro da zona
        });

        zone.removeEventListener("dragleave", () => {
            isOverDropZone = false; // Saiu da zona válida
            document.body.style.cursor = "not-allowed"; // Volta para proibido
        });

        zone.removeEventListener("drop", (e) => {
            e.preventDefault();
            isOverDropZone = false; // Soltou na zona válida
            const draggedElement = document.querySelector(".dragging");
            if (draggedElement) {
                console.log(document.getElementsByClassName("jogador"), draggedElement.src)
                let ver = verificarDuplicataTier("jogador", draggedElement.src)
                
                if (ver == false){
                    console.log(ver)
                    return
                }
                zone.src = draggedElement.src
                if (firstTime == true){let newspan = document.getElementById("new-span"); if(newspan){newspan.remove()}}
                let nomeInner = draggedElement.getAttribute("data-value") 
                draggedElement.removeEventListener("dragstart", (e) => {
                    e.dataTransfer.setData("text/plain", e.target.id);
                    e.target.classList.add("dragging");
                    document.body.style.cursor = "not-allowed"; // Cursor proibido por padrão
                    e.dataTransfer.setDragImage(smallPlaceholder, 5, 5)
                });
    
                draggedElement.removeEventListener("dragend", (e) => {
                    e.target.classList.remove("dragging");
                    document.body.style.cursor = "default"; // Retorna ao normal ao soltar
                })}                       
                if(zone.id != "tier-select-content"){draggedElement.classList.add("selected")} else if (draggedElement.classList.contains("selected")){draggedElement.classList.remove("selected")}
            document.body.style.cursor = "default"; // Cursor normal ao soltar na área correta

        })
    })
}