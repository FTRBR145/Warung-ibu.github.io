document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Kornet Lada Hitam', img: 'product1.png', price: 7000, 
        description: ' Nasi putih hangat dengan potongan kornet yang gurih dan saus lada hitam yang kaya rempah. Perpaduan rasa manis, asin, dan pedas menciptakan sensasi rasa yang unik dan membuat ketagihan.' },
      { id: 2, name: 'Ice Cream', img: 'product2.png', price: 5000, 
        description: 'Es krim lembut dengan tekstur creamy yang memanjakan lidah, tersedia dalam varian rasa vanila yang harum, cokelat yang kaya, dan stroberi dengan rasa manis alami. Setiap suapan menghadirkan sensasi dingin yang menyegarkan dan rasa autentik yang memuaskan.' },
      { id: 3, name: 'Chicken Katsu', img: 'product3.png', price: 7000, 
        description: 'Chicken Katsu Rice Bowl menghadirkan potongan ayam empuk berbalut tepung yang digoreng hingga keemasan, disajikan di atas nasi putih hangat. Dilengkapi dengan saus yang kaya rasa dan mayones creamy, setiap gigitan menawarkan perpaduan tekstur dan rasa yang menggugah selera.' },
      { id: 4, name: 'Chiken teriyaki', img: 'product4.png', price: 7000, 
        description: 'Sajian khas Jepang dengan potongan ayam lembut yang dimasak sempurna dalam saus teriyaki manis dan gurih. Disajikan di atas nasi putih pulen, hidangan ini dilengkapi dengan irisan daun bawang segar untuk menambah cita rasa dan aroma.' },
    ],
    activeModal: null, // Menyimpan indeks modal yang aktif
    openModal(index) {
      this.activeModal = index; // Buka modal untuk produk tertentu
    },
    closeModal() {
      this.activeModal = null; // Tutup modal
    },
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) return item;
          item.quantity++;
          item.total = item.price * item.quantity;
          this.quantity++;
          this.total += item.price;
          return item;
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem) {
        if (cartItem.quantity > 1) {
          this.items = this.items.map((item) => {
            if (item.id !== id) return item;
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          });
        } else {
          this.items = this.items.filter((item) => item.id !== id);
          this.quantity--;
          this.total -= cartItem.price;
        }
      }
    },

    
  });

});
