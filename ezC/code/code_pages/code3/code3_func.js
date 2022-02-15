

function fToC()
{

  coefficients = String(document.getElementById("coeffs").value);
  coefficients = coefficients.trim();
  let Cfs = coefficients.split(",");
  // console.log(sidesValues);
  a = Cfs[0].trim();
  b = Cfs[1].trim();
  c = Cfs[2].trim();
  x1 = 0, x2 = 0;
  let d = b*b - 4*a*c;
    if(d > 0)
    {
      x1 = Math.round(100*( -b + Math.sqrt(d) ) / (2.0*a))/100;
      x2 = Math.round(100*( -b - Math.sqrt(d) ) / (2.0*a))/100;
      document.getElementById("answer").value = "The roots are " + x1 + " and " + x2;
    }
    else if(d == 0)
    {
      x1 = Math.round(100*( -b ) / (2.0*a))/100;

      document.getElementById("answer").value = "The two roots are equal, and the value is " + x1 ;
    }
    else
    {
      x1 = Math.round(100*(-b) / ( 2.0*a))/100;
      x2 = Math.round(100*Math.sqrt(-d) / ( 2.0*a))/100;
      if(x2 < 0)
      x2 = -x2;
      document.getElementById("answer").value = "The imaginary roots are "+ x1 + " + i" + x2 +" and "+  x1 + " - i" + x2;
    }

}











