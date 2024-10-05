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
    newItem.classList.add("colorChange");
});

const highlightBtn = document.getElementById("highlight-title-btn");
highlightBtn.addEventListener("click", function() {
    mainTitle.classList.toggle("highlight");
});

const removeBtn = document.getElementById("remove-item-btn");
removeBtn.addEventListener("click", function() {
    itemList.removeChild(itemList.lastElementChild);
})

const customAdd = document.getElementById("click-submit");
customAdd.addEventListener("click", function() {
    const customItem = document.getElementById("custom-list-item");
    const customText = customItem.value;
    const newCustom = document.createElement("li");
    newCustom.textContent = customText;
    itemList.appendChild(newCustom);
    newCustom.classList.add("colorChange"); 
});

function updateFooter() {
    const footer = document.getElementById("footer-text");
    const today = new Date ().toLocaleDateString();
    footer.textContent = `DOM Manipulation Lab © ${today}`;
}
updateFooter();