$(document).ready(function() {

	/* Button toggle home page */

	$("#myButton").click(function(){
		$(this).next("div").slideToggle(500);
	});

	/* Button toggle events page */

	$("#button_1").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	});
	$("#button_2").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	});
	$("#button_3").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	});

	/* Carousel toggle events page */

	$("#button_1").click(function(){
		$("#carousel1").carousel(0);
	});
	$("#button_2").click(function(){
		$("#carousel1").carousel(1);
	});
	$("#button_3").click(function(){
		$("#carousel1").carousel(2);
	});

	/* Form validation contact page */

	$(".submit").click(function() {
		validateForm();
	});
	
	function validateForm(x, y) {
		
		var x = document.forms["contactForm"]["name"].value;
		var y = document.forms["contactForm"]["email"].value;
	
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

});