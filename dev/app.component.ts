import {Component} from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <h2>This is the parent component.</h2>
        <h4>Enter your name: </h4>
        <input type="text" [(ngModel)]="name">
        <my-property
            [myName]="name"
            [myAge]="30"
            (hobbyChanged)="hobby = $event">
        </my-property>

        <p>My hobby is: {{hobby}}</p>

    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name : string = "";
    hobby : string = "";
}