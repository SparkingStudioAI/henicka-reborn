import { Doll } from '../types';

export const dolls: Doll[] = [
  {
    id: '1',
    name: 'Sofia',
    description: 'Uma linda boneca com cabelos castanhos cacheados e olhos azuis expressivos.',
    price: 899.99,
    images: [
      'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602734846251-7de79e2b5137?auto=format&fit=crop&q=80'
    ],
    hairColor: 'Castanho',
    eyeColor: 'Azul',
    skinTone: 'Clara',
    height: 50,
    weight: 2.5,
    available: true,
    featured: true
  },
  {
    id: '2',
    name: 'Luna',
    description: 'Boneca delicada com cabelos loiros e olhos verdes encantadores.',
    price: 999.99,
    images: [
      'https://images.unsplash.com/photo-1602734846318-e434fe74759f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602734846332-914fcb094bb1?auto=format&fit=crop&q=80'
    ],
    hairColor: 'Loiro',
    eyeColor: 'Verde',
    skinTone: 'Clara',
    height: 45,
    weight: 2.3,
    available: true,
    featured: true
  }
];