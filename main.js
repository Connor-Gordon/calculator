// dont start till the document tree is loaded and ready

$(document).ready(function(){

	// When you click on the add button
	$('#add').on('click', function(){
		// Grab the value of #num_one and #num_two
		let number1 = Number($('#num_one').val())
		let number2 = Number($('#num_two').val())
		// Add the value of #num_one and #num_two together
		// Display the result of adding #num_one and #num_two to #answer
		$('#answer').val(number1 + number2)	
	})


	$('#subtract').on('click', function(){
		let number1 = Number($('#num_one').val())
		let number2 = Number($('#num_two').val())
		$('#answer').val(number1 - number2)	
	})	

	$('#multiply').on('click', function(){
		let number1 = Number($('#num_one').val())
		let number2 = Number($('#num_two').val())
		$('#answer').val(number1 * number2)	
	})		

	$('#divide').on('click', function(){
		let number1 = Number($('#num_one').val())
		let number2 = Number($('#num_two').val())
		$('#answer').val(number1 / number2)		
	})
})
