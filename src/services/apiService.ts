import { handlerError } from "../utils/errorHandler";

export async function retrieveById(num: number) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${num}`);
    if (!response.ok) {
      throw new handlerError("Failed to retrieve by ID");
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new handlerError("");
  }
}

export async function retrieveAllProducts(): Promise<string> {
  try {
   const response =  await fetch(`https://dummyjson.com/products`);
   if (!response.ok) {
    throw new handlerError("Failed to retrieve all Products");
   }
   const data = response.json();
   return data;
  } catch (error) {
    throw new handlerError("Network Error: " + error)
  }
}
