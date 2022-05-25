var input = document.getElementById("userInput");
var enterButton = document.getElementById("enterButton");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
	// Creates new list item
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//Reset text input field
	input.value = "";
	
	function completedItem() {
		// Changes color of item
		li.classList.toggle("done");
	}
	
	li.addEventListener("click", completedItem);
	
	function deleteListItem(){
		// Adds delete class to item
		li.classList.add("delete");
	}
	
	// Delete button
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("[DEL]"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteListItem);
}

function inputLength(){
	return input.value.length;
} 

function addListAfterClick(){
	// Adds new item to list if input length is >0
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	// Adds new item to list if input lenth is >0 and enter key is pressed
	if (inputLength() > 0 && event.which === 13) {
		// Enter key's keycode === 13
		createListElement();
	} 
}

// Event listeners
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
