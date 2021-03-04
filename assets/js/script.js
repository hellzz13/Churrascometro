let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    console.log("calculando o gasto...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePessoa(duracao) * adultos + (carnePessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPessoa(duracao) * adultos;
    let qtdTotalBebida = bebidaPessoa(duracao) * adultos + (bebidaPessoa(duracao) / 2 * criancas);

    // console.log(qtdTotalCarne);
    // console.log(qtdTotalCerveja);
    // console.log(qtdTotalBebida);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}kg de carne`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} latas de cerveja`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} garrafas de 2l de bebida`;
}

function carnePessoa(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidaPessoa(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}