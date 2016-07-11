/**
 * Created by yjw9012 on 7/10/16.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class CalculatorService {
    add(num1 : number, num2 : number) : number {
        return num1 + num2;
    }

    multiply(num1 : number, num2 : number) : number {
        return num1 * num2;
    }
}