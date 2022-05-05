var text = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = text

document.querySelector("#header").classList.add("new-class")
console.log(document.querySelector("#header").className)

var result = document.querySelectorAll("ol#notes > li")
console.log(Array.from(result))

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "TOP SECRET"
    result[i].style.backgroundColor = "green"
}

var header = document.getElementById("header")
header.style.backgroundColor = "red"

var inputBox = document.getElementById("text-input")
inputBox.value = "Changed!"

var newLi = document.createElement("li")
newLi.textContent = "I'm making a new list in JS!"
var myList = document.getElementById("notes")
myList.prepend(newLi)

var newP = document.createElement("p")
newP.textContent = "I made a new P through JS!!"
newP.style.fontStyle ="italic"
newP.style.fontSize ="30px"
newP.style.textAlign ="center"
document.body.append(newP)

var myList = document.getElementById("notes")
myList.innerHTML += "<li id='list'>Another child for the OL</li>"
document.getElementById("list").style.fontSize ="35px"

var pizzaOptions = [
    "Pepperoni", 
    "Cheese", 
    "Veggie", 
    "Sausage", 
    "Mushroom", 
]

var pizzaList = document.getElementById("pizza")
    for (var i = 0; i < pizzaOptions.length; i++){
        var newName = document.createElement("li")
        newName.textContent = pizzaOptions[i]
        pizzaList.append(newName)
    }

var pizzaList = document.getElementById("pizza")
    for (var i = 0; i <pizzaOptions.length; i++){
        pizzaList.innerHTML += "<li>" + pizzaOptions + "</li>" 
    }


    