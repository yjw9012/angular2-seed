/**
 * Created by yjw9012 on 7/6/16.
 */
import {Component} from '@angular/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngFor="let listItem of listItems" (click)="onEdit(listItem)">
                        {{listItem.name}} ({{listItem.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
        </section>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent {
    listItems : ShoppingItem[] = [];
    selectedItem : ShoppingItem;

    onItemAdded(item : ShoppingItem) : void {
        this.listItems.push(<ShoppingItem>{
            name : item.name,
            amount : item.amount
        });
    }

    onEdit(item : ShoppingItem) : void {
        this.selectedItem = item;
    }

    onRemove(item : ShoppingItem) : void {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}

export interface ShoppingItem {
    name : string;
    amount : number;
}