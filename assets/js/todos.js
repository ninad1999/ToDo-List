// check off specefic todos by clicking
// $("li").on("click", function() {
// 	$(this).toggleClass("completed");
// });
// this wont work as the listner gets added to lis that exist only when this code runs

// to fix the probelm,
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});
// add listener to whole ul, but fire it only whne clicked on an li inside that ul


// clicking on the span will cause event bubbling, i.e clicking on span will also trigger click events on li, ul, #container div and body( in this order of succession)
// have to avoid that
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() { // .parent() gives the parent li in this case
		$(this).remove(); // here now "this" means the parent li not the span. If you do $(this).parent().remove() it will remove the parent ul
	}); 
	event.stopPropagation(); // stops event bubbling
})

// to add a new todo
$("input[type='text']").on("keypress", function(event) { // if used .click, .keypress etc, the listeners wont be added to the new lis, but on using .on, this problem wont happen
	// if enter key pressed
	if (event.which === 13) {
		var todoText = $(this).val();
		// clear out the input field
		$(this).val("");
		// create a new li in ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});
