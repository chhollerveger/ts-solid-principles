import Card from "./card";

export default class CreditCard extends Card {

  validate(): void {

    console.log("Validating credit card limit...");

  }

}
