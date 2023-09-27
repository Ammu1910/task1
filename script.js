document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const fruitList = document.getElementById("fruitList");
    const message = document.getElementById("message");
    const maxItems = 5; // Change this to your desired limit

    // Array to store fruit names
     const fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Grape", "🍊Orange"];
    let displayedFruits = []; // Array to store displayed fruits

    addButton.addEventListener("click", function() {
        if (displayedFruits.length < maxItems && fruits.length > 0) {
            const newFruit = fruits.shift(); // Get and remove the first fruit from the array
            displayedFruits.push(newFruit);
            renderFruitList();
        } else {
            message.textContent = "You've reached the maximum limit of fruits or no more fruits to display.";
            addButton.disabled = true;
        }
    });

    fruitList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const fruitIndex = event.target.dataset.index;
            fruits.unshift(displayedFruits[fruitIndex]); // Add the deleted fruit back to the front of the fruits array
            displayedFruits.splice(fruitIndex, 1);
            renderFruitList();
            addButton.disabled = false; // Enable the button after deleting a fruit
        }
    });

    function renderFruitList() {
        // Clear the current list
        fruitList.innerHTML = "";

        // Render the updated list
        displayedFruits.forEach(function(fruit, index) {
            const listItem = document.createElement("li");
            listItem.textContent = fruit;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.dataset.index = index;

            listItem.appendChild(deleteButton);
            fruitList.appendChild(listItem);
        });

        message.textContent = "";
        addButton.disabled = displayedFruits.length >= maxItems || fruits.length === 0;
    }
});
