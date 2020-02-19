import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({ providedIn: "root" })
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}

  add(num1: number, num2: number) {
    this.loggerService.log("addition operation is called");
    //this.loggerService.log("addition operation is called");
    return num1 + num2;
  }
  subtract(num1: number, num2: number) {
    this.loggerService.log("subtraction operation is called");
    return num1 - num2;
  }
}
