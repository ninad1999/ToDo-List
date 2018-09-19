// Strike out completed todos
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// remove a todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() { 
		$(this).remove(); 
	}); 
	event.stopPropagation(); 
})

// add a new todo
$("input[type='text']").on("keypress", function(event) { 
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// input bar fades out
$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});
