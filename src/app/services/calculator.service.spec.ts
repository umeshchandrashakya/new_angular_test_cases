import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("calculator service", () => {
  let calculator: CalculatorService;
  let loggerSpy: any;
  beforeEach(() => {
    console.log("beforeEach");
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    //calculator = new CalculatorService(loggerSpy);
    //using TestBed
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    });
    calculator = TestBed.get(CalculatorService);
  });

  it("should add two number", () => {
    console.log("add two number");
    // pending();
    //one way
    //const calculator = new CalculatorService(new LoggerService());
    //const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    //const calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  it("it should subtract two number", () => {
    console.log("subtract two number");
    //pending();
    //const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    //const calculator = new CalculatorService(logger);
    const result = calculator.subtract(4, 2);
    expect(result).toBe(2);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
