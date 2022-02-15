function fToC() {
  values = document.getElementById("m_and_n").value;
  values = values.split(",");
  m = parseInt(values[0].trim());
  mcopy = m
  n = parseInt(values[1].trim());
  res = "";
  if (m - n > 2 || n - m > 2) {
    if (m % 2 == 0) m++;
    while (m < n) {
      res += ", " + m;
      m += 2;
    }
    res = res.replace(/, /, "");
    document.getElementById("answer").innerHTML ="The even numbers between " + mcopy + " and " + n + "are : <br>" + res;
  } else
    document.getElementById("answer").innerHTML ="No even numbers between " + m + " and " + n;
}
