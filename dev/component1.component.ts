/**
 * Created by yjw9012 on 7/6/16.
 */
import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";

@Component({
    selector: 'component-1',
    template: `
        <div>
            <h1>Logging Service</h1>
            <input type="text" #message />
            <button (click)="onLog(message.value)">Send</button>
        </div>
        <div>
            <h1>Calculator Service</h1>
            <p>Add or multiply these two numbers</p>
            <input type="text" #num1 />
            <input type="text" #num2 />
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <button (click)="onAdd(num1.value, num2.value)">Add</button>
            <br>
            <p>Result: {{result}}</p>
        </div>
    `,
    providers: [LoggingService, CalculatorService]
})

export class Component1Component {
    result : string;

    constructor(private _loggingService : LoggingService, private _calculatorService : CalculatorService) {}

    onLog(message : string) : void {
        this._loggingService.log(message);
    }

    onMultiply(num1 : string, num2 : string) : void {
        this.result = "" + this._calculatorService.multiply(+num1, +num2);
    }

    onAdd(num1 : string, num2 : string) : void {
        this.result = "" + this._calculatorService.add(+num1, +num2);
    }
}