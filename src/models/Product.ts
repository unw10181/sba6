import { calculateDiscount } from "../utils/discountCalculator";

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;

    this.discountPercentage = discountPercentage;
    this.rating = rating;
  }

  getPriceWithDiscount = (): number => {
    const discount = calculateDiscount(this.price, this.discountPercentage);
    return (this.price -= discount);
  };

  displayDetails = (): string => {
    return `Product: ${this.title} Price: ${this.price} Description: ${this.description} Rating: ${this.rating}`;
  };
}
