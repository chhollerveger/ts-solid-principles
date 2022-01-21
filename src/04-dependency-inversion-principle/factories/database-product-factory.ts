import MongoDBProduct from "../databases/mongodb-product";
import MySQLProduct from "../databases/mysql-product";
import SQLServerProduct from "../databases/sqlserver-product";
import EDatabaseType from "../enums/e-database-type";
import IDatabaseProduct from "../interfaces/i-database-product";


export default class DatabaseProductFactory {

  public static create(type: EDatabaseType): IDatabaseProduct {

    switch (type) {
      case EDatabaseType.MYSQL:
        return new MySQLProduct();
      case EDatabaseType.MONGODB:
        return new MongoDBProduct();
      default:
        return new SQLServerProduct();
    }

  }

}
