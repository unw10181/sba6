"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    if (product.category == "grocery") {
        let taxAmnt = (product.price *= 0.03);
        return (product.price += taxAmnt);
    }
    else {
        let taxAmnt = (product.price *= 0.0475);
        return taxAmnt;
    }
}
//# sourceMappingURL=taxCalculator.js.map