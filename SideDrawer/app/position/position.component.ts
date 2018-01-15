import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DependencyObservable, Property, PropertyMetadataSettings } from "tns-core-modules/ui/core/dependency-observable";

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-position",
    templateUrl: 'position.component.html',
    styleUrls: ["position.component.css"]
})
@Injectable()
// >> sidedrawer-angular-position-code
export class SideDrawerPositionComponent implements AfterViewInit, OnInit {
    private _currentLocation : SideDrawerLocation;

    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.on("loaded", this.onLoaded, this);
    }

    public onLoaded() {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    }

    ngOnInit() {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get currentLocation(): SideDrawerLocation {
        return this._currentLocation;
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value;
    }
    // >> (hide)
    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }

    public onBottomLocationTap() {
        this.currentLocation = SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }
    // << (hide)
}
// << sidedrawer-angular-position-code