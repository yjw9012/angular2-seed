/**
 * Created by yjw9012 on 6/29/16.
 */
import {Directive, OnInit, ElementRef, Renderer} from "@angular/core";

@Directive({
    selector: "[myHighlight]",
    inputs: ["highlightColor : myHighlight"],
    host: {
        "(mouseenter)" : "onMouseEnter()",
        "(mouseleave)" : "onMouseLeave()"
    }
})

export class HighlightDirective {
    private _defaultColor : string = "green";
    highlightColor : string;

    constructor(private _elRef : ElementRef, private _renderer : Renderer) {

    }

    /*
    ngOnInit() : any {
        //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
        this._renderer.setElementStyle(
            this._elRef.nativeElement,
            "background-color",
            this.highlightColor || this._defaultColor);
    }
    */

    onMouseEnter() : void {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() : void {
        this.highlight(null);
    }

    private highlight(color : string) : void {
        this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", color);
    }
}