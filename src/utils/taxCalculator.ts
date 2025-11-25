import { Product } from "../models/Product";

export function calculateTax(product: Product): number {
  if (product.category == "grocery") {
    let taxAmnt = (product.price *= 0.03);
    return (product.price += taxAmnt);
  } else {
    let taxAmnt = (product.price *= 0.0475);
    return taxAmnt;
  }
}
