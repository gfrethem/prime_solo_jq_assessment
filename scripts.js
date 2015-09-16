	//Initialize Variables

var buttonClickCounter = 0;


$(document).ready(function() {

	//Generate the Div with appropriate Line #
	$(".generate").on("click", function() {
		buttonClickCounter += 1;
		var $createDiv = $('<div class="newDiv"><p>Line # ' + buttonClickCounter 
			+ '</p><p><button class="colorChanger">Change Color</button>&nbsp;<button class="removeMe">Remove</button></p></div>');
		$(".masterDiv").append($createDiv);
	});

	// On Click method to Remove Div
	$(document).on("click",'.removeMe', function() {
       $(this).parent().parent().remove();
  	});

	// On Click method to change background color; also to revert to original background color
	$(document).on("click", '.colorChanger', function() {
		if ($( this ).parent().parent().css( "background-color" ) == "rgb(128, 0, 128)") {
			$(this).parent().parent().css('background-color','white');
		} else {
			$(this).parent().parent().css('background-color','purple');			
		};
	});

});