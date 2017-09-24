$(document).ready(function () {
    
    // titulo
    setInterval(function () {
        var color = $(".main-titulo").css("color");
        if (color == "rgb(220, 255, 14)")
        {
            $(".main-titulo").css("color", "white");
        }
        else
        {
            $(".main-titulo").css("color", "#DCFF0E");
        }

        }, 1000);
     
  })

