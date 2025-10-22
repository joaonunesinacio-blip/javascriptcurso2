let listaDeNumerosSorteados = [];
let numeroSecreto = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }
 
 function exbirMensagemIncial() {
     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }
 exbirMensagemIncial();
 
 function verificarChute() {
     let chute = document.querySelector('input').value;
 
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativa' :
        'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com
         ${tentativas} ${palavraTentativa}!`;
         exibirTextoNaTela('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute
         ('disabled');
    } else {
        if (chute > numeroSecreto) {
             exibirTextoNaTela('p', 'O número secreto é menor');
         } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
         }
         tentativas++;
        limparCampo
     }
 }

 function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados
            return numeroEscolhido;
        )
    }
 }

 function limparCampo() {
    chute  = document.querySelector('input');
    chute.value = '';
 }