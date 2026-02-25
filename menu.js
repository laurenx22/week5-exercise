const menuItems = [

  // Coffee & Espresso — Espresso Drinks
  {
    id: 1,
    name: "Classic Espresso",
    description: "Rich, bold, and perfectly pulled",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 3.25
  },
  {
    id: 2,
    name: "Americano",
    description: "Espresso with hot water for a smooth, full-bodied cup",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 3.75
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety foam",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 4.50
  },
  {
    id: 4,
    name: "Latte",
    description: "Espresso with steamed milk and a light foam crown",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 4.75
  },
  {
    id: 5,
    name: "Vanilla Bean Latte",
    description: "House-made vanilla syrup with our signature espresso",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 5.25
  },
  {
    id: 6,
    name: "Mocha",
    description: "Espresso, steamed milk, and Belgian chocolate",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 5.50
  },
  {
    id: 7,
    name: "Caramel Macchiato",
    description: "Vanilla, steamed milk, espresso, and caramel drizzle",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 5.50
  },
  {
    id: 8,
    name: "The Bookworm",
    description: "Our signature drink: maple, cinnamon, espresso, and oat milk",
    category: "Coffee & Espresso",
    subcategory: "Espresso Drinks",
    price: 5.75
  },

  // Coffee & Espresso — Brewed Coffee
  {
    id: 9,
    name: "House Blend",
    description: "Medium roast with notes of chocolate and toasted nuts",
    category: "Coffee & Espresso",
    subcategory: "Brewed Coffee",
    price: 3.25
  },
  {
    id: 10,
    name: "Single Origin Pour Over",
    description: "Rotating selection, ask your barista for today's origin",
    category: "Coffee & Espresso",
    subcategory: "Brewed Coffee",
    price: 4.50
  },
  {
    id: 11,
    name: "Cold Brew",
    description: "Steeped for 20 hours for a smooth, bold finish",
    category: "Coffee & Espresso",
    subcategory: "Brewed Coffee",
    price: 4.25
  },
  {
    id: 12,
    name: "Nitro Cold Brew",
    description: "Creamy, cascading cold brew infused with nitrogen",
    category: "Coffee & Espresso",
    subcategory: "Brewed Coffee",
    price: 5.00
  },

  // Tea & Other Beverages — Hot Tea
  {
    id: 13,
    name: "Earl Grey",
    description: "Classic bergamot-infused black tea",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 3.50
  },
  {
    id: 14,
    name: "English Breakfast",
    description: "Robust and full-bodied, perfect with milk",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 3.50
  },
  {
    id: 15,
    name: "Chamomile Dreams",
    description: "Soothing chamomile with hints of honey and lavender",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 3.50
  },
  {
    id: 16,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with your choice of milk",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 5.25
  },
  {
    id: 17,
    name: "London Fog",
    description: "Earl Grey, steamed milk, and vanilla",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 4.75
  },
  {
    id: 18,
    name: "Chai Latte",
    description: "House-spiced chai with steamed milk",
    category: "Tea & Other Beverages",
    subcategory: "Hot Tea",
    price: 4.75
  },

  // Tea & Other Beverages — Other Beverages
  {
    id: 19,
    name: "Hot Chocolate",
    description: "Rich Belgian chocolate with whipped cream",
    category: "Tea & Other Beverages",
    subcategory: "Other Beverages",
    price: 4.25
  },
  {
    id: 20,
    name: "Steamer",
    description: "Steamed milk with your choice of flavor",
    category: "Tea & Other Beverages",
    subcategory: "Other Beverages",
    price: 3.75
  },
  {
    id: 21,
    name: "Italian Soda",
    description: "Sparkling water with house-made syrups",
    category: "Tea & Other Beverages",
    subcategory: "Other Beverages",
    price: 3.50
  },
  {
    id: 22,
    name: "Fresh Squeezed Orange Juice",
    description: "Made to order with Florida oranges",
    category: "Tea & Other Beverages",
    subcategory: "Other Beverages",
    price: 4.50
  },

  // Food & Pastries — Fresh Baked Pastries
  {
    id: 23,
    name: "Famous Cinnamon Roll",
    description: "Warm, gooey, with cream cheese frosting — our bestseller!",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 4.50
  },
  {
    id: 24,
    name: "Butter Croissant",
    description: "Flaky, buttery, baked fresh every morning",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 3.75
  },
  {
    id: 25,
    name: "Almond Croissant",
    description: "Filled with almond cream and topped with sliced almonds",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 4.50
  },
  {
    id: 26,
    name: "Blueberry Muffin",
    description: "Bursting with fresh blueberries and a streusel top",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 3.50
  },
  {
    id: 27,
    name: "Chocolate Chip Cookie",
    description: "Chewy center, crispy edges, Belgian chocolate chunks",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 2.75
  },
  {
    id: 28,
    name: "Scone of the Day",
    description: "Ask your server for today's flavor",
    category: "Food & Pastries",
    subcategory: "Fresh Baked Pastries",
    price: 3.50
  },

  // Food & Pastries — Light Fare
  {
    id: 29,
    name: "Avocado Toast",
    description: "Smashed avocado, everything seasoning, microgreens on sourdough",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 8.50
  },
  {
    id: 30,
    name: "Caprese Panini",
    description: "Fresh mozzarella, tomato, basil, and balsamic glaze",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 9.75
  },
  {
    id: 31,
    name: "Turkey & Brie Sandwich",
    description: "Roasted turkey, brie, arugula, and cranberry aioli",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 10.50
  },
  {
    id: 32,
    name: "Soup of the Day",
    description: "House-made, served with crusty bread",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 6.50
  },
  {
    id: 33,
    name: "Quiche Lorraine",
    description: "Classic bacon and gruyere with side salad",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 8.75
  },
  {
    id: 34,
    name: "Yogurt Parfait",
    description: "Greek yogurt, house granola, seasonal fruit, and honey",
    category: "Food & Pastries",
    subcategory: "Light Fare",
    price: 6.25
  }

];