var largura = 0
var altura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
alert(nivel)

if (nivel === easy ) {
    criaMoscaTempo = 1500
} else if ( nivel === normal ) {
    criaMoscaTempo = 1000
}else if ( nivel === hard ) {
    criaMoscaTempo = 750
}


function  ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

document.getElementById('cronometro').innerHTML = tempo

var cronometro = setInterval(function () {
    tempo -= 1
    if ( tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'youWin.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
        }
}, 1000);

function posicaoRandomica() {

    // remover a mosca anterior, caso exista, AUTOMATICAMENTE
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        console.log('Elemento selecionado foi: v' + vidas)

        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {
        document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
        vidas++
            }
        
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

mosca.onclick = function () {
    this.remove()   // Remove o proprio elemento que esta executando
}


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

var criaMosca = setInterval(function() {
    posicaoRandomica()    
}, criaMoscaTempo);