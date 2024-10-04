const mainTitle = document.getElementById("main-title");
const paragraph = document.querySelector("#content p");

console.log(mainTitle);
console.log(paragraph);

mainTitle.textContent = "DOM Manipulation with JavaScript";
paragraph.textContent = "Hello, I am Krissy and I am learning DOM manipulation!";

const newItem = document.createElement("li");
newItem.textContent = "Newly added item";
const itemList = document.getElementById("item-list");
itemList.appendChild(newItem)