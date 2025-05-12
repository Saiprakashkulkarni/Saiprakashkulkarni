document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.getElementById('cart-count');
    let cartItemCount = 0;
    let cart = []; // In a real app, this would be more complex and likely stored server-side or in localStorage

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = parseFloat(button.dataset.productPrice);

            // Simulate adding to cart
            cartItemCount++;
            cartCountElement.textContent = cartItemCount;

            // Add item to our JavaScript cart array
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            alert(`${productName} has been added to your cart!`);
            console.log('Current Cart:', cart);

            // In a real application, you would:
            // 1. Send this information to a server-side script to update the user's session/database.
            // 2. Update the cart display more dynamically (e.g., a mini-cart dropdown).
            // 3. Handle inventory checks.
        });
    });
});