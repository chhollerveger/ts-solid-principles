import IDatabaseProduct from "../interfaces/i-database-product";

export default class MongoDBProduct implements IDatabaseProduct {

  getProductById(id: string): string {
    return `MongoDB: Displaying product data ${id}`;
  }

}
