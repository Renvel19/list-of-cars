import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarsRoutingmodule } from './cars.routing';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [CarsComponent],
  imports: [CommonModule, RouterModule, CarsRoutingmodule],
})
export class CarsModule {}
