/**
 * Created by yjw9012 on 6/22/16.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
            Enter your name:
            <input type="text" #name (keyup)="0">
        </section>
        <section
            [ngClass]="{
                puzzle: true,
                solved: switch1.value == switch1number && switch2.value == switch2number
                            && switch3.value == switch3number && switch4.value == switch4number
            }"
            [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
            <h2>The Puzzle</h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <br>
            Switch 1:
            <input type="text" #switch1 (keyup)="0"><br>
            Switch 2:
            <input type="text" #switch2 (keyup)="0"><br>
            Switch 3:
            <input type="text" #switch3 (keyup)="0"><br>
            Switch 4:
            <input type="text" #switch4 (keyup)="0"><br>
        </section>
        <h2>Congrats, XXX!</h2>
    `
})

export class PuzzleComponent implements OnInit {
    switch1number: number;
    switch2number: number;
    switch3number: number;
    switch4number: number;

    ngOnInit() : any {
        this.switch1number = Math.round(Math.random());
        this.switch2number = Math.round(Math.random());
        this.switch3number = Math.round(Math.random());
        this.switch4number = Math.round(Math.random());

        console.log(this.switch1number, this.switch2number, this.switch3number, this.switch4number);
    }
}