'use client';

const menuData = {
  Deals: [
    {
      name: 'Family Feast',
      price: '$29.99',
      img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      desc: 'Serves 4 | Includes 2 pizzas, 2 sides & 1.5L drink.',
    },
    {
      name: 'Couple Combo',
      price: '$15.99',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      desc: '2 burgers, fries, and soft drinks.',
    },
  ],
  Starters: [
    {
      name: 'Garlic Bread',
      price: '$4.99',
      img: 'https://images.pexels.com/photos/1700511/pexels-photo-1700511.jpeg',
      desc: 'Toasted with fresh garlic butter and herbs.',
    },
    {
      name: 'Spicy Wings',
      price: '$6.99',
      img: 'https://images.pexels.com/photos/4676405/pexels-photo-4676405.jpeg',
      desc: '6 chicken wings tossed in fiery hot sauce.',
    },
  ],
  Mains: [
    {
      name: 'Classic Cheeseburger',
      price: '$8.99',
      img: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
      desc: '100% beef patty, cheddar, lettuce, tomato, and sauce.',
    },
    {
      name: 'Grilled Chicken Pasta',
      price: '$11.99',
      img: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
      desc: 'Creamy Alfredo with grilled chicken & parmesan.',
    },
  ],
  Desserts: [
    {
      name: 'Chocolate Lava Cake',
      price: '$5.99',
      img: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
      desc: 'Rich chocolate cake with molten center.',
    },
    {
      name: 'Vanilla Ice Cream',
      price: '$3.99',
      img: 'https://images.pexels.com/photos/4109994/pexels-photo-4109994.jpeg',
      desc: 'Classic vanilla with real cream.',
    },
  ],
  Drinks: [
    {
      name: 'Mint Lemonade',
      price: '$2.99',
      img: 'https://images.pexels.com/photos/1269041/pexels-photo-1269041.jpeg',
      desc: 'Fresh lemonade with mint leaves.',
    },
    {
      name: 'Coca-Cola',
      price: '$1.99',
      img: 'https://images.pexels.com/photos/12247041/pexels-photo-12247041.jpeg',
      desc: 'Chilled and refreshing.',
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-yellow-400 text-center uppercase mb-12">
        Our Menu
      </h1>

      {Object.entries(menuData).map(([category, items]) => (
        <section key={category} className="mb-20 max-w-7xl mx-auto">
          <h2 className="text-2xl text-yellow-300 font-semibold mb-6 border-b border-yellow-700 pb-2 uppercase">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition hover:scale-[1.02]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-yellow-300">{item.name}</h3>
                    <span className="text-sm text-yellow-500">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
