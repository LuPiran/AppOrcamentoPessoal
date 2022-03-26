
//Criando o objeto Despesa com construtor
class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

//Recuperando o valor dos campos pelo ID
function cadastrarDespesa(){
    let ano = document.getElementById('ano')
    let mes =document.getElementById('mes')
    let dia =document.getElementById('dia')
    let tipo =document.getElementById('tipo')
    let descricao =document.getElementById('descricao')
    let valor =document.getElementById('valor')

    

    //Instanciando o objeto Despesa
    let despesa = new Despesa(
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value
    )
}