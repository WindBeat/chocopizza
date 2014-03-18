$(document).on("click", ".box", function() {
	$(this).closest('div').toggleClass("check")
});

$(document).on("click", ".check", function() {
	$(this).closest('div').toggleClass("box")
});
