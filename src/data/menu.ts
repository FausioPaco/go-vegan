import { Dishes, MenuCategory } from '@/types/Menu';

export const MENU_CATEGORIES = <MenuCategory[]>[
  {
    id: 1,
    name: 'Rices',
    variations: 3,
    urlImage: 'rices.png',
  },
  {
    id: 2,
    name: 'Salads',
    variations: 6,
    urlImage: 'salads.png',
  },
  {
    id: 3,
    name: 'Pastas',
    variations: 3,
    urlImage: 'pastas.png',
  },
  {
    id: 4,
    name: 'Sauces',
    variations: 7,
    urlImage: 'sauces.png',
  },
];

export const ALL_DISHES: Dishes = {
  rices: [
    {
      id: 1,
      title: 'Brown Rice',
      description:
        'Rice prepared by cooking white rice with minced garlic and grated lemon peel or lemon juice, which gives it a citrus and refreshing flavor.',
      price: 8,
      perUnit: 120,
      unit: 'g',
      url: 'brown-rice.jpg',
    },

    {
      id: 2,
      title: 'Lemon Garlic Rice',
      description:
        'Brown rice infused with minced garlic and grated lemon peel or lemon juice, creating a dish with a zesty and refreshing citrus flavor. ',
      price: 8,
      perUnit: 120,
      unit: 'g',
      url: 'lemon-garlic-rice.jpg',
    },

    {
      id: 3,
      title: 'Coconut Rice',
      description:
        'It incorporates the flavor and texture of coconut.. White rice is cooked with coconut milk, which gives it a creamy texture and a rich, slightly sweet flavor. ',
      price: 6,
      perUnit: 120,
      unit: 'g',
      url: 'coconut-rice.jpg',
    },
  ],
  pastas: [
    {
      id: 4,
      title: 'Chickpea Pasta with Mushrooms',
      description:
        'A flavorful and nutritious dish featuring chickpea-based pasta tossed with fresh spinach and sautéed mushrooms.',
      price: 10,
      perUnit: 1,
      unit: 'Plate',
      url: 'chickpea-pasta-with-mushrooms.jpg',
    },
    {
      id: 5,
      title: 'Primavera Pasta with Seasonal Veggies',
      description:
        'A light and colorful dish featuring al dente pasta mixed with a medley of fresh seasonal vegetables. This recipe highlights natural flavors with a refreshing touch, making it a perfect choice for a healthy and vibrant meal.',
      price: 8,
      perUnit: 1,
      unit: 'Plate',
      url: 'primavera-pasta-with-seasonal-veggies.jpg',
    },
    {
      id: 6,
      title: 'Roasted Garlic and Spinach Pasta',
      description:
        'A simple yet flavorful dish featuring al dente pasta paired with fresh spinach, elevated by the rich, caramelized taste of roasted garlic.',
      price: 10,
      perUnit: 1,
      unit: 'Plate',
      url: 'roasted-garlic-and-spinach-pasta.jpg',
    },
  ],
  salads: [
    {
      id: 7,
      title: 'Sweet Potato Salad',
      description:
        'Salad that uses cooked sweet potatoes, mixed with ingredients such as red onion, peppers, coriander and citrus seasoning',
      price: 10,
      perUnit: 1,
      unit: 'Unit',
      url: 'sweet-potato-salad.jpg',
    },
    {
      id: 8,
      title: 'Taco Salad',
      description:
        'It combines ingredients such as lettuce, tomato, cheese, taco-seasoned ground beef, sour cream and crispy nachos.',
      price: 10,
      perUnit: 1,
      unit: 'Unit',
      url: 'taco-salad.jpg',
    },
    {
      id: 9,
      title: 'Green Salad with Avocado and Seeds',
      description:
        'A fresh and nutritious salad featuring crisp green leaves, creamy avocado chunks, and a mix of nutrient-packed seeds. Perfect for a light and healthy meal, full of natural flavors and balanced textures.',
      price: 6,
      perUnit: 1,
      unit: 'Unit',
      url: 'green-salad-with-avocado-and-seeds.jpg',
    },
  ],
  sauces: [
    {
      id: 10,
      title: 'Vegan Tomato Sauce',
      description:
        'A rich and flavorful vegan tomato sauce made with ripe tomatoes, garlic, onions, and a blend of aromatic herbs.',
      price: 5,
      perUnit: 1,
      unit: 'Unit',
      url: 'vegan-tomato-sauce.jpg',
    },
    {
      id: 11,
      title: 'Rosemary Garlic Aioli Sauce',
      description:
        'An overhead shot of a small bowl filled with creamy aioli sauce, flavored with rosemary and garlic. It blends the smoothness of aioli with the refreshing taste of rosemary and the boldness of garlic.',
      price: 6,
      perUnit: 1,
      unit: 'Unit',
      url: 'rosemary-garlic-aioli-sauce.jpg',
    },
    {
      id: 12,
      title: 'Avocado Sauce',
      description:
        'A creamy and fresh sauce made with ripe avocado, lime juice, cilantro, onion, and chili. Perfect for pairing with tacos, tortillas, salads, or as a dip for veggies, this sauce offers a light and nutritious flavor.',
      price: 6,
      perUnit: 1,
      unit: 'Unit',
      url: 'avocado-sauce.jpg',
    },
  ],
} as const;
