import {Component} from '@angular/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
        </div>
        <div class="container">
            <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {
    myself : Person = {name : "", age : ""};
    confirmedMyself : Person = {name : "", age : ""};

    onSubmit(myself : Person) : void {
        this.myself = {name : myself.name, age : myself.age};
    }

    onConfirm(myself : Person) : void {
        this.confirmedMyself = {name : myself.name, age : myself.age};
    }

}

export interface Person {
    name : string;
    age : string;
}