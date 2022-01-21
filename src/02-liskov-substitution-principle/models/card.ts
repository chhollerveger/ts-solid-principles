import IPaymentInstrument from "../interfaces/i-payment-instrument";

export default abstract class Card implements IPaymentInstrument {

  validate(): void {
    console.log("Basic validation!");
  }
  collectPayment(): void {
    console.log("Payment made.");
  }

}