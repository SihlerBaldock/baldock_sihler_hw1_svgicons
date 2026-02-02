console.log("JS file is connected")

//Variables

const orange = document.querySelector("#orange");
console.log(orange)

const lemon = document.querySelector("#lemon");
console.log(lemon)

const strawberry = document.querySelector("#strawberry");
console.log(strawberry)

const grapefruit = document.querySelector("#grapefruit");
console.log(grapefruit)

const lime = document.querySelector("#lime");
console.log(lime)

const dragonfruit = document.querySelector("#dragonfruit");
console.log(dragonfruit)





//Functions

function logId() {
    console.log("User Clicked On:", this.id)
}

//Event Listener

orange.addEventListener("click", logId)

lemon.addEventListener("click", logId)

strawberry.addEventListener("click", logId)

grapefruit.addEventListener("click", logId)

lime.addEventListener("click", logId)

dragonfruit.addEventListener("click", logId)