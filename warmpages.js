
let cartCount = 0;

function addToCart() {
  cartCount++;

  const counter = document.getElementById("cart-count");

  if (counter) {
    counter.textContent = cartCount;
  }
}

// تغيير العملة
const currencyMenu = document.getElementById("currency");

if (currencyMenu) {
  currencyMenu.addEventListener("change", function () {
    document.querySelectorAll(".price").forEach(function (price) {
      const amount = currencyMenu.value === "USD"
        ? price.dataset.usd
        : price.dataset.sar;

      price.textContent = amount + " " + currencyMenu.value;
    });
  });
}

// نموذج تسجيل الدخول التجريبي
function showLoginMessage(event) {
  event.preventDefault();

  document.getElementById("login-message").textContent =
    "تم تعبئة النموذج بنجاح! هذا نموذج تجريبي.";
}
