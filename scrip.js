function count(){
    if (!document.querySelector('.counter-um')){console.log("não tem");return}
    let itemsResult = document.querySelectorAll(".item-resultado")
    let counterUm = 0
    let counterDois = 0
    for (i=0; i < itemsResult.length; i++){ 
        if (itemsResult[i].classList.contains('time-um')){
            counterUm = counterUm + 1
        } else if (itemsResult[i].classList.contains('time-dois')){
            counterDois = counterDois + 1
        }
    }
    console.log("COUNTER DOIS É", counterDois)
    document.querySelector('.counter-um').innerHTML = counterUm
    document.querySelector('.counter-dois').innerHTML = counterDois

}

function clicar(elemento){
    const imagem = elemento.querySelector('img');
    const imagemSrc = imagem.src;
    const ultimoItem = elemento.parentElement.querySelector('.item-resultado img');
    ultimoItem.src = imagemSrc;
    let itemResultado = elemento.parentElement.querySelector(".item-resultado")
    if (itemResultado.classList.contains("time-um")){itemResultado.classList.remove("time-um")} else if (itemResultado.classList.contains("time-dois")){itemResultado.classList.remove("time-dois")}
    itemResultado.classList.add(elemento.classList[1])
    count()
}

function limpar(){
    const resultado = document.getElementsByClassName("item-resultado")
    console.log(resultado)

    for (let i = 0; i < resultado.length; i++){
        resultado[i].querySelector('img').remove()
        let img = document.createElement('img')
        resultado[i].append(img)
    }
}