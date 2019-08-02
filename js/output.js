	//Loop and Increment Data ID and Class
		var current = 1;
		$("input").each(function() {
			$(this).attr({"data-id" : current}).addClass('item-' + current);
			 current++;
		});

	// Create Multiple Div Elements Using Loop
	for(var i= 1, len=$("input").length; i<=len; i++) {
		  $('#display').append('<div id="id_' + i + '"></ div>' )
	}

	// Real Time Output
	$("input").on("change keyup paste click", function() {
		var inputId = $(this).attr("data-id");
    $("#id_"+inputId).text($(this).val());
});
