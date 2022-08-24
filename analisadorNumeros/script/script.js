let num = document.querySelector('input#fNum')
let lista = document.querySelector('select#fLista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {  // VERIFICA UM RANGE DE NUMEROS
    if ( Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {    //  VERIFICA SE O NUMERO ESTA NA LISTA
    if (l.indexOf(Number(n)) != -1 )  {
        return true
    } else {
        false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(' Valor inválido ou já encontrado na lista.')
    }
    num.value = ''   // ZERA O VALOR NA CAIXA DE DIGITAÇÃO
    num.focus()      // FOCA NA CAIXA DE DIGITAÇÃO
}

function finalizar() {
    if ( valores.length == 0 ){
        window.alert( ' Adicione valores antes de finalizar! ' )
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if ( valores[pos] > maior )
            maior = valores[pos]
            if ( valores[pos] < menor )
            menor = valores[pos]
            res.innerHTML = ''
        
        }
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi:  ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi:  ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores é:  ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores é:  ${media}.</p>`
    }
}
function limpar() {
    num.value = ''
    valores = []    
}