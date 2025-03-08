<<<<<<< HEAD
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
=======
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
>>>>>>> 92c27306c1797e9dbc342f5d7e09dc9afd23b078
}