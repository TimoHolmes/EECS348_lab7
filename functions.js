
function alert_paragraph_color(){

    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;

    var border_width = document.getElementById("border_width").value;

    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_G = document.getElementById("bg_G").value;
  
    document.getElementById("paragraph").style.borderColor = 'rgb(' + border_R + ',' + border_G + ','  + border_B + ')';

    document.getElementById("paragraph").style.borderWidth = border_width;

    document.getElementById("paragraph").style.backgroundColor = 'rgb(' + bg_R + ',' + bg_G + ','  + bg_B + ')';


}



