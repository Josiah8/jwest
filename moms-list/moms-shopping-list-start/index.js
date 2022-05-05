let form = document.getElementById("grocery_form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const input_box = document.getElementById("newItem")
    const list_item = input_box.value

    addItemToList(list_item)
})
    
function addItemToList(item_name){
    var list = document.getElementById("grocery_list")
    const new_item_list = document.createElement("li")

    new_item_list.textContent = item_name
    
    var deleteButton = document.createElement("button");

    deleteButton.setAttribute("class", "btn");
    deleteButton.appendChild(document.createTextNode("Delete"));

    new_item_list.appendChild(deleteButton)
    list.append(new_item_list)

    deleteButton.addEventListener("click", removeItem);
    li.removeItem("li");


    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // li.appendChild(deleteButton);

    // list.appendChild(li).addEventListener("click", toggleList);
    // input.value ="";
    // list>li.appendChild(deleteButton).addEventListener("click", removeItem);
 
    
// grocery_list.appendChild(list).addEventListener("click", toggleList);
    // input_box.value ="";
}

        // document.getElementById("list").appendChild(form)
    // 1. get the item name from the event ( let new_item = event.something.title )
        //  1.a. console.log(event)
        // 2. Add HTML <li> to list
        //  2.a. "<li>#{new_item}</li>"
        // 3. Add the new html to the list
