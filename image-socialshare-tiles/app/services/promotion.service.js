"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxzQ0FBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUNsRSxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLG1DQUFpQztBQUVqQzs7OztFQUlFO0FBRUY7SUFFRSwwQkFBbUIsSUFBVSxFQUNULHFCQUE0QztRQUQ3QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFckUsd0NBQWEsR0FBYjtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsWUFBWSxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEVBQVU7UUFBdkIsaUJBSUM7UUFIQyxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxhQUFhLEdBQUUsRUFBRSxDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsK0NBQW9CLEdBQXBCO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRywwQkFBMEIsQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEUsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQXJCVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FHYyxXQUFJO1lBQ2MsK0NBQXFCO09BSHJELGdCQUFnQixDQXVCNUI7SUFBRCx1QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgRGlzaFByb3ZpZGVyIHByb3ZpZGVyLlxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uLmh0bWxcbiAgZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnMgYW5kIEFuZ3VsYXIgMiBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxuXG4gIGdldFByb21vdGlvbnMoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAncHJvbW90aW9ucycpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IH0pO1xuICB9XG5cbiAgZ2V0UHJvbW90aW9uKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb21vdGlvbj4ge1xuICAgIHJldHVybiAgdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ3Byb21vdGlvbnMvJysgaWQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IH0pO1xuICB9XG5cbiAgZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ3Byb21vdGlvbnM/ZmVhdHVyZWQ9dHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcylbMF07IH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IH0pO1xuICB9XG5cbn0iXX0=