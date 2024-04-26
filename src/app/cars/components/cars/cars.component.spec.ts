import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarsComponent } from './cars.component';
import { CarsService } from '../../service/cars.service';
import { Car } from '../../models/car';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let carsServiceSpy: jasmine.SpyObj<CarsService>;

  beforeEach(async () => {
    const carsServiceSpyObj = jasmine.createSpyObj('CarsService', ['getCars']);

    await TestBed.configureTestingModule({
      declarations: [CarsComponent],
      providers: [{ provide: CarsService, useValue: carsServiceSpyObj }],
    }).compileComponents();

    carsServiceSpy = TestBed.inject(CarsService) as jasmine.SpyObj<CarsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCars and searchCarsByBrand on initialization', () => {
    const cars: Car[] = [
      {
        id: 1,
        marca: 'Renault',
        linea: 'Kangoo',
        referencia: 'VU Express',
        modelo: 2017,
        kilometraje: 93272,
        color: 'Blanco',
        imagen:
          'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg',
      },
      {
        id: 2,
        marca: 'Chevrolet',
        linea: 'Spark',
        referencia: 'Life',
        modelo: 2018,
        kilometraje: 55926,
        color: 'Plata',
        imagen:
          'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg',
      },
      {
        id: 3,
        marca: 'Chevrolet',
        linea: 'Sail',
        referencia: 'LT Sedan',
        modelo: 2016,
        kilometraje: 94321,
        color: 'Rojo',
        imagen:
          'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png',
      },
    ];

    const carsByBrand: [string, number][] = [
      ['Chevrolet', 2],
      ['Renault', 1],
    ];

    carsServiceSpy.getCars.and.returnValue(of(cars));

    fixture.detectChanges();

    expect(carsServiceSpy.getCars).toHaveBeenCalled();
    expect(component.cars).toEqual(cars);
    expect(component.carsBybrand).toEqual(carsByBrand);
  });

  it('should update carsBybrand when cars are received', () => {
    const cars: Car[] = [
      {
        id: 1,
        marca: 'Renault',
        linea: 'Kangoo',
        referencia: 'VU Express',
        modelo: 2017,
        kilometraje: 93272,
        color: 'Blanco',
        imagen:
          'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg',
      },
      {
        id: 2,
        marca: 'Chevrolet',
        linea: 'Spark',
        referencia: 'Life',
        modelo: 2018,
        kilometraje: 55926,
        color: 'Plata',
        imagen:
          'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg',
      },
      {
        id: 3,
        marca: 'Chevrolet',
        linea: 'Sail',
        referencia: 'LT Sedan',
        modelo: 2016,
        kilometraje: 94321,
        color: 'Rojo',
        imagen:
          'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png',
      },
    ];

    const carsByBrand: [string, number][] = [
      ['Chevrolet', 2],
      ['Renault', 1],
    ];

    carsServiceSpy.getCars.and.returnValue(of(cars));

    fixture.detectChanges();

    expect(component.carsBybrand).toEqual(carsByBrand);
  });
});
