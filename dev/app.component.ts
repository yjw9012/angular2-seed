import {Component} from '@angular/core';
import {Component1Component} from "./component1.component";

@Component({
    selector: 'my-app',
    template: `
        First Component:
        <component-1></component-1>
        <br>
        Second Component:
        <component-1></component-1>
    `,
    directives: [Component1Component]
})

export class AppComponent {

}