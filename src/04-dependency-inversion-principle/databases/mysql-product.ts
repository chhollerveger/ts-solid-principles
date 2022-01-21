import IDatabaseProduct from "../interfaces/i-database-product";

export default class MySQLProduct implements IDatabaseProduct {

  getProductById(id: string): string {
    return `MySQL: Displaying product data ${id}`;
  }

}
