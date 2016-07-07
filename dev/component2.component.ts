/**
 * Created by yjw9012 on 7/7/16.
 */
import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";

@Component({
    selector: 'component-2',
    template: `
        <input type="text" #message />
        <button (click)="onLog(message.value)">Send</button>
    `
})

export class Component2Component {
    constructor(private _loggingService : LoggingService) {}

    onLog(message : string) : void {
        this._loggingService.log(message);
    }
}