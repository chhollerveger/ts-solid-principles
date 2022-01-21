import IDatabaseProduct from "../interfaces/i-database-product";

export default class SQLServerProduct implements IDatabaseProduct {

  getProductById(id: string): string {
    return `SQLServer: Displaying product data ${id}`;
  }

}
