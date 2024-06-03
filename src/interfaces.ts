export interface IRestaurant {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: string[];
  reviews: string[];
}

export interface IDish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}
