  document.addEventListener("DOMContentLoaded", () => {
            const cartContainer = document.getElementById("cart-container");

            async function fetchCart() {
                try {
                    const response = await fetch("https://dummyjson.com/carts");
                    const json = await response.json();
                    displayCart(json.carts);
                } catch (error) {
                    console.error("Error fetching cart:", error);
                }
            }

            function displayCart(carts) {
                carts.forEach(cart => {
                    const cartDiv = document.createElement("div");
                    cartDiv.className = "cart";

                    const cartTitle = document.createElement("h2");
                    cartTitle.className = "cart-title";
                    cartTitle.innerText = `Cart ID: ${cart.id}`;
                    cartDiv.appendChild(cartTitle);

                    const productsDiv = document.createElement("div");
                    productsDiv.className = "products";

                    cart.products.forEach(product => {
                        const productDiv = document.createElement("div");
                        productDiv.className = "product";

                        const productThumbnail = document.createElement("img");
                        productThumbnail.src = product.thumbnail;
                        productDiv.appendChild(productThumbnail);

                        const productTitle = document.createElement("h2");
                        productTitle.innerHTML = product.title;
                        productDiv.appendChild(productTitle);

                        const productPrice = document.createElement("p");
                        productPrice.innerHTML = `<strong>Price: $${product.price}</strong>`;
                        productDiv.appendChild(productPrice);

                        const productQuantity = document.createElement("p");
                        productQuantity.innerHTML = `<strong>Quantity: ${product.quantity}</strong>`;
                        productDiv.appendChild(productQuantity);

                        const productTotal = document.createElement("p");
                        productTotal.innerHTML = `<strong>Total: $${product.total}</strong>`;
                        productDiv.appendChild(productTotal);

                        const productDiscountedTotal = document.createElement("p");
                        productDiscountedTotal.innerHTML = `<strong>Discounted Total: $${product.discountedTotal}</strong>`;
                        productDiv.appendChild(productDiscountedTotal);

                        productsDiv.appendChild(productDiv);
                    });

                    cartDiv.appendChild(productsDiv);
                    cartContainer.appendChild(cartDiv);
                });
            }

            fetchCart();
        });
