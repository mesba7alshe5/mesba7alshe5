
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount() {
  let count = document.getElementById("cartCount");

  if (count) {
    count.innerHTML = cart.length;
  }
}

updateCartCount();
function addToCart(name, price, image) {
  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
  alert("تمت إضافة المنتج إلى السلة");
}

function showCart() {
  let box = document.getElementById("cartItems");

  if (!box) return;

  box.innerHTML = "";

  let total = 0;

cart.forEach((item, index) => {
    total += item.price;

    box.innerHTML += `
      <div class="product">
        <img src="${item.image}" width="150">
        <h2>${item.name}</h2>
        <p class="price">${item.price.toFixed(3)} د.ك</p>

        <button onclick="removeFromCart(${index})">
          حذف
        </button>

      </div>
    `;
  });

  document.getElementById("total").innerHTML =
    "المجموع: " + total.toFixed(3) + " د.ك";
}

function checkout() {
  alert("سيتم تجهيز الطلب");
}

showCart();
function openCart() {
  window.location.href = "cart.html";
}
function removeFromCart(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
  updateCartCount();
}
