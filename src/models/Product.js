"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    constructor(id, title, description, category, price, discountPercentage, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }
    getPriceWithDiscount = () => {
        const discount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        return (this.price -= discount);
    };
    displayDetails = () => {
        return `Product: ${this.title} Price: ${this.price} Description: ${this.description} Rating: ${this.rating}`;
    };
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map