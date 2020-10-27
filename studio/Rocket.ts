import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
      
      let totalMass = 0;
      for(let items of Cargo[]){
        totalMass += items; 
       }
       return totalMass
    }
}
