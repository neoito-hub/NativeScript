"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("pullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.myItems = [];
        for (var i = 0; i < 2; i++) {
            this.myItems.push(i);
        }
    }
    ItemsComponent.prototype.refreshMe = function (args) {
        var _this = this;
        console.log("refreshing");
        setTimeout(function () {
            _this.myItems.push(2);
            args.object.refreshing = false;
            console.log("Done");
        }, 2000);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBFQUF3RTtBQUV4RSxrQ0FBZSxDQUFDLGVBQWUsRUFBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsYUFBYSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFPM0Y7SUFHTztRQUZJLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBQ00sa0NBQVMsR0FBaEIsVUFBaUIsSUFBUztRQUExQixpQkFPRjtRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBZlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFB1bGxUb1JlZnJlc2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIjtcbnJlZ2lzdGVyRWxlbWVudChcInB1bGxUb1JlZnJlc2hcIiwoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbXlJdGVtcyA9IFtdO1xuICAgIFxuICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goaSk7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgcHVibGljIHJlZnJlc2hNZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWZyZXNoaW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubXlJdGVtcy5wdXNoKDIpO1xuICAgICAgICAgICAgKDxQdWxsVG9SZWZyZXNoPmFyZ3Mub2JqZWN0KS5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmVcIik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cbn0iXX0=