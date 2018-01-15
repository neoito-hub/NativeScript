"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var SideDrawerPositionComponent = (function () {
    function SideDrawerPositionComponent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.page.on("loaded", this.onLoaded, this);
    }
    SideDrawerPositionComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    };
    SideDrawerPositionComponent.prototype.ngOnInit = function () {
    };
    SideDrawerPositionComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(SideDrawerPositionComponent.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        set: function (value) {
            this._currentLocation = value;
        },
        enumerable: true,
        configurable: true
    });
    // >> (hide)
    SideDrawerPositionComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    SideDrawerPositionComponent.prototype.onBottomLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerPositionComponent.prototype, "drawerComponent", void 0);
    SideDrawerPositionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-sidedrawer-position",
            templateUrl: 'position.component.html',
            styleUrls: ["position.component.css"]
        }),
        core_1.Injectable()
        // >> sidedrawer-angular-position-code
        ,
        __metadata("design:paramtypes", [page_1.Page, core_1.ChangeDetectorRef])
    ], SideDrawerPositionComponent);
    return SideDrawerPositionComponent;
}());
exports.SideDrawerPositionComponent = SideDrawerPositionComponent;
// << sidedrawer-angular-position-code 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVIO0FBQ3ZILGlEQUFnRDtBQUNoRCw2REFBb0U7QUFDcEUsa0VBQWdGO0FBYWhGO0lBR0kscUNBQW9CLElBQVUsRUFBVSxtQkFBc0M7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLDhDQUFRLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUtELHFEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQUksd0RBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUF5QjtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBS0QsWUFBWTtJQUNMLHNEQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHlEQUFtQixHQUExQjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsK0JBQWtCLENBQUMsTUFBTSxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF6QmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjt3RUFBQztJQWhCekUsMkJBQTJCO1FBUnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7UUFDRCxpQkFBVSxFQUFFO1FBQ2Isc0NBQXNDOzt5Q0FJUixXQUFJLEVBQStCLHdCQUFpQjtPQUhyRSwyQkFBMkIsQ0EyQ3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrRUFBMkI7QUE0Q3hDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBJbmplY3RhYmxlLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGVwZW5kZW5jeU9ic2VydmFibGUsIFByb3BlcnR5LCBQcm9wZXJ0eU1ldGFkYXRhU2V0dGluZ3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL2RlcGVuZGVuY3ktb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLXNpZGVkcmF3ZXItcG9zaXRpb25cIixcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc2l0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcInBvc2l0aW9uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG4vLyA+PiBzaWRlZHJhd2VyLWFuZ3VsYXItcG9zaXRpb24tY29kZVxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJQb3NpdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfY3VycmVudExvY2F0aW9uIDogU2lkZURyYXdlckxvY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMucGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdlci5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5hbmRyb2lkLnNldERyYXdlckNsb3NlVGhyZXNob2xkKDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50TG9jYXRpb24oKTogU2lkZURyYXdlckxvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudExvY2F0aW9uKHZhbHVlOiBTaWRlRHJhd2VyTG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIC8vID4+IChoaWRlKVxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQm90dG9tTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLkJvdHRvbTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIC8vIDw8IChoaWRlKVxufVxuLy8gPDwgc2lkZWRyYXdlci1hbmd1bGFyLXBvc2l0aW9uLWNvZGUiXX0=