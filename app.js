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

const addItemBtn = document.getElementById("add-item-btn");
addItemBtn.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "Another new item";
    itemList.appendChild(newItem);
});

const highlightBtn = document.getElementById("highlight-title-btn");
highlightBtn.addEventListener("click", function() {
    mainTitle.classList.toggle("highlight");
});
