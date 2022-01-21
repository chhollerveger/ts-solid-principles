import Card from "./card";

export default class DebitCard extends Card {

  validate(): void {

    console.log("Checking debit card balance...");
    console.log("Balance available.");

  }

}
