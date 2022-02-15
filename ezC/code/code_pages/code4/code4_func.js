
function fToC()
{

  ch = document.getElementById("coeffs").value;
  ch = ch.trim();
  console.log(isNaN(ch));
  if(ch.length != 1 || !(/[a-zA-Z]/).test(ch))
  {
    document.getElementById("answer").value = ch + " is an invalid input !";
  }
  else
  switch (ch)
  {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      document.getElementById("answer").value = ch + " is a vowel.";
    break;
    default:
      document.getElementById("answer").value = ch + " is a consonant.";
  }

}











