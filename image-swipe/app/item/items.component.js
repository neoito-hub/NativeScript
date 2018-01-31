"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PhotoViewer = require("nativescript-photoviewer");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.items = [];
        this.pageNumber = 0;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items.push({ imageUrl: "http://placehold.it/150/771796" });
        this.items.push({ imageUrl: "http://placehold.it/150/24f355" });
        this.items.push({ imageUrl: "http://placehold.it/150/d32776" });
        this.items.push({ imageUrl: "http://placehold.it/150/f66b97" });
    };
    ItemsComponent.prototype.pageChanged = function (e) {
        console.log("Page changed to " + e.page + ".");
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBUXREO0lBTEE7UUFNVyxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFZbEMsQ0FBQztJQVZHLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLG9DQUFXLEdBQWxCLFVBQW1CLENBQXNCO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFiUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO09BQ1csY0FBYyxDQWMxQjtJQUFELHFCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFBhZ2VDaGFuZ2VFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlLXN3aXBlXCI7XG52YXIgUGhvdG9WaWV3ZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBob3Rvdmlld2VyXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XG4gICAgcHVibGljIHBhZ2VOdW1iZXI6IG51bWJlciA9IDA7XG4gXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGltYWdlVXJsOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUwLzc3MTc5NlwiIH0pO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpbWFnZVVybDogXCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MC8yNGYzNTVcIiB9KTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaW1hZ2VVcmw6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8xNTAvZDMyNzc2XCIgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGltYWdlVXJsOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUwL2Y2NmI5N1wiIH0pO1xuICAgIH1cbiBcbiAgICBwdWJsaWMgcGFnZUNoYW5nZWQoZTogUGFnZUNoYW5nZUV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgUGFnZSBjaGFuZ2VkIHRvICR7ZS5wYWdlfS5gKTtcbiAgICB9XG59Il19