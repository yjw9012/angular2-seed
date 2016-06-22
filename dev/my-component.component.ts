/**
 * Created by yjw9012 on 6/21/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">
            {{name}}
        </span>.
        This is my first Angular 2 component.
        <span [class.is-awesome]="inputElement.value === 'yes'">
            This is awesome!
        </span>
        <br><br>
        Is this awesome?
        <input type="text" #inputElement (keyup)="0">
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">
            Only enabled if 'yes' was entered
        </button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name = 'Jiwoong';
}