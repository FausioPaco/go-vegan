export type MenuCategory = {
  id: number;
  name: string;
  variations: number;
  urlImage: string;
};

export type Dish = {
  id: number;
  title: string;
  description: string;
  price: number;
  perUnit: number;
  unit: 'Plate' | 'g' | 'Unit';
  url: string;
};

export type Dishes = {
  rices: Dish[];
  pastas: Dish[];
  salads: Dish[];
  sauces: Dish[];
};
