import { Product } from "./models/Product";
import { retrieveAllProducts, retrieveById } from "./services/apiService";
import { calculateTax } from "./utils/taxCalculator";

async function run() {
  try {
    //Instance of fetch for product with id: 1
    const data = await retrieveById(1);

    //Instance of product, appending parameters from data
    const product = new Product(
      data.id,
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.rating
    );
    
    console.log(product.displayDetails());
    console.log(calculateTax(product));
    console.log("Price after discount:", product.getPriceWithDiscount());
  } catch (err) {
    //try catch
    console.error("Something went wrong:", err);
  }
}

run();
