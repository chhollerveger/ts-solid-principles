import IVehicle from "../interfaces/i-vehicle";
import IMotorcycle from "../interfaces/i-motorcycle";

export default class Motorcycle implements IVehicle, IMotorcycle {

  private color: string;
  private year: number;
  private engine: number;

  constructor(color: string, year: number, engine: number) {

    this.configureMotorcycle(color, year, engine);

  }

  configureMotorcycle(color: string, year: number, engine: number): void {

    this.color = color;
    this.year = year;
    this.engine = engine;

    console.log(`Motorcycle ${this.color}, year ${this.year} and ${this.engine} cylinders.`);

    this.startVehicle();

  }

  startVehicle() {

    console.log("Starting the engines.");

  }

}
