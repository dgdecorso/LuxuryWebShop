// Beispielprodukte (können durch echte Daten ersetzt werden)
const exampleProducts = [
  { id: 1, name: "Black Blazer", price: 649.99, image: "margielajack.jpg" },
  {
    id: 2,
    name: "Leather Jacket Black",
    price: 1399.99,
    image: "dieselleather.jpg",
  },
  { id: 3, name: "Classic Fit Polo", price: 89.99, image: "produkt3.jpg" },
];

// Funktion, um Produkte in den Local Storage hinzuzufügen
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = exampleProducts.find((p) => p.id === productId);

  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} wurde zum Warenkorb hinzugefügt!`);
  }
}

// Funktion, um den Warenkorb anzuzeigen
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("warenkorb-container");
  container.innerHTML = ""; // Vorherigen Inhalt löschen

  if (cart.length === 0) {
    container.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("warenkorb-item");
    productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>Preis: ${item.price.toFixed(2)} €</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">Entfernen</button>
        `;
    container.appendChild(productDiv);
  });

  // Gesamtsumme berechnen
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const summaryDiv = document.createElement("div");
  summaryDiv.classList.add("warenkorb-summary");
  summaryDiv.innerHTML = `
        <h2>Gesamtsumme: ${total.toFixed(2)} €</h2>
        <button class="checkout-button">Zur Kasse</button>
    `;
  container.appendChild(summaryDiv);
}

// Funktion, um ein Produkt aus dem Warenkorb zu entfernen
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Funktion, um das Menü umzuschalten
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Warenkorb beim Laden der Seite anzeigen
document.addEventListener("DOMContentLoaded", displayCart);

<script src="script.js"></script>;
