$(function() {
  //-----------------item #1-----cambio color titulo------------------------------
  setInterval(function() {
    var color = $(".main-titulo").css("color");
    if (color == "rgb(220, 255, 14)") {
      $(".main-titulo").css("color", "white");
    } else {
      $(".main-titulo").css("color", "#DCFF0E");
    }
  }, 1000);
  //------------------------------------------------------------------------------
});

var rbh = 0;
var rbv = 0;
var bnewd = 0;
var lencol = ["", "", "", "", "", "", ""];
var lenres = ["", "", "", "", "", "", ""];
var maximo = 0;
var matriz = 0;

var intervalo = 0; //variable de tiempo para funcion de desplazamiento
var eliminar = 0; //variable de tiempo para eliminar dulces
var newdulces = 0; //variable de tiempo para nuevos dulces
var tiempo = 0; //variable de tiempo para temporizador

var i = 0;
var contador = 0; //contador total
var conc1 = 0; //contador columna1

var initialPos;
var espera = 0;
var score = 0;
var mov = 0;

var min = 2;
var seg = 0;

$(".btn-reinicio").click(function() {
  i = 0;
  score = 0;
  mov = 0;
  $(".panel-score").css("width", "25%");
  $(".panel-tablero").show();
  $(".time").show();

  $("#score-text").html("0");
  $("#movimientos-text").html("0");
  $(this).html("REINICIAR");
  clearInterval(intervalo);
  clearInterval(eliminar);
  clearInterval(newdulces);
  clearInterval(tiempo);
  min = 2; //2
  seg = 0; //0
  borrartotal();
  intervalo = setInterval(function() {
    desplazamiento();
  }, 600);
  tiempo = setInterval(function() {
    timer();
  }, 1000);
});
