"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var DataItem = /** @class */ (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemservice) {
        this.itemservice = itemservice;
        this.myItems = [];
        this.counter = 0;
        this.isBusy = false;
        this.myItems = [];
        for (var i = 0; i < 50; i++) {
            this.myItems.push("data item " + i);
            this.counter = i;
        }
    }
    ItemsComponent.prototype.loadMoreItems = function () {
        var _this = this;
        this.isBusy = true;
        this.itemservice.getMessage().subscribe(function (msg) {
            // this.myItems.push("data item " + msg.login);
            console.log(JSON.stringify(msg));
            console.log("msg", JSON.stringify(msg.title));
            _this.myItems.push("data item " + msg.title);
            _this.isBusy = false;
        });
        this.counter += 1;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBSXpFLCtDQUE0QztBQUk1QztJQUNJLGtCQUFtQixFQUFVLEVBQVMsSUFBWTtRQUEvQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDM0QsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBU0Q7SUFJSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxyQyxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWxCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFFTCxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUFBLGlCQWdCQztRQWZPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUV2QywrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhCLENBQUMsQ0FBQyxDQUFBO1FBSU4sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFFdEIsQ0FBQztJQTlCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO3lDQU9tQywwQkFBVztPQU5uQyxjQUFjLENBK0IxQjtJQUFELHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2V0dXBJdGVtVmlld0FyZ3N9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtLnNlcnZpY2UnXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNsYXNzIERhdGFJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudHtcbiAgICBwdWJsaWMgbXlJdGVtczogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgY291bnRlciA9IDA7XG4gICAgcHVibGljIGlzQnVzeSA9IGZhbHNlO1xuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLm15SXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChcImRhdGEgaXRlbSBcIiArIGkpO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gaTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxvYWRNb3JlSXRlbXMoKSB7XG4gICAgICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLml0ZW1zZXJ2aWNlLmdldE1lc3NhZ2UoKS5zdWJzY3JpYmUobXNnID0+IHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlJdGVtcy5wdXNoKFwiZGF0YSBpdGVtIFwiICsgbXNnLmxvZ2luKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1zZ1wiLCBKU09OLnN0cmluZ2lmeShtc2cudGl0bGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChcImRhdGEgaXRlbSBcIiArIG1zZy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcblxuICAgIH1cbn0iXX0=