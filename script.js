
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount() {
  let count = document.getElementById("cartCount");

  if (count) {
    count.innerHTML = cart.length;
  }
}

updateCartCount();
function addToCart(name, price, image) {

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("تمت إضافة المنتج إلى السلة");
}

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
  document.getElementById("checkoutForm").style.display = "block";
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


function confirmOrder() {

  let name = document.getElementById("customerName").value;
  let phone = document.getElementById("customerPhone").value;

  let area = document.getElementById("customerArea").value;
  let block = document.getElementById("customerBlock").value;
  let street = document.getElementById("customerStreet").value;
  let house = document.getElementById("customerHouse").value;

  if (!name || !phone || !area || !block || !street || !house) {
    alert("يرجى تعبئة جميع البيانات");
    return;
  }

  let products = "";
  let total = 0;

  cart.forEach((item, index) => {
    products += "\n" + (index + 1) + "- " + item.name + " - " + item.price.toFixed(3) + " د.ك";
    total += item.price;
  });

  let message =
    "طلب جديد من متجر mesba7_alshe5\n\n" +
    "الاسم: " + name +
    "\nالهاتف: " + phone +
    "\n\nالعنوان:" +
    "\nالمنطقة: " + area +
    "\nالقطعة: " + block +
    "\nالشارع: " + street +
    "\nالمنزل: " + house +
    "\n\nالطلب:" +
    products +
    "\n\nالمجموع: " + total.toFixed(3) + " د.ك";

  let whatsapp =
    "https://wa.me/96569092930?text=" + encodeURIComponent(message);

  window.location.href = whatsapp;
}
