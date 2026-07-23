export interface ProductCardModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: {
    id: number;
    name: string;
  };
  images: string[];
}
