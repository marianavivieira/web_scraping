const productsContainer = document.getElementById("products");
const btnJewels = document.getElementById("btn-jewels");


function displayProducts(data) {
    productsContainer.innerHTML = ""; 

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Categoria:</strong> ${item.category}</p>
            <p><strong>Preço:</strong> $${item.price}</p>
        `;

        productsContainer.appendChild(card);
    });
}

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data))
    .catch(error => console.error("Erro:", error));


btnJewels.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res => res.json())
        .then(data => displayProducts(data))
        .catch(error => console.error("Erro:", error));
});
