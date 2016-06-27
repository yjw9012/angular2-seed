/**
 * Created by yjw9012 on 6/26/16.
 */
import {Component, EventEmitter} from '@angular/core';
import {Person} from "../app.component";

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please</h1>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out? {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid? {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
    `,
    inputs: ["myself"],
    outputs: ["submitted"]
})

export class InputComponent {
    myself : Person = {name : "", age : ""};
    isFilled : boolean = false;
    isValid : boolean = false;
    submitted : EventEmitter<Person> = new EventEmitter<Person>();

    onKeyup() : void {
        this.isFilled = this.myself.name != "" && this.myself.age != "";
        this.isValid = this.myself.name != "" && /^\d+$/.test(this.myself.age);
    }

    onSubmit() : void {
        this.submitted.emit(this.myself);
    }
}