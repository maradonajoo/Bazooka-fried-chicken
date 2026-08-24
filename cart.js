function addToCart(){
    const products = [
        {
            name: "Offer 1 (50% off)",
            price: 10.99,
            quantity: document.querySelector(".input1").value
        },
        {
            name: "crazy boom",
            price: 8.99,
            quantity: document.querySelector(".input2").value
        },
        {
            name: "Offer 2 (50% off)",
            price: 5.99,
            quantity: document.querySelector(".input3").value
        },
        {
            name: "Offer 3 (60% off)",
            price: 12.99,
            quantity: document.querySelector(".input4").value
        },
        {
            name: "Hormone Elsada",
            price: 9.99,
            quantity: document.querySelector(".input5").value
        },
        {
            name: "Super Crunchy Combo",
            price: 7.99,
            quantity: document.querySelector(".input6").value
        },
        {
            name: "Double Crunch",
            price: 14.99,
            quantity: document.querySelector(".input7").value
        },
        {
            name: "Aphachy Burger",
            price: 11.99,
            quantity: document.querySelector(".input8").value
        }
    ];

    const cart = products.filter(product => product.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}

