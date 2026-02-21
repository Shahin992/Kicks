export type ProductCategory = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

export type ProductDto = {
  id: number;
  title: string;
  slug: string;
  price: number;
  images: string[];
  description: string;
  category?: ProductCategory;
};
