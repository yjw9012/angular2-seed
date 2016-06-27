/**
 * Created by yjw9012 on 6/26/16.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "my-property",
    template: `
        <h3>This is the child component.</h3>

        <p>Hi {{name}}! I am {{age}} years old.</p>
    `,
    inputs: ['name:myName']
})

export class PropertyBindingComponent {
    name : string = "Jiwoong";
    @Input("myAge") age : number = 25;

}