import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarClientService {

  constructor(private httpClient: HttpClient) { }
  public getCar():Observable<RootObject>
  {
    return this.httpClient.get<RootObject>('http://localhost:8080/cars');
  }
}

  export interface RootObject {
    id: number;
    mark: string;
    colour: string;
    model: string;
  }

