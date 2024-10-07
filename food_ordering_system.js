
let order = [];


function addToOrder(name, price, image) {
    order.push({ name, price, image });
    updateOrderSummary();
}


function updateOrderSummary() {
  
    let orderList = document.getElementById('orderList');
    let totalAmountDisplay = document.getElementById('totalAmount');

    orderList.innerHTML = '';

    let totalAmount = 0;

    
    order.forEach((item, index) => {
       
        let listItem = document.createElement('li');
        
       
        let foodImage = document.createElement('img');
        foodImage.src = item.image; // Set the image source from the item
        foodImage.alt = `${item.name} image`; // Alt text for the image
        foodImage.width = 50; // Adjust the size of the image if needed

        // Create a text element for the food name and price
        let foodText = document.createElement('span');
        foodText.textContent = `${item.name} - $${item.price}`;
        
        // Create a "Remove" button for each item
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromOrder(index); // Remove item when clicked

        // Add the image, text, and remove button to the list item
        listItem.appendChild(foodImage); // Add food image
        listItem.appendChild(foodText);  // Add food name and price
        listItem.appendChild(removeButton); // Add the remove button

        // Append the list item to the order list
        orderList.appendChild(listItem);

        // Add the item price to the total amount
        totalAmount += item.price;
    });

    // Update the total price on the page
    totalAmountDisplay.textContent = `Total: $${totalAmount}`;
}

// Function to remove an item from the order
function removeFromOrder(index) {
    // Remove the item at the specified index from the 'order[]' array
    order.splice(index, 1);
    // Update the order summary to reflect the removal
    updateOrderSummary();
}

// Function to place the order
function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    // Create a summary of the order
    let orderSummary = order.map(item => item.name).join(", ");
    let totalAmount = order.reduce((sum, item) => sum + item.price, 0);

    // Display the order summary and total price
    alert(`You have ordered: ${orderSummary}. Total amount: $${totalAmount.toFixed(2)}`);

    // Clear the order and reset the order summary
    order = [];
    updateOrderSummary();
}
