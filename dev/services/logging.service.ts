/**
 * Created by yjw9012 on 7/7/16.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
    log(message : string) : void {
        console.log(message);
    }
}