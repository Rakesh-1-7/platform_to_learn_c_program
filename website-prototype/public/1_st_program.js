// the hello world program

function fToC()
{
  var deg_f , deg_c ;

  deg_f = parseInt(document.getElementById("farenheit").value);
  deg_c = Math.round(100*5*(deg_f-32)/9.0)/100;
  if(deg_c == NaN)
  {
    deg_c = "Invalid input";
  }
  document.getElementById("answer").value = deg_c;
}

// function success() {
//   document.getElementById("submit").style.transition = "1s";
//   document.getElementById("submit").style.backgroundColor  = "black";
//   document.getElementById("submit").style.color  = "white";
//   setTimeout("successReset()" ,350);
// }

function successReset(){

  document.getElementById("submit").style.backgroundColor  = "white";
  document.getElementById("submit").style.color  = "black";
}

