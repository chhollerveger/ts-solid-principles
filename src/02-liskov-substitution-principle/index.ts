import CreditCard from "./models/credit-card";
import DebitCard from "./models/debit-card";
import Rewards from "./models/rewards";


const creditCard = new CreditCard();
creditCard.validate();
creditCard.collectPayment();

const debitCard = new DebitCard();
debitCard.validate();
debitCard.collectPayment();

const rewards = new Rewards();
rewards.validate();
rewards.collectPayment();
