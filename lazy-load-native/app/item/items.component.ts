import { Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {SetupItemViewArgs} from "nativescript-angular/directives";
import { EventData } from 'data/observable';
import { HttpClient } from '@angular/common/http';
import { ItemService } from './item.service'
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent{
    public myItems: string[] = [];
    public counter = 0;
    public isBusy = false;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemservice: ItemService) { 
        this.myItems = [];
        for (var i = 0; i < 50; i++) {
            this.myItems.push("data item " + i);
            this.counter = i;
        }

    }
    loadMoreItems() {
            this.isBusy = true;
            this.itemservice.getMessage().subscribe(msg => {
               
                // this.myItems.push("data item " + msg.login);
                console.log(JSON.stringify(msg));
                console.log("msg", JSON.stringify(msg.title));
                this.myItems.push("data item " + msg.title);
                this.isBusy = false;
               
            })
       
        
        
        this.counter += 1;

    }
}