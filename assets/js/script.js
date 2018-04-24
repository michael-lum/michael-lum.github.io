$(document).ready(function() {

	$(".button, #name").click(function() {
		$("#name").css({"text-decoration": "none"});
		$(".button").css({"text-decoration": "none"});
		$(this).css({"text-decoration": "underline", "text-decoration-color": "#FCBF49"});
	});

});