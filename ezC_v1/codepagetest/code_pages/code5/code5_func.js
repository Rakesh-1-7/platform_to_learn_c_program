
function fToC()
{

  values = document.getElementById("m_and_n").value;
  values = values.split(",")
  m = parseInt(values[0].trim())
  n = parseInt(values[1].trim())
  res=""
  if( m % 2 != 0)
  m++;
  while(m <= n)
  {
    res += ", " + m ;
    m += 2;
  }
  res = res.replace(/, /,"")
  document.getElementById("answer").innerHTML = "The numbers are : <br>" +  res;
  
}











