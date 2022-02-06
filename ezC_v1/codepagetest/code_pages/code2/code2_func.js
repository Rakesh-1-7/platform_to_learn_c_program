// the hello world program

function fToC()
{


  sidesValues = String(document.getElementById("sides").value);
  sidesValues = sidesValues.trim();
  let sV = sidesValues.split(",");
  // console.log(sidesValues);
  side1 = parseInt(sV[0].trim());
  side2 = parseInt(sV[1].trim());
  side3 = parseInt(sV[2].trim());


  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  document.getElementById("answer").value = Math.round(area*10000)/10000;
}

// the hello world program









