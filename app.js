let listaDeNumerosSorteados = [];
let numeroSecreto = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto 'Brazilian Portuguese Female',)
}

function exbirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exbirMensagemIncial();rearNumeroAletorio();

function verificarChute() {
    let chute = document.querySelector('input').value;

if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' :
    'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com
    ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p1', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute
    ('disabled');
} else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exbirMensagemInciale();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}