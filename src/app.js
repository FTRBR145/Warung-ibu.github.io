document.addEventListener('alpine:init', () => {
    Alpine.data('products',  () => ({
        items: [
            { id: 1, name: 'Kornet Lada Hitam', img: 'product1.png', price: 7000, description: 'Kornet dengan lada hitam.' },
            { id: 2, name: 'Ice Cream', img: 'product2.png', price: 5000, description: 'Es krim yang segar.' },
            { id: 3, name: 'Chicken Katsu', img: 'product3.png', price: 7000, description: 'Ayam katsu renyah.' },
            { id: 4, name: 'Chiken teriyaki', img: 'product4.png', price: 7000, description: 'Chicken teriyaki dengan rasa khas.' },
      ],
      activeModal: null, // Menyimpan indeks modal yang sedang aktif
      openModal(index) {
          this.activeModal = index; // Mengatur modal yang aktif
      },
      closeModal() {
          this.activeModal = null; // Menutup modal dengan mengatur ke null
      },
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price
                
            } else {
                this.items = this.items.map((item) => { 
                    
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);
            
            if (cartItem) {
                if (cartItem.quantity > 1) {
                    // Jika kuantitas lebih dari 1, kurangi kuantitas
                    this.items = this.items.map((item) => {
                        if (item.id !== id) {
                            return item;
                        } else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    });
                } else {
                    // Jika kuantitas 1, hapus item dari keranjang
                    this.items = this.items.filter(item => item.id !== id);
                    this.quantity--;
                    this.total -= cartItem.price;
                } 
            }
        }
    });
});
