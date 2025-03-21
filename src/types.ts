export interface Doll {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    hairColor: string;
    eyeColor: string;
    skinTone: string;
    height: number;
    weight: number;
    available: boolean;
    featured: boolean;
  }
  
  export type FilterOptions = {
    name?: string;
    hairColor?: string;
    eyeColor?: string;
    skinTone?: string;
  }