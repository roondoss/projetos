function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    // var hora = 13
    var pDia = ''

    msg.innerHTML = `Agora são ${hora}:${min} da ${pDia}`

    if (hora >= 0 && hora < 12) {
        var pDia = "Manha"
        // Bom dia
        img.src = 'assets/manha.png'
        document.body.style.background = '#486B53'
    } else if (hora >= 12 && hora < 18) {
        pDia = "Tarde"
        // Boa tarde
        img.src = 'assets/tarde.png'
        document.body.style.background = '#A64835'
    } else {
        pDia = "Noite"
        // Boa noite
        img.src = 'assets/noite.png'
        document.body.style.background = '#3B458B'
    }
}