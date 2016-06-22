/**
 * Created by yjw9012 on 6/21/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi I'm {{name}}. This is my first Angular 2 component.
        <span [class.is-awesome]="inputElement.value === 'yes'">
            This is awesome!
        </span>
        <br><br>
        Is this awesome?
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name = 'Jiwoong';

}