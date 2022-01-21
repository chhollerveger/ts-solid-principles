import IPaymentInstrument from "../interfaces/i-payment-instrument";

export default class Rewards implements IPaymentInstrument {

  validate(): void {
    console.log("Limit OK, Rewards OK!");
  }

  collectPayment(): void {
    console.log("Payment made successfully!");
    console.log("Score credited in the Rewards Program!");
  }

}