let numeroSecreto =  gerearNumeroAletorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = textp;
}

exibirTextoNaTela("h1", 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1,'Acertou!)
        exibirTextoNaTela('p', 'Vocẽ descobriu o número secreto!')
 } else {
    if (chute > numeroSecreto){
       exibirTextoNaTela9('p', 'O número secreto é menor')
    } else {
        exibirTextoNaTela('p', 'o número secreto é maior')
    }
 }
}
function gerearNumeroAletorio(){
    return parseInt(Math.random() * 10 + 1);   

}