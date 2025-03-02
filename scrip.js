function clicar(elemento){
    const imagem = elemento.querySelector('img');
    const imagemSrc = imagem.src;
    const ultimoItem = elemento.parentElement.querySelector('.item-resultado img');
    ultimoItem.src = imagemSrc;
}
