import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: CarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class CarsRoutingmodule {}
//export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
