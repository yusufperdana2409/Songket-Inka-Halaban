// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//  Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Ganti ikon Feather
feather.replace();

// Fungsi kirim ke WhatsApp dan Email
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data input
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;

  // Format isi pesan
  const pesan = `Halo, saya *${nama}*.%0AEmail: ${email}%0ANo HP: ${nohp}%0A%0ASaya tertarik dengan produk Songket Inka Halaban dan ingin mendapatkan informasi lebih lanjut.`;

  // Nomor WhatsApp tujuan
  const nomorWa = "6285263452719";

  // 1️⃣ Kirim ke WhatsApp
  window.open(`https://wa.me/${nomorWa}?text=${pesan}`, "_blank");

  // 2️⃣ Kirim ke Email juga
  const subject = `Pesan dari ${nama} - Songket Inka Halaban`;
  const body = `Nama: ${nama}\nEmail: ${email}\nNo HP: ${nohp}\n\nPesan:\nSaya tertarik dengan produk Songket Inka Halaban.`;
  window.location.href = `mailto:yusufperdana2409@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
