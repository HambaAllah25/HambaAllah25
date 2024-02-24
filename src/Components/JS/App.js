document.addEventListener('alpine:init', () => {
    Alpine.data('allProducts', () => ({
        items: [
            {
                id: 1,
                name: 'Kerang Hijau (Padang/Black Pepper/Butter Sauce)',
                img: 'green-clam.png',
                category: 'Seafood',
                price: 20000,
            },
            {
                id: 2,
                name: 'MIX LITE MENU, (Krang Hijau, Udang, Jagung)',
                img: 'prime-shrimp.jpg',
                category: 'Seafood',
                price: 35000,
            },
            {
                id: 3,
                name: 'Ayam Bakar Taliwang',
                img: 'Ayam-Bakar-Taliwang.png',
                category: 'Weekly Request',
                price: 125000,
            },
            {
                id: 4,
                name: 'Soto Sulung',
                img: 'soto-sulung.png',
                category: 'Weekly Request',
                price: 150000,
            },
            {
                id: 5,
                name: 'Rawon Komplit',
                img: 'rawon-komplit.png',
                category: 'Weekly Request',
                price: 150000,
            },
            {
                id: 6,
                name: 'Ayam Bumbu Rujak',
                img: 'ayam-bumbu-rujak.png',
                category: 'Weekly Request',
                price: 125000,
            },
            {
                id: 7,
                name: 'Sop Daging',
                img: 'sop-daging.png',
                category: 'Weekly Request',
                price: 125000,
            },
            {
                id: 8,
                name: 'Dendeng',
                img: 'dendeng.png',
                category: 'Weekly Request',
                price: 125000,
            },
            {
                id: 9,
                name: 'HARDSCAPE AQUASCAPE HR2',
                img: 'HR2.png',
                category: 'Hardscape',
                before: 150000,
                price: 125000,
            },
            {
                id: 10,
                name: 'HARDSCAPE AQUASCAPE HR4',
                img: 'HR4.png',
                category: 'Hardscape',
                before: 150000,
                price: 125000,
            },
            {
                id: 11,
                name: 'HARDSCAPE AQUASCAPE HR5',
                img: 'HR5.svg',
                category: 'Hardscape',
                before: 150000,
                price: 125000,
            },
            {
                id: 12,
                name: 'Hardscape jungle kontes, untuk tank 40cm , FREE PACKING KAYU',
                img: 'jungle-kontes-40cm.jpeg',
                category: 'Hardscape',
                price: 600000,
            },
            {
                id: 13,
                name: 'Hardscape aquascape HR1, rasio style aquarium decoration',
                img: 'HR1.jpeg',
                category: 'Hardscape',
                price: 175000,
            },
            {
                id: 14,
                name: 'Hardscape bonsai style aquarium decoration aquascape N-Aquatic BB1',
                img: 'BB1.jpeg',
                category: 'Hardscape',
                price: 150000,
            },
            {
                id: 15,
                name: 'Hardscape aquascape bonsai aquarium decoration BB7',
                img: 'BB7.jpeg',
                category: 'Hardscape',
                price: 150000,
            },
            {
                id: 16,
                name: 'Hardscape aquascape HR5 rasio style aquarium decoration',
                img: 'HR5.jpeg',
                category: 'Hardscape',
                price: 175000,
            },
            {
                id: 17,
                name: 'Hardscape aquascape B4 rasio style aquarium decoration',
                img: 'B4.jpeg',
                category: 'Hardscape',
                price: 85000,
            },
        ]
    }));

    Alpine.data('products1', () => ({
        items: [
            {
                id: 1,
                name: 'Kerang Hijau(Padang/Black Pepper/Butter Sauce)',
                img: 'green-clam.png',
                category: 'Seafood',
                price: 20000,
            },
            {
                id: 2,
                name: 'MIX LITE MENU, (Krang Hijau, Udang, Jagung)',
                img: 'prime-shrimp.jpg',
                category: 'Seafood',
                price: 35000,
            },
            {
                id: 3,
                name: 'Ayam Bakar Taliwang',
                img: 'Ayam-Bakar-Taliwang.png',
                category: 'Weekly Request',
                price: 125000,
            },
        ]
    }));

    Alpine.data('products2', () => ({
        items: [
            {
                id: 4,
                name: 'Soto Sulung',
                img: 'soto-sulung.png',
                category: 'Weekly Request',
                price: 150000,
            },
            {
                id: 5,
                name: 'Rawon Komplit',
                img: 'rawon-komplit.png',
                category: 'Weekly Request',
                price: 150000,
            },
            {
                id: 6,
                name: 'Ayam Bumbu Rujak',
                img: 'ayam-bumbu-rujak.png',
                category: 'Weekly Request',
                price: 125000,
            },
        ]
    }));

    Alpine.data('bestSellingProducts', () => ({
        items: [
            {
                id: 7,
                name: 'HARDSCAPE AQUASCAPE HR2',
                img: 'HR2.png',
                category: 'N-AQUATIC',
                before: 150000,
                price: 125000,
            },
            {
                id: 8,
                name: 'HARDSCAPE AQUASCAPE HR4',
                img: 'HR4.png',
                category: 'N-AQUATIC',
                before: 150000,
                price: 125000,
            },
            {
                id: 9,
                name: 'HARDSCAPE AQUASCAPE HR5',
                img: 'HR5.svg',
                category: 'N-AQUATIC',
                before: 150000,
                price: 125000,
            },
        ]
    }));

    Alpine.data('team', () => ({
        items: [
            {
                id: 1,
                name: 'EL IDDRIS',
                img: 'owner-1.jpg',
                division: 'CO-FOUNDER AND CHIEF EXECUTIVE OFFICER',
            },
            {
                id: 2,
                name: 'ARIEF PUTRA PERMANA',
                img: 'owner-2.jpg',
                division: 'CO-FOUNDER AND CHIEF EXECUTIVE OFFICER',
            },
            {
                id: 3,
                name: 'YULIA NOVITA RIZKI',
                img: 'owner-3.png',
                division: 'CHIEF MARKETING OFFICER',
            },
            {
                id: 4,
                name: 'RISNA AMALIA PUTRI',
                img: 'owner-4.jpg',
                division: 'CHIEF FINANCIAL OFFICER',
            },
            {
                id: 5,
                name: 'Echie Soepardi',
                img: 'owner-5.jpg',
                division: 'CHIEF BUSINESS DEVELOPMENT OFFICER',
            },
        ]
    }));

    Alpine.data('aquariumNeeds', () => ({
        items: [
            {
                id: 10,
                name: 'Hardscape jungle kontes, untuk tank 40cm , FREE PACKING KAYU',
                img: 'jungle-kontes-40cm.jpeg',
                category: 'Hardscape',
                price: 600000,
            },
            {
                id: 11,
                name: 'Hardscape aquascape HR1, rasio style aquarium decoration',
                img: 'HR1.jpeg',
                category: 'Hardscape',
                price: 175000,
            },
            {
                id: 12,
                name: 'Hardscape bonsai style aquarium decoration aquascape N-Aquatic BB1',
                img: 'BB1.jpeg',
                category: 'Hardscape',
                price: 150000,
            },
            {
                id: 13,
                name: 'Hardscape aquascape bonsai aquarium decoration BB7',
                img: 'BB7.jpeg',
                category: 'Hardscape',
                price: 150000,
            },
            {
                id: 9,
                name: 'Hardscape aquascape HR5 rasio style aquarium decoration',
                img: 'HR5.jpeg',
                category: 'Hardscape',
                price: 175000,
            },
            {
                id: 14,
                name: 'Hardscape aquascape B4 rasio style aquarium decoration',
                img: 'B4.jpeg',
                category: 'Hardscape',
                price: 85000,
            },
        ]
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama?
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barangnya sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan subtotalnya
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
            // ambil item yang mau dihapus berdasarkan idnya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri satu persatu
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
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
            } else if (cartItem.quantity === 1) {
                // jika barangnya tersisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

// IDR CONVERSION
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};