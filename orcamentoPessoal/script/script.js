class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados () {
        for(let i in this) {
            if (this[i] == undefined || this[i] =='' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor() {  // ATRIBUINDO UM VALOR INICIAL DE ID
        let id = localStorage.getItem('id')
        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }
    
    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }
    recuperarTodosRegistros() {
        console.log('Chegando')

        let despesas = Array()

        let id = localStorage.getItem('id')

        // Recuperar todas as despesas
        for ( let i = 1; i <= id; i++ ) {
            // Resuperar despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            // verificar se indice foi removido e pular
            if ( despesa === null) {
                continue
            }

            despesas.push(despesa)

            //console.log(despesas)
        }

        return despesas
    }
}

let bd = new Bd()


function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if ( despesa.validarDados() ) {
        bd.gravar(despesa)  // sucesso
        document.getElementById('modal_titulo').innerHTML = 'Registro Inserido com Sucesso'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo').innerHTML = 'Despesa Cadastrada com Sucesso'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_btn').className = 'btn btn-success'
        $('#modalRegistraDespesa').modal('show')
    } else {
        document.getElementById('modal_titulo').innerHTML = 'ERRO ao Inserir o Registro'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Verifique os Campos Preenchidos'
        document.getElementById('modal_btn').innerHTML = 'Voltar e Corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'
        $('#modalRegistraDespesa').modal('show')
    }
    
}

function carregaListaDespesas() {
    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()

    console.log(despesas)
}