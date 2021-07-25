
/* global vetorAuxiliar, vetorEmbaralhado, vetorParDeCartas, vetorCartasJogadas, vetorIdBotoes */
//Guarda todas as classes referente a cada imagem
vetorDeClasses = new Array("imagem1", "imagem2", "imagem3", "imagem4", "imagem5", "imagem6");
//Guarda as cartas ambaralhadas
vetorEmbaralhado = new Array();
//Guarda o par de cartas a cada jogada
vetorParDeCartas = new Array();
//Guarda os id de cada botão clicado
vetorIdBotoes = new Array();


var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
function setarCartas() {
    c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
    for (y = 0; y < 12; y++) {
        embaralhar(y);
    }
}

var nome;
var clickIniciar = 0;
function iniciar() {
    setarCartas();
    do {
        nome = prompt("Informe seu nome:");
    } while (nome === null || nome === "");
    clickIniciar = 1;
    control = setInterval(cronometro, 1000);
    $("#iniciar").disabled = true;
    $("#resetar").disabled = false;
}

var segundos = 0;
var minutos = 0;
var horas = 0;
function cronometro() {

    if (segundos < 60) {
        segundos++;
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        $("#segundos").text(":" + segundos);
    }

    if (segundos === 59) {
        $("#segundos").text(":00");
        segundos = 0;
    }
    if (segundos === 0) {
        minutos++;
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        $("#minutos").text(":" + minutos);
    }

    if (minutos === 59) {
        minutos = 0;
        $("#minutos").text(":00");
    }
    if (segundos === 0 && minutos === 0) {
        horas++;
        if (horas < 10) {
            horas = "0" + horas;
        }
        $("#horas").text(horas);
    }
}

function pararCronometro() {

    clearInterval(control);
    $("#iniciar").disabled = false;
    $("#resetar").disabled = true;

    $("#segundos").text(":00");
    $("#minutos").text(":00");
    $("#horas").text("00");
}

var acumuladorJogadas = 0, pontuacao = 0;
function resetar() {
    segundos = 0;
    minutos = 0;
    horas = 0;
    $("#jogadas").text("Jogadas - " + 0);
    $("#pontuacao").text("Pontuação - " + 0);
    acumuladorJogadas = 0;
    pontuacao = 0;
    for (a = 0; a < vetorIdBotoes.length; a++) {
        document.getElementById(vetorIdBotoes[a]).className = "b";
    }
    clickIniciar = 0;
    pararCronometro();
    setarCartas();
}


var aleatorio;
function embaralhar(index) {
    for (ab = 0; ab < 1; ) {
        aleatorio = Math.floor(Math.random() * 6);
        if (aleatorio === 0) {
            c1++;
            if (c1 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }

        }
        if (aleatorio === 1) {
            c2++;
            if (c2 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }
        }
        if (aleatorio === 2) {
            c3++;
            if (c3 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }
        }
        if (aleatorio === 3) {
            c4++;
            if (c4 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }
        }
        if (aleatorio === 4) {
            c5++;
            if (c5 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }
        }
        if (aleatorio === 5) {
            c6++;
            if (c6 <= 2) {
                vetorEmbaralhado[index] = vetorDeClasses[aleatorio];
                break;
            }
        }
    }

}

var indice = 0, aux = 0;
var intervalo;

