//alert("Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy!");

var myButton = document.querySelector("button");
var myheading = document.querySelector("h1");

myButton.onclick = function(){
  var name = prompt("Please enter your name:");
  localStorage.setItem("name:" , name);
}
