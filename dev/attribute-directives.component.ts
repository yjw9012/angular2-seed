/**
 * Created by yjw9012 on 6/29/16.
 */
import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: "my-attribute-directives",
    template: `
        <div [myHighlight]="'red'">
            Highlight me
        </div>
        <br>
        <div [myHighlight]="'blue'">
            Highlight me
        </div>
    `,
    directives: [HighlightDirective]
})

export class AttributeDirectivesComponent {

}