var comment = [];

function send(){

// grabing info
 var input = document.getElementById("input").value;
var msg = document.getElementById("text").value;

//creating a new element 
 var name = document.createElement("h4");
 var comment = document.createElement("p");

 var content = document.createTextNode("Name: " + input)
 var message = document.createTextNode("Message: " + msg)


 var attach = content + message
 //append a child

 name.appendChild(content);
 comment.appendChild(message);

 document.getElementById("foo").appendChild(name);
 document.getElementById("foo").appendChild(comment);

 $("div").css("border","solid 1px green")
}


