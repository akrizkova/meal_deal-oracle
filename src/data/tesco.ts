import type { ShopDefinition } from '../types';

export const tesco: ShopDefinition = {
  id: 'tesco',
  displayName: 'Tesco',
  colour: 'bg-blue-600',
  textColour: 'text-blue-600',
  borderColour: 'border-blue-600',
  items: [
    // Mains
    { id: 'tesco-main-001', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Tesco Finest BLT', kcal: 420 },
    { id: 'tesco-main-002', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Egg & Cress Sandwich', kcal: 310, isVegetarian: true },
    { id: 'tesco-main-003', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Chicken & Stuffing Sandwich', kcal: 385 },
    { id: 'tesco-main-004', shopId: 'tesco', slot: 'main', category: 'wrap', name: 'Chicken Caesar Wrap', kcal: 390 },
    { id: 'tesco-main-005', shopId: 'tesco', slot: 'main', category: 'wrap', name: 'Falafel & Houmous Wrap', kcal: 350, isVegan: true },
    { id: 'tesco-main-006', shopId: 'tesco', slot: 'main', category: 'salad', name: 'Greek Salad Bowl', kcal: 210, isVegetarian: true },
    { id: 'tesco-main-007', shopId: 'tesco', slot: 'main', category: 'salad', name: 'Tuna Nicoise Salad', kcal: 280 },
    { id: 'tesco-main-008', shopId: 'tesco', slot: 'main', category: 'pasta', name: 'Pesto Pasta Pot', kcal: 350, isVegetarian: true },
    { id: 'tesco-main-009', shopId: 'tesco', slot: 'main', category: 'sushi', name: 'Salmon Nigiri Selection', kcal: 290 },
    { id: 'tesco-main-010', shopId: 'tesco', slot: 'main', category: 'sushi', name: 'Mixed Sushi Box', kcal: 340 },
    { id: 'tesco-main-011', shopId: 'tesco', slot: 'main', category: 'soup', name: 'Tomato & Basil Soup', kcal: 160, isVegan: true },
    { id: 'tesco-main-012', shopId: 'tesco', slot: 'main', category: 'hot food', name: 'Mac & Cheese Pot', kcal: 420, isVegetarian: true },

    // Snacks
    { id: 'tesco-snack-001', shopId: 'tesco', slot: 'snack', category: 'crisps', name: 'Walkers Ready Salted', brand: 'Walkers', kcal: 130 },
    { id: 'tesco-snack-002', shopId: 'tesco', slot: 'snack', category: 'crisps', name: 'Walkers Salt & Vinegar', brand: 'Walkers', kcal: 128 },
    { id: 'tesco-snack-003', shopId: 'tesco', slot: 'snack', category: 'crisps', name: "Pringles Original 40g", brand: 'Pringles', kcal: 198 },
    { id: 'tesco-snack-004', shopId: 'tesco', slot: 'snack', category: 'savoury snack', name: 'Mini Cheddars Original', brand: 'McVitie\'s', kcal: 175 },
    { id: 'tesco-snack-005', shopId: 'tesco', slot: 'snack', category: 'chocolate', name: 'KitKat 4-Finger', brand: 'Nestlé', kcal: 207 },
    { id: 'tesco-snack-006', shopId: 'tesco', slot: 'snack', category: 'chocolate', name: 'Cadbury Dairy Milk Bar', brand: 'Cadbury', kcal: 220, isVegetarian: true },
    { id: 'tesco-snack-007', shopId: 'tesco', slot: 'snack', category: 'sweet snack', name: 'Haribo Starmix 80g', brand: 'Haribo', kcal: 272 },
    { id: 'tesco-snack-008', shopId: 'tesco', slot: 'snack', category: 'fruit', name: 'Fruit Salad Pot', kcal: 65, isVegan: true },
    { id: 'tesco-snack-009', shopId: 'tesco', slot: 'snack', category: 'cake/pastry', name: 'Tesco Yum Yum', kcal: 280, isVegetarian: true },

    // Drinks
    { id: 'tesco-drink-001', shopId: 'tesco', slot: 'drink', category: 'water', name: 'Highland Spring Still 500ml', kcal: 0, isVegan: true },
    { id: 'tesco-drink-002', shopId: 'tesco', slot: 'drink', category: 'juice', name: 'Tropicana Orange Juice 300ml', brand: 'Tropicana', kcal: 117 },
    { id: 'tesco-drink-003', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139 },
    { id: 'tesco-drink-004', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Diet Coke 330ml', brand: 'Coca-Cola', kcal: 1 },
    { id: 'tesco-drink-005', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Fanta Orange 330ml', brand: 'Fanta', kcal: 63 },
    { id: 'tesco-drink-006', shopId: 'tesco', slot: 'drink', category: 'smoothie', name: 'Innocent Mango & Passion Fruit 300ml', brand: 'Innocent', kcal: 156 },
    { id: 'tesco-drink-007', shopId: 'tesco', slot: 'drink', category: 'energy drink', name: 'Monster Energy Original 500ml', brand: 'Monster', kcal: 225 },
    { id: 'tesco-drink-008', shopId: 'tesco', slot: 'drink', category: 'hot drink', name: 'Tesco Americano', kcal: 5 },
  ],
};
