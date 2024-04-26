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

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
}
