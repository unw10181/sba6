export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number);
    getPriceWithDiscount: () => number;
    displayDetails: () => string;
}
//# sourceMappingURL=Product.d.ts.map