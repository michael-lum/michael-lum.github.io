$(document).ready(function() {
	$(".button").click(function() { //jQuery Function #1
		$("#name").css({"text-decoration": "none"}); //jQuery Function #2

		$(".button").removeClass("highlighted"); //jQuery Function #3
		$(this).addClass("highlighted"); //jQuery Function #4
	});

	$("#name").click(function() {
		$("#name").css({"text-decoration": "none"});
		$(".button").removeClass("highlighted");
		$("#name").css({"text-decoration": "underline", "text-decoration-color":"#FCBF49"});
	});

	$("#name").click(function() {
		$(window).scrollTop(0); //jQuery Function #5
	})

	$(".logo").hover(function() { //jQuery Function #6
		$(this).animate({"opacity":"1.0"}, 200);
	});
});