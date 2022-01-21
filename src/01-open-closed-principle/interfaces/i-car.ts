export default interface ICar {

  configureVehicle(color: string, year: number, engine: number, seats: number, doors: number): void;
  startVehicle(): void;

}