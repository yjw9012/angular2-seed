/**
 * Created by yjw9012 on 7/6/16.
 */
import {Component, EventEmitter} from '@angular/core';
import {ShoppingItem} from "./shopping-list.component";

@Component({
    selector: 'shopping-list-item',
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amount">Amount</label>
            <input type="number" id="item-amount" [(ngModel)]="item.amount">
        </div>
        <button (click)="onDelete()">Delete Item</button>
    `,
    inputs: ["item"],
    outputs: ["removed"]
})

export class ShoppingListItemComponent {
    item : ShoppingItem = {
        name : "",
        amount : 0
    };

    removed : EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();

    onDelete() : void {
        this.removed.emit(this.item);
    }
}