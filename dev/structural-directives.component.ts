/**
 * Created by yjw9012 on 7/4/16.
 */
import {Component} from "@angular/core";

@Component({
    selector: "my-structural-directives",
    template: `
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10.
                <input type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">
                Number is greater than 10.
            </div>
        </section>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="let item of list, let i = index">
                        {{item}} {{i}}
                    </li>
                </ul>
            </div>
        </section>
        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
                Enter red, blue, or green.
                <input type="text" #color (keyup)="0">
            </div>
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'red'">
                    <span style="color: red;">Color is Red.</span>
                </template>
                <template [ngSwitchWhen]="'blue'">
                    <span style="color: blue;">Color is blue.</span>
                </template>
                <template [ngSwitchWhen]="'green'">
                    <span style="color: green;">Color is green.</span>
                </template>
                <template ngSwitchDefault>
                    <span>NO color</span>
                </template>
            </div>
        </section>
    `
})

export class StructuralDirectivesComponent {
    private list : string[] = ["Apple", "Orange", "Banana"];
}