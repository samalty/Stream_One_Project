$(document).ready(function() {

	$("#myButton").click(function(){
		$(this).next("div").slideToggle(500);
	})

	$("#button_1").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	})
	$("#button_2").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	})
	$("#button_3").click(function(){
		$(this).next("div").slideToggle(500);
		$(this).siblings().next("div").slideUp();
		return false;
	})

});