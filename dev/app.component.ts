import {Component} from '@angular/core';
import {AttributeDirectivesComponent} from "./attribute-directives.component";

@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
    `,
    directives: [AttributeDirectivesComponent]
})
export class AppComponent {

}