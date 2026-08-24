const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartcontainer = document.getElementById("cart-container");
const totalprice = document.getElementById("total-price");

let total = 0;

cart.forEach(product => {
    const quantity = Number(product.quantity);
    const producttotal = product.price*quantity;
    total += producttotal;
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `
    <div>
        <h2>${product.name}</h2>
        <p style="color: #d4d36a; font-weight: bold; font-size: 1rem;">Price: $${product.price.toFixed(2)}</p>
        <p style="color: #d4d36a; font-weight: bold; font-size: 1rem;">Quantity: ${quantity}</p>
    </div>
    <div>
        <h3 style="color: #d4d36a; font-weight: bold; font-size: 1.5rem;">
             ${producttotal.toFixed(2)}
        </h3>
    </div>

    `;
    
    cartcontainer.appendChild(item);
})

totalprice.textContent = total.toFixed(2);

function placeOrder() {

    alert("Order placed successfully!, paying on the door, Thank you for shopping with us.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
