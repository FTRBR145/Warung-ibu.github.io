// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Menangkap semua tombol detail produk
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// Menangkap semua modal
const modals = document.querySelectorAll('.modal');

// Fungsi untuk menampilkan modal yang sesuai
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const modalId = btn.getAttribute('href'); // Mendapatkan ID modal dari atribut href
    const modal = document.querySelector(modalId); // Seleksi modal berdasarkan ID
    if (modal) {
      modal.style.display = 'flex'; // Tampilkan modal
    }
  };
});

// Menutup modal ketika tombol "close" diklik
document.querySelectorAll('.modal .close-icon').forEach((closeIcon) => {
  closeIcon.onclick = (e) => {
    e.preventDefault();
    const modal = closeIcon.closest('.modal'); // Cari modal induk
    modal.style.display = 'none'; // Sembunyikan modal
  };
});

// Menutup modal ketika area luar modal diklik
window.onclick = (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none'; // Sembunyikan modal jika klik di luar konten
    }
  });
};
