export type ShopId = 'tesco' | 'sainsburys' | 'morrisons';

export type MainCategory = 'sandwich' | 'wrap' | 'salad' | 'sushi' | 'pasta' | 'soup' | 'hot food';
export type SnackCategory = 'crisps' | 'savoury snack' | 'chocolate' | 'sweet snack' | 'fruit' | 'cake/pastry';
export type DrinkCategory = 'water' | 'juice' | 'fizzy drink' | 'hot drink' | 'smoothie' | 'energy drink';

export type SlotType = 'main' | 'snack' | 'drink';

export interface MealDealItem {
  id: string;
  shopId: ShopId;
  slot: SlotType;
  category: MainCategory | SnackCategory | DrinkCategory;
  name: string;
  brand?: string;
  kcal?: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
}

export interface ShopDefinition {
  id: ShopId;
  displayName: string;
  colour: string;       // tailwind bg colour class
  textColour: string;   // tailwind text colour class
  borderColour: string; // tailwind border colour class
  items: MealDealItem[];
}

export interface Preferences {
  mains: MainCategory[];
  snacks: SnackCategory[];
  drinks: DrinkCategory[];
}

export interface Combination {
  id: string;
  shopId: ShopId;
  main: MealDealItem;
  snack: MealDealItem;
  drink: MealDealItem;
  savedAt?: number;
}

export const ALL_MAIN_CATEGORIES: MainCategory[] = [
  'sandwich', 'wrap', 'salad', 'sushi', 'pasta', 'soup', 'hot food',
];

export const ALL_SNACK_CATEGORIES: SnackCategory[] = [
  'crisps', 'savoury snack', 'chocolate', 'sweet snack', 'fruit', 'cake/pastry',
];

export const ALL_DRINK_CATEGORIES: DrinkCategory[] = [
  'water', 'juice', 'fizzy drink', 'hot drink', 'smoothie', 'energy drink',
];
