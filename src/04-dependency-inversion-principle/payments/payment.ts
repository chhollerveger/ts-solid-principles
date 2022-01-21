import EDatabaseType from "../enums/e-database-type";
import DatabaseProductFactory from "../factories/database-product-factory";

export default class Payment {

  pay(id: string): void {
    const dbProduct = DatabaseProductFactory.create(EDatabaseType.MYSQL);
    const product = dbProduct.getProductById(id);
    console.log(product);
  }

}
