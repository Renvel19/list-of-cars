import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../service/cars.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars: Array<Car> = [];
  carsBybrand: Array<[string, number]> = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.getCars();
    this.searchCarsByBrand();
  }

  getCars() {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  searchCarsByBrand() {
    for (const car of this.cars) {
      let foundedCar = this.carsBybrand.find(
        (carBrand) => carBrand[0] === car.marca
      );
      if (
        this.carsBybrand.find((carBrand) => carBrand[0] === car.marca) !=
        undefined
      ) {
        foundedCar![1] += 1;
      } else {
        this.carsBybrand.push([car.marca, 1]);
      }
    }
    this.carsBybrand.sort((a, b) => b[1] - a[1]);
    console.log(this.carsBybrand);
  }
}
