
function fToC()
{
  
  n = document.getElementById("nValue").value;

  if(!isNaN(n))
 { i = 1,count = 1, sum = 0;

  while(count <= n)
  {
      sum += (i*i);
      i += 2;
      count++;
  }

  document.getElementById("answer").innerHTML = "1^2 + 3^2 + ... + n^2 = " +  sum + " , when n = "+n;}
  else
  document.getElementById("answer").innerHTML = "Invalid input!";
}











