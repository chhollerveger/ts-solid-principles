import ICar from "../interfaces/i-car";
import IVehicle from "../interfaces/i-vehicle";


export default class Car implements IVehicle, ICar {

  private color: string;
  private year: number;
  private engine: number;
  private seats: number;

  constructor(color: string, year: number, engine: number, seats: number) {

    this.configureCar(color, year, engine, seats);

  }

  configureCar(color: string, year: number, engine: number, seats: number): void {

    this.color = color;
    this.year = year;
    this.engine = engine;
    this.seats = seats;

    console.log(`Car ${this.color}, with ${this.seats} seats, engine ${this.engine} of the year ${this.year}.`);

    this.startVehicle();

  }

  startVehicle() {
    console.log("Starting the engines.");
  }

}
