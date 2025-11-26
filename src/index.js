"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const taxCalculator_1 = require("./utils/taxCalculator");
async function run() {
    try {
        //Instance of fetch for product with id: 1
        const data = await (0, apiService_1.retrieveById)(1);
        //Instance of product, appending parameters from data
        const product = new Product_1.Product(data.id, data.title, data.description, data.category, data.price, data.discountPercentage, data.rating);
        console.log(product.displayDetails());
        console.log((0, taxCalculator_1.calculateTax)(product));
        console.log("Price after discount:", product.getPriceWithDiscount());
    }
    catch (err) {
        //try catch
        console.error("Something went wrong:", err);
    }
}
run();
//# sourceMappingURL=index.js.map