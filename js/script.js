function send(){

    console.log("clicked");

var foo =  document.getElementById("foo");
var  x =  document.getElementById("comment")
// grabing info
var input = document.getElementById("input").value;
var msg = document.getElementById("text").value;

//creating a new element 
var name = document.createElement("h4")
var comment = document.createElement("p");

 name.setAttribute("value", input);
 name.innerHTML = html;
 //append a child

 foo.appendChild(name);

 



}