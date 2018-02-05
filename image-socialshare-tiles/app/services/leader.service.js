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
var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxzQ0FBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUNsRSxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLG1DQUFpQztBQUVqQzs7OztFQUlFO0FBRUY7SUFFRSx1QkFBbUIsSUFBVSxFQUNULHFCQUE0QztRQUQ3QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFckUscUNBQWEsR0FBYjtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsU0FBUyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFBcEIsaUJBSUM7UUFIQyxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxVQUFVLEdBQUUsRUFBRSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyx1QkFBdUIsQ0FBQzthQUN0QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEUsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQXJCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBR2MsV0FBSTtZQUNjLCtDQUFxQjtPQUhyRCxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIERpc2hQcm92aWRlciBwcm92aWRlci5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9kb2NzL3RzL2xhdGVzdC9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbi5odG1sXG4gIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzIGFuZCBBbmd1bGFyIDIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExlYWRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cblxuICBnZXRQcm9tb3Rpb25zKCk6IE9ic2VydmFibGU8TGVhZGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2xlYWRlcnMnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpOyB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcbiAgfVxuXG4gIGdldExlYWRlcihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxMZWFkZXI+IHtcbiAgICByZXR1cm4gIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdsZWFkZXJzLycrIGlkKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpOyB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcbiAgfVxuXG4gIGdldEZlYXR1cmVkTGVhZGVyKCk6IE9ic2VydmFibGU8TGVhZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdsZWFkZXJzP2ZlYXR1cmVkPXRydWUnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpWzBdOyB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcbiAgfVxuXG59Il19