

//Event listeners for create/delete buttons
var createButton = document.getElementById("create-button").addEventListener("click", createCard);
var deleteButton = document.getElementById("delete-button").addEventListener("click", deleteCard);



//Create card function
function createCard(input){
	var input = document.getElementById("text").value;
	
    //created elements with class/id names to hold the card
	var newContainer = document.createElement("container");
	var newH1 = document.createElement("h1");
	newH1.innerHTML = input;
	document.getElementById("article").appendChild(newContainer);
	newContainer.appendChild(newH1);
	newContainer.className = "card";
	newContainer.setAttribute("id", "card");
	newH1.className = "h1";
};


//Delete card function
function deleteCard(event){
	var event = deleteButton;
	var container = document.getElementById("card");
	var article = document.getElementById("article");
	var lastChild = article.lastElementChild;
	article.removeChild(lastChild);

}



