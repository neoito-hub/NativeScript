import { Component} from "@angular/core";
import { ItemService } from './item.service';


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./list-test.css"],
})
export class ItemsComponent{
    public myItems: string[] = [];    
    public counter = 0;
    public isBusy = false;
  
    constructor(private itemservice: ItemService) { 
        this.myItems = [];
        for (var i = 0; i < 25; i++) {
            this.myItems.push("data item " + i);
            this.counter = i;
        }
    }
    loadMoreItems() {
            this.isBusy = true;
            this.itemservice.getMessage().subscribe(msg => {
                this.myItems.push(msg);
                this.isBusy = false;
            })
        this.counter += 1;
    }
}