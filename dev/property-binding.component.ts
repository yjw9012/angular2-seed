/**
 * Created by yjw9012 on 6/26/16.
 */
import {Component, Input, EventEmitter} from "@angular/core";

@Component({
    selector: "my-property",
    template: `
        <h3>This is the child component.</h3>
        <p>Hi {{name}}! I am {{age}} years old.</p>
        <h4>My hobby is: </h4>
        <input type="text" #inputForHobby (keyup)="onHobbyChanged(inputForHobby.value)">
    `,
    inputs: ['name:myName'],
    outputs: ['hobbyChanged']
})

export class PropertyBindingComponent {
    name : string = "Jiwoong";
    @Input("myAge") age : number = 25;

    hobbyChanged = new EventEmitter<string>();

    onHobbyChanged(hobby : string) : void {
        this.hobbyChanged.emit(hobby);
    }

}