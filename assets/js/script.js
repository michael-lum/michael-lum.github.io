$(document).ready(function() {
	$(".button, #name").click(function() {
		$("#name").css({"text-decoration": "none"}); //jQuery Function #1
		$(".button").css({"text-decoration": "none"});
		$(this).css({"text-decoration": "underline", "text-decoration-color": "#FCBF49"});
	});

	$("#name").click(function() {
		$(window).scrollTop(0); //jQuery Function #2
	})
});