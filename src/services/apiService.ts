import { handlerError } from "../utils/errorHandler";

async function retrieveById(num: number) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${num}`);
    if (!response.ok) {
      throw new handlerError("");
    }
  } catch (error) {}
}

async function retrieveAllProducts() {
  try {
    fetch(`https://dummyjson.com/products`);
  } catch (error) {}
}
