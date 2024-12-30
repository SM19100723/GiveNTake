// JavaScript for Shopping Cart Functionality

// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart(); // Update the cart display
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = ""; // Clear the current cart items
    let total = 0;

    // Loop through the cart and display each item
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price; // Add the price to the total
    });

    // Update the total price
    totalElement.textContent = `Total: $${total}`;
}
