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

function limparTierMaker(drag){
    let tierContainer = document.querySelectorAll('.container')
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
    const dropZones = document.querySelectorAll(".tier-container");
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
    
            dropZones.forEach(zone => {
                zone.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    isOverDropZone = true; // Marca que estamos sobre uma área válida
                    zone.style.borderColor = "green";
                    document.body.style.cursor = "default"; // Cursor normal dentro da zona
                });
    
                zone.addEventListener("dragleave", () => {
                    isOverDropZone = false; // Saiu da zona válida
                    zone.style.borderColor = "#aaa";
                    document.body.style.cursor = "not-allowed"; // Volta para proibido
                });
    
                zone.addEventListener("drop", (e) => {
                    e.preventDefault();
                    isOverDropZone = false; // Soltou na zona válida
                    const draggedElement = document.querySelector(".dragging");
                    console.log("É IMG", draggedElement)
                    if (draggedElement) {
                        
                        if (cantTwo == true){
                            if (zone.querySelector("img") && zone.id != "tier-person" && draggedElement.tagName == "DIV"){
                                let sibling = zone.querySelector(".escudos").nextElementSibling
                                if (sibling){sibling.remove()}
                                document.getElementById("tier-person").appendChild(zone.querySelector("img"))
                                
                            } else if (zone.querySelector("img") && zone.id != "tier-person" && draggedElement.tagName == "IMG"){
                                let sibling = zone.querySelector(".escudos").nextElementSibling
                                document.getElementById("tier-person").appendChild(zone.querySelector("img"))
                                let parent = sibling.parentElement
                                if (sibling){sibling.remove(); parent.remove()}
                            } else if (zone.id == "tier-person" && draggedElement.tagName == "DIV"){
                                draggedElement.lastElementChild.remove()
                                let img = draggedElement.firstElementChild
                                draggedElement.remove()
                                document.getElementById("tier-person").appendChild(img)
                            } else if (zone.id == "tier-person" && draggedElement.tagName == "IMG"){
                                draggedElement.nextElementSibling.remove()
                                let img = draggedElement
                                draggedElement.parentElement.remove()
                                document.getElementById("tier-person").appendChild(draggedElement)
                                return
                            } 
                        } 
                        if (draggedElement.parentElement && draggedElement.parentElement.classList.contains("player")){
                            zone.appendChild(draggedElement.parentElement)
                        }
                        else if (zone.id != "tier-person"){
                            console.log("não é tier person")
                            let divPlayer = document.createElement("div")
                        zone.appendChild(divPlayer);
                        let nome = document.createElement("span")
                        nome.classList.add("nome")
                        let nomeInner = draggedElement.getAttribute("data-value") 
                        divPlayer.classList.add("player")
                        divPlayer.appendChild(draggedElement)
                        divPlayer.setAttribute("draggable", "true")
                        divPlayer.addEventListener("dragstart", (e) => {
                            e.dataTransfer.setData("text/plain", e.target.id);
                            e.target.classList.add("dragging");
                            document.body.style.cursor = "not-allowed"; // Cursor proibido por padrão
                            e.dataTransfer.setDragImage(smallPlaceholder, 5, 5)
                        });
            
                        divPlayer.addEventListener("dragend", (e) => {
                            e.target.classList.remove("dragging");
                            document.body.style.cursor = "default"; // Retorna ao normal ao soltar
                        });
                        nome.innerHTML = nomeInner
                        draggedElement.insertAdjacentElement("afterend", nome)
                        }
                        
                        if(zone.id != "tier-select-content"){draggedElement.classList.add("selected")} else if (draggedElement.classList.contains("selected")){draggedElement.classList.remove("selected")}
                        
                    }
                    verificarTimesTier()
                    document.body.style.cursor = "default"; // Cursor normal ao soltar na área correta

                });
            });    
        }
    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

function verificarTimesTier(){
   let containers = document.getElementById("tier").querySelectorAll(".tier-container")
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