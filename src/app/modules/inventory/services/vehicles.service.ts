import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicleSelected: Vehicle;

  constructor(private http: HttpClient) { }

  getDataVehicles(): Observable<Data> {
    return this.http.get<Data>('http://localhost:3000/api/v1/vehicles');
  }

  setVehicleSelected(vehicle: Vehicle): void {
    this.vehicleSelected = vehicle;
  }

  getVehicleSelected(): Vehicle {
    return this.vehicleSelected;
  }

}
