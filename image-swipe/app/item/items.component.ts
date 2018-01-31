import { Component, OnInit } from "@angular/core";

import { PageChangeEventData } from "nativescript-image-swipe";
var PhotoViewer = require("nativescript-photoviewer");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    public items: any[] = [];
    public pageNumber: number = 0;
 
    ngOnInit(): void {
        this.items.push({ imageUrl: "http://placehold.it/150/771796" });
        this.items.push({ imageUrl: "http://placehold.it/150/24f355" });
        this.items.push({ imageUrl: "http://placehold.it/150/d32776" });
        this.items.push({ imageUrl: "http://placehold.it/150/f66b97" });
    }
 
    public pageChanged(e: PageChangeEventData) {
        console.log(`Page changed to ${e.page}.`);
    }
}