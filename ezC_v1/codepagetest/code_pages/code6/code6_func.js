
function fToC()
{

  n = document.getElementById("nValue").value;

  i = 1,count = 1, sum = 0;

  while(count <= n)
  {
      sum += (i*i);
      i += 2;
      count++;
  }

  document.getElementById("answer").innerHTML = "1^2 + 3^2 + ... + n^2 = " +  sum + " , when n = "+n;
  
}











