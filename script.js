
// FORMATAR DATA NO PADRÃO BRASILEIRO
let data = new Date();
function formatarData(data) {
    let newDate = new Date(data);
    return `${newDate.getDate()} | ${newDate.getMonth() + 1} | ${newDate.getFullYear()}`
}
console.log(formatarData(data));

// CALCULAR DIFERENÇA DE DIAS ENTRE DATAS
let diaAtual = new Date();
let dataPassada = new Date(1981, 05, 01);
let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime());
let diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));
console.log(`A diferença de dias é: ' ${diasDeDiferenca}`);

let meses = diasDeDiferenca / 12;


// let idade = diasDeDiferenca / 365;


console.log(`Idade = ${idade}`);

