var charger = 0;
var compara;
var interna;
var x;
var quadros = [];
var fimdejogo = 0;
var m;
var n;

function trocaImagem(x){
var text = "quadro"+x;
document.getElementById(text).style.visibility = "visible";
document.getElementById(x).onclick= function(){zero()};

charger++;

quadros.push(text);


  if (charger == 2 ){

    var oxente1 = document.getElementById(quadros[0]).src;
    var oxente2 = document.getElementById(quadros[1]).src;


  var j = document.getElementsByClassName("card");
  var i;
  for (i = 0; i < j.length; i++) {
      j[i].onclick = function(){zero()};
  }


      if (oxente1==oxente2){

        setTimeout(acerto,1000);
        setTimeout(pisca,500);
        quadros = [];
        charger = 0;
        fimdejogo=fimdejogo+2;

        /*
*/

      }
      if (oxente1!=oxente2){

        setTimeout(esconder, 1000,quadros[0],quadros[1]);


        charger = 0;
        quadros = [];

      /*  for (i = 0; i < j.length; i++) {
            j[i].onclick = function(){trocaImagem(this.id)};
        }*/

      }
   }

   if (fimdejogo == 12){
    setTimeout("alert ('GAME OVER')",2000);
    setTimeout("location.reload()",3000);
   }
}

function acerto(){


  var j = document.getElementsByClassName("card");
  var i;
    for (i = 0; i < j.length; i++) {
        j[i].onclick = function(){trocaImagem(this.id)};
    }

}


function esconder(m,n) {
  document.getElementById(m).style.visibility = "hidden";
  document.getElementById(n).style.visibility = "hidden";


    var j = document.getElementsByClassName("card");
    var i;
    for (i = 0; i < j.length; i++) {
        j[i].onclick = function(){trocaImagem(this.id)};
    }
}

var vetor = [
"imagens/R1.jpg",
"imagens/R2.jpg",
"imagens/R3.jpg",
"imagens/R4.jpg",
"imagens/R5.jpg",
"imagens/R6.jpg",
"imagens/R1.jpg",
"imagens/R2.jpg",
"imagens/R3.jpg",
"imagens/R4.jpg",
"imagens/R5.jpg",
"imagens/R6.jpg"
];

function indice() {

    vetor.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("quadro1").src = vetor[0];
    document.getElementById("quadro2").src = vetor[1];
    document.getElementById("quadro3").src = vetor[2];
    document.getElementById("quadro4").src = vetor[3];
    document.getElementById("quadro5").src = vetor[4];
    document.getElementById("quadro6").src = vetor[5];
    document.getElementById("quadro7").src = vetor[6];
    document.getElementById("quadro8").src = vetor[7];
    document.getElementById("quadro9").src = vetor[8];
    document.getElementById("quadro10").src = vetor[9];
    document.getElementById("quadro11").src = vetor[10];
    document.getElementById("quadro12").src = vetor[11];
}

function zero(){

}

function pisca(){
document.getElementById('tr').classList.remove("bloco");
document.getElementById('tr').classList.add("tr1");
setTimeout(pisca2,500);

}
function pisca2(){
document.getElementById('tr').classList.remove("tr1");
document.getElementById('tr').classList.add("tr2");
setTimeout(pisca3,500);
}
function pisca3(){
document.getElementById('tr').classList.remove("tr2");
document.getElementById('tr').classList.add("bloco");
}
