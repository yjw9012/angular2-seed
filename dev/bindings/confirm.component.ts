/**
 * Created by yjw9012 on 6/26/16.
 */
import {Component, EventEmitter} from '@angular/core';
import {Person} from "../app.component";

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>
            Your name is <span class="highlight">{{myself.name}}</span>
            and you're <span class="highlight">{{myself.age}}</span> years old.
            Please click on 'Confirm' if you have made any changes to this information.
        </p>

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
        <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
    `,
    inputs: ["myself"],
    outputs: ["confirmed"]
})

export class ConfirmComponent {
    myself : Person = {name : "", age : ""};
    isFilled : boolean = false;
    isValid : boolean = false;
    confirmed : EventEmitter<Person> = new EventEmitter<Person>();

    onKeyup() : void {
        this.isFilled = this.myself.name != "" && this.myself.age != "";
        this.isValid = this.myself.name != "" && /^\d+$/.test(this.myself.age);
    }

    onConfirm() : void {
        this.confirmed.emit(this.myself);
    }
}