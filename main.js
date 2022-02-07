/*A criação de funções em JS é para que o meu script só seja executado quando eu quiser não assim que carregar a pagina */
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    /*No html o 0 é minha class tecla e o 1 é minha class tecla_pom ou tecla_clap e assim por diante */
    const instrumento = tecla.classList[1];

    //O ato de usar as crases para juntar a string com a variavel e chama template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    /*Add um evento de teclado para quando apertar a tecla o me teclado ficar vermelho igual acontece quando clica o mouse */
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    /*Tirando a marcação vermelha do teclado quando o usuário soltar a tecla apertada */
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}



