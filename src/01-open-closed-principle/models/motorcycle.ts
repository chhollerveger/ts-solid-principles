import IMotorcycle from "../interfaces/i-motorcycle";

export default class Motorcycle implements IMotorcycle {

  private color: string;
  private year: number;
  private engine: number;

  constructor(color: string, year: number, engine: number) {

    this.configureVehicle(color, year, engine);

  }

  configureVehicle(color: string, year: number, engine: number): void {

    this.color = color;
    this.year = year;
    this.engine = engine;

    this.startVehicle();

  }
  startVehicle(): void {
    console.log(`Motorcycle ${this.color}, year ${this.year} and ${this.engine} cylinders.`);
  }

}
