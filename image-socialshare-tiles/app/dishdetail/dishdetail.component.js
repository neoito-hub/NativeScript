"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("ui/dialogs");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var LocalNotifications = require("nativescript-local-notifications");
var SocialShare = require("nativescript-social-share");
var image_source_1 = require("image-source");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, routerExtensions, favoriteservice, fonticon, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.BaseURL = BaseURL;
        this.favorite = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dishservice.getDish(+params['id']); })
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            // const toast = new Toasty("Added Dish "+ this.dish.id, "short", "bottom");
            // toast.show();
        }
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.BaseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        })
            .catch(function () { console.log('Error loading image'); });
        LocalNotifications.schedule([{
                title: "Repoto",
                body: 'Dish shared successfully',
                at: new Date(new Date().getTime() + (10 * 1000))
            }])
            .then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing nofication ' + error); });
    };
    DishdetailComponent.prototype.displayActionDialog = function () {
        var _this = this;
        console.log("Inside");
        var options = {
            title: "Actions",
            message: "Choose your Action",
            cancelButtonText: "Cancel",
            actions: ["Social sharing"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result == "Social sharing") {
                _this.socialShare();
            }
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html'
        }),
        __param(5, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions, favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCxzQ0FBbUM7QUFDbkMseURBQXVEO0FBQ3ZELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUNBQXFDO0FBQ3JDLHFFQUF1RTtBQUV2RSx1REFBeUQ7QUFDekQsNkNBQW9EO0FBQ3BELGlFQUErRDtBQUMvRCx1RUFBK0Q7QUFTL0Q7SUFTRSw2QkFBb0IsV0FBd0IsRUFDbEMsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQVMsZUFBZ0MsRUFDM0UsUUFBNEIsRUFDVCxPQUFPO1FBSmhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDM0UsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBTnBDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFNYyxDQUFDO0lBRXpDLHNDQUFRLEdBQVI7UUFBQSxpQkFjQztRQVpDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNoQixTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxL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QW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7UUFjRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FKYSwwQkFBVztZQUMzQix1QkFBYztZQUNILHlCQUFnQixFQUEwQixrQ0FBZTtZQUNqRSw4Q0FBa0I7T0FaM0IsbUJBQW1CLENBNEUvQjtJQUFELDBCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zJztcblxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tVXJsIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlzaGRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzaDogRGlzaDtcbiAgY29tbWVudDogQ29tbWVudDtcbiAgZXJyTWVzczogc3RyaW5nO1xuICBhdmdzdGFyczogc3RyaW5nO1xuICBudW1jb21tZW50czogbnVtYmVyO1xuICBmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2goK3BhcmFtc1snaWQnXSkpXG4gICAgLnN1YnNjcmliZShkaXNoID0+IHsgXG4gICAgICAgIHRoaXMuZGlzaCA9IGRpc2g7XG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5pc0Zhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XG4gICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xuXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xuICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XG4gICAgICB9LFxuICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XG4gIH1cbiAgYWRkVG9GYXZvcml0ZXMoKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XG4gICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XG4gICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgIC8vIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIkFkZGVkIERpc2ggXCIrIHRoaXMuZGlzaC5pZCwgXCJzaG9ydFwiLCBcImJvdHRvbVwiKTtcbiAgICAgIC8vIHRvYXN0LnNob3coKTtcbiAgICB9XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuICBzb2NpYWxTaGFyZSgpIHtcbiAgICBsZXQgaW1hZ2U6IEltYWdlU291cmNlO1xuXG4gICAgZnJvbVVybCh0aGlzLkJhc2VVUkwgKyB0aGlzLmRpc2guaW1hZ2UpXG4gICAgIC50aGVuKChpbWc6IEltYWdlU291cmNlKSA9PiB7XG4gICAgICAgaW1hZ2UgPSBpbWc7IFxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlLCBcIkhvdyB3b3VsZCB5b3UgbGlrZSB0byBzaGFyZSB0aGlzIGltYWdlP1wiKVxuICAgICAgfSlcbiAgICAgLmNhdGNoKCgpPT4geyBjb25zb2xlLmxvZygnRXJyb3IgbG9hZGluZyBpbWFnZScpOyB9KTtcblxuICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgIHRpdGxlOiBcIlJlcG90b1wiLFxuICAgICAgYm9keTogJ0Rpc2ggc2hhcmVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSlcbiAgICB9XSlcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTm90aWZpY2F0aW9uIHNjaGVkdWxlZCcpLFxuICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2hvd2luZyBub2ZpY2F0aW9uICcgKyBlcnJvcikpO1xuICBcblxuICB9XG4gIGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnNpZGVcIilcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcbiAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgQWN0aW9uXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgYWN0aW9uczogW1wiU29jaWFsIHNoYXJpbmdcIl1cbiAgICB9O1xuICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmKHJlc3VsdCA9PSBcIlNvY2lhbCBzaGFyaW5nXCIpIHtcbiAgICAgICAgdGhpcy5zb2NpYWxTaGFyZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19