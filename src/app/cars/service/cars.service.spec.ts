import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CarsService } from './cars.service';
import { environment } from '../../../environments/environment';
import { Car } from '../models/car';

describe('CarsService', () => {
  let service: CarsService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.listCarsUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarsService],
    });
    service = TestBed.inject(CarsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cars from API', () => {
    const mockCars: Car[] = [
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

    service.getCars().subscribe((cars) => {
      expect(cars).toEqual(mockCars);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCars);
  });
});
