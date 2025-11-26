"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveById = retrieveById;
exports.retrieveAllProducts = retrieveAllProducts;
const errorHandler_1 = require("../utils/errorHandler");
async function retrieveById(num) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${num}`);
        if (!response.ok) {
            throw new errorHandler_1.handlerError("Failed to retrieve by ID");
        }
        const data = response.json();
        return data;
    }
    catch (error) {
        throw new errorHandler_1.handlerError("");
    }
}
async function retrieveAllProducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
            throw new errorHandler_1.handlerError("Failed to retrieve all Products");
        }
        const data = response.json();
        return data;
    }
    catch (error) {
        throw new errorHandler_1.handlerError("Network Error: " + error);
    }
}
//# sourceMappingURL=apiService.js.map