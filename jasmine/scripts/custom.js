function validateForm(x, y) {
		
//	var x = document.forms["contactForm"]["name"].value;
//	var y = document.forms["contactForm"]["email"].value;
	
	if (x == "") {
    	alert("Please ensure that you have entered your name.");
   		return false;
	} else if (y == "") {
		alert("Please ensure that you have entered your email address.");
		return false;
	} else if (y.includes("@")) {
	    alert("Thanks. We'll be in touch with you soon.");
    	return true;
	} else {
	    alert("Please enter a valid email address.");
    	return false;
	}
}