import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsModule } from './cars/cars.module';

const routes: Routes = [{ path: '', loadChildren: () => CarsModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
