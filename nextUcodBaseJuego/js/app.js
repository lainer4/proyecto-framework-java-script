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

var intervalo = 0;
var eliminar = 0; 
var newdulces = 0; 
var tiempo = 0; 

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


function timer() {
  if (seg != 0) {
    seg = seg - 1;
  }
  if (seg == 0) {
    if (min == 0) {
      clearInterval(eliminar);
      clearInterval(newdulces);
      clearInterval(intervalo);
      clearInterval(tiempo);
      $(".panel-tablero").hide("drop", "slow", callback);
      $(".time").hide();
    }
    seg = 59;
    min = min - 1;
  }
  $("#timer").html("0" + min + ":" + seg);
}




function callback() {
  $(".panel-score").animate({ width: "100%" }, 4000);
}




function borrartotal() {
  for (var j = 1; j < 8; j++) {
    $(".col-" + j)
      .children("img")
      .detach();
  }
}
   


function desplazamiento() {
  i = i + 1;
  var numero = 0;
  var imagen = 0;

  $(".elemento").draggable({ disabled: true });
  if (i < 8) {
    for (var j = 1; j < 8; j++) {
      if (
        $(".col-" + j)
          .children("img:nth-child(" + i + ")")
          .html() == null
      ) {
        numero = Math.floor(Math.random() * 4) + 1;
        imagen = "image/" + numero + ".png";
        $(".col-" + j)
          .prepend("<img src=" + imagen + " class='elemento'/>")
          .css("justify-content", "flex-start");
      }
    }
  }
  if (i == 8) {
    clearInterval(intervalo);
    eliminar = setInterval(function() {
      eliminarhorver();
    }, 150);
  }
}