function virarCartas(idCarta) {
    if (clickIniciar !== 0) {
        acumuladorJogadas = acumuladorJogadas + 1;
        $("#jogadas").text("Jogadas - " + acumuladorJogadas);

        if (idCarta === '1') {
            $("#botao1").addClass(vetorEmbaralhado[0]);
            vetorParDeCartas[indice] = vetorEmbaralhado[0];
            indice++;
            vetorIdBotoes[aux] = "botao1";
            aux++;
        }

        if (idCarta === '2') {
            $("#botao2").addClass(vetorEmbaralhado[1]);
            vetorParDeCartas[indice] = vetorEmbaralhado[1];
            indice++;
            vetorIdBotoes[aux] = "botao2";
            aux++;
        }

        if (idCarta === '3') {
            $("#botao3").addClass(vetorEmbaralhado[2]);
            vetorParDeCartas[indice] = vetorEmbaralhado[2];
            indice++;
            vetorIdBotoes[aux] = "botao3";
            aux++;
        }

        if (idCarta === '4') {
            $("#botao4").addClass(vetorEmbaralhado[3]);
            vetorParDeCartas[indice] = vetorEmbaralhado[3];
            indice++;
            vetorIdBotoes[aux] = "botao4";
            aux++;
        }

        if (idCarta === '5') {
            $("#botao5").addClass(vetorEmbaralhado[4]);
            vetorParDeCartas[indice] = vetorEmbaralhado[4];
            indice++;
            vetorIdBotoes[aux] = "botao5";
            aux++;
        }

        if (idCarta === '6') {
            $("#botao6").addClass(vetorEmbaralhado[5]);
            vetorParDeCartas[indice] = vetorEmbaralhado[5];
            indice++;
            vetorIdBotoes[aux] = "botao6";
            aux++;
        }

        if (idCarta === '7') {
            $("#botao7").addClass(vetorEmbaralhado[6]);
            vetorParDeCartas[indice] = vetorEmbaralhado[6];
            indice++;
            vetorIdBotoes[aux] = "botao7";
            aux++;
        }

        if (idCarta === '8') {
            $("#botao8").addClass(vetorEmbaralhado[7]);
            vetorParDeCartas[indice] = vetorEmbaralhado[7];
            indice++;
            vetorIdBotoes[aux] = "botao8";
            aux++;
        }

        if (idCarta === '9') {
            $("#botao9").addClass(vetorEmbaralhado[8]);
            vetorParDeCartas[indice] = vetorEmbaralhado[8];
            indice++;
            vetorIdBotoes[aux] = "botao9";
            aux++;
        }

        if (idCarta === '10') {
            $("#botao10").addClass(vetorEmbaralhado[9]);
            vetorParDeCartas[indice] = vetorEmbaralhado[9];
            indice++;
            vetorIdBotoes[aux] = "botao10";
            aux++;
        }

        if (idCarta === '11') {
            $("#botao11").addClass(vetorEmbaralhado[10]);
            vetorParDeCartas[indice] = vetorEmbaralhado[10];
            indice++;
            vetorIdBotoes[aux] = "botao11";
            aux++;
        }

        if (idCarta === '12') {
            $("#botao12").addClass(vetorEmbaralhado[11]);
            vetorParDeCartas[indice] = vetorEmbaralhado[11];
            indice++;
            vetorIdBotoes[aux] = "botao12";
            aux++;
        }


        if (acumuladorJogadas % 2 === 0) {
            veririficar(vetorParDeCartas[0], vetorParDeCartas[1]);
            indice = 0;

        }
    } else {
        alert("Clique no botõa iniciar e insira seu nome , por favor!");
    }
}


function veririficar(jogada1, jogada2) {
    //alert("Estou em verificar:"+vetorParDeCartas[0]+";"+vetorParDeCartas[1]);
    if (jogada1 === "imagem1" && jogada2 === "imagem1") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else if (jogada1 === "imagem2" && jogada2 === "imagem2") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else if (jogada1 === "imagem3" && jogada2 === "imagem3") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else if (jogada1 === "imagem4" && jogada2 === "imagem4") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else if (jogada1 === "imagem5" && jogada2 === "imagem5") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else if (jogada1 === "imagem6" && jogada2 === "imagem6") {
        pontuacao = pontuacao + 1;
        $("#pontuacao").text("Pontuação - " + pontuacao);
    } else {
        intervalo = setTimeout(function () {
            virarJogadaErrada(vetorIdBotoes[aux - 1], vetorIdBotoes[aux - 2]);
        }, 2000);
    }
    indice = 0;
    
    if (pontuacao === 6) {
        acabou = setTimeout(function (){
            alert("Parabéns," + nome + "! Você ganhou.\n\n\
            Tempo de jogo " + horas + "h: " + minutos + "min: " + segundos + "s");
        resetar(); 
        },1500);
       
    }

}

function virarJogadaErrada(j1, j2) {
    //alert("Estou em jogada errada!" + j1 + ";" + j2);
    document.getElementById(j1).className = "b";
    document.getElementById(j2).className = "b";
    intervalo = clearTimeout();

}



