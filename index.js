var input = -1;
function changeText(textColor){
	var oldHTML = document.getElementById('para').innerHTML;
	var newHTML = "<span style='color:"+textColor+"'>The color is "+textColor+".</span>";
	document.getElementById('para').innerHTML = newHTML;
}
var myArray = new Array (5);
myArray [0] = 'green';
myArray [1] = 'blue';
myArray [2] = 'yellow';
myArray [3] = 'orange';
myArray [4] = 'red';

while(input < 0 || input > 4) {
	var input = prompt("Enter a value between 0 and 4");
	if (input >= 0 && input <= 4) {
		changeText(myArray[input]);
	} else {
		changeText('black');
	}
}
