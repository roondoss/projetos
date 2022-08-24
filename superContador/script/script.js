function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados')
        res.innerHTML = 'Impossível Contar!!!'
    } else {
        res.innerHTML = 'Contando <BR> ' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {  // SUBSTITUINDO ENTRADA INVÁLIDA
            window.alert('Passo Inválido! Considerando Pass 1.')
            p = 1
        }

        if (i < f) {
            // Contagem Progressiva
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p)
            res.innerHTML += `\u{1F449} ${c} `
        }
        res.innerHTML += `\u{1f3c1}`
    }
}