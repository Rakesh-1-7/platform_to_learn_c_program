function fToC() {
	nums = document.getElementById("numbers").value;
	nums = nums.split(",");
	a = parseFloat(nums[0].trim());
	b = parseFloat(nums[1].trim());
  
	s = a + b;
	d = a - b;
	p = a * b;
	if (b != 0) di = (1.0 * a) / b;
	r = a % b;
  
	if (di != 0)
	  document.getElementById("answer").innerHTML =
		"The sum is : " +
		s +
		"<br>The difference is : " +
		d +
		"<br>The product is : " +
		p +
		"<br>The quotient  is : " +
		di +
		"<br>The remainder  is : " +
		r;
	else
	  document.getElementById("answer").innerHTML =
		"The sum is : " +
		s +
		"<br>The difference is : " +
		d +
		"<br>The product is : " +
		p +
		"<br>Division by 0 is not possible." +
		"<br>The remainder  is : " +
		r;
  }
  