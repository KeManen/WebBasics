import "./styles.css";

const tagLine = document.getElementById("tagLine");
const tagButton = document.getElementById("my-button");
const textList = document.getElementById("textList");
const textButton = document.getElementById("textData");
const textField = document.getElementById("textInput");

tagButton.onclick = function() {tagButtonFunction()};
textButton.onclick = function() {textButtonFunction()};



function tagButtonFunction (){
	console.log("hello world");
	tagLine.innerHTML = "My notebook";
}

function textButtonFunction(){
	var li = document.createElement("li");
	li.innerHTML = textField.value;
	textList.appendChild(li);
}

