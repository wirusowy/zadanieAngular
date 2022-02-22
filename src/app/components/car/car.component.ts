import { Component, OnInit } from '@angular/core';
import {CarClientService, RootObject} from "../../services/car-client.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  message: string | undefined;
  rootObject: RootObject | undefined;

  constructor(private carClientService: CarClientService) {
  }

  ngOnInit(): void {
    this.carClientService.getCar().subscribe(value => {
this.rootObject=value;
    });
  }

  sayHallo(value: string) {
this.message='hello' +value;
  }
}
