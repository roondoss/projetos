var largura = 0
var altura = 0

function  ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    // remover a mosca anterior, caso exista
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
    }

var posicaox = Math.floor(Math.random() * largura) -90
var posicaoy = Math.floor(Math.random() * altura) -90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox, posicaoy)

// Criar elemento HTML

var mosca = document.createElement('img')
mosca.src = 'img/mosca.png'
mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosca.style.left = posicaox + 'px'
mosca.style.top = posicaoy + 'px'
mosca.style.position = 'absolute'
mosca.id = "mosca"  // Atribuindo um Id para a imagem

document.body.appendChild(mosca)
console.log(tamanhoAleatorio())
console.log(ladoAleatorio())
    
}

// Muda de classe conforme resultado
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}


// Inverte o lado da imagem
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

setInterval(function() {
    posicaoRandomica()    
}, 1000);