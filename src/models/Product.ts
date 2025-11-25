import { calculateDiscount } from "../utils/discountCalculator";

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  taxPercentage: number;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    taxPercentage: number = 0.0475
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    if (category == "grocery") {
      discountPercentage == 0.03;
    }
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.taxPercentage = taxPercentage;
  }

  getPriceWithDiscount = (): number => {
    const discount = calculateDiscount(this.price, this.discountPercentage);
    return (this.price -= discount);
  };

  displayDetails = (): string => {
    return `Product: ${this.title} Price: ${this.price} Description: ${this.description} Rating: ${this.rating}`;
  };
}
