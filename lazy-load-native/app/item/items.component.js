"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemservice) {
        this.itemservice = itemservice;
        this.myItems = [];
        this.counter = 0;
        this.isBusy = false;
        this.myItems = [];
        for (var i = 0; i < 25; i++) {
            this.myItems.push("data item " + i);
            this.counter = i;
        }
    }
    ItemsComponent.prototype.loadMoreItems = function () {
        var _this = this;
        this.isBusy = true;
        this.itemservice.getMessage().subscribe(function (msg) {
            _this.myItems.push(msg);
            _this.isBusy = false;
        });
        this.counter += 1;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./list-test.css"],
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLCtDQUE2QztBQVM3QztJQUtJLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpyQyxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTk8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQW5CUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUNqQyxDQUFDO3lDQU1tQywwQkFBVztPQUxuQyxjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4vaXRlbS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LXRlc3QuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudHtcbiAgICBwdWJsaWMgbXlJdGVtczogc3RyaW5nW10gPSBbXTsgICAgXG4gICAgcHVibGljIGNvdW50ZXIgPSAwO1xuICAgIHB1YmxpYyBpc0J1c3kgPSBmYWxzZTtcbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtc2VydmljZTogSXRlbVNlcnZpY2UpIHsgXG4gICAgICAgIHRoaXMubXlJdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubXlJdGVtcy5wdXNoKFwiZGF0YSBpdGVtIFwiICsgaSk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRNb3JlSXRlbXMoKSB7XG4gICAgICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLml0ZW1zZXJ2aWNlLmdldE1lc3NhZ2UoKS5zdWJzY3JpYmUobXNnID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChtc2cpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICB9XG59Il19