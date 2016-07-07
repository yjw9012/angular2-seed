/**
 * Created by yjw9012 on 7/7/16.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
    private _lastMessage : string = "";

    log(message : string) : void {
        console.log("Current message is: " + message
            + ", and last message: " + this._lastMessage);
        this._lastMessage = message;
    }
}