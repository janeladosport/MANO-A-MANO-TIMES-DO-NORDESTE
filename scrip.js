function clicar(elemento){
    const imagem = elemento.querySelector('img');
    const imagemSrc = imagem.src;
    const ultimoItem = elemento.parentElement.querySelector('.item-resultado img');
    ultimoItem.src = imagemSrc;
    
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