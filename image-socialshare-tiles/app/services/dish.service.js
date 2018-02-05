"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService.prototype.getDish = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService.prototype.getFeaturedDish = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUErQztBQUMvQyw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBQ2xFLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsbUNBQWlDO0FBR2pDO0lBRUUscUJBQW1CLElBQVUsRUFDVCxxQkFBNEM7UUFEN0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNULDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRXJFLCtCQUFTLEdBQVQ7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkUsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQWxCLGlCQUlDO1FBSEMsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsU0FBUyxHQUFFLEVBQUUsQ0FBQzthQUM3QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkUsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFDO2FBQ3JDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBckJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHYyxXQUFJO1lBQ2MsK0NBQXFCO09BSHJELFdBQVcsQ0F1QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlzaFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cblxuICBnZXREaXNoZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2Rpc2hlcycpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IH0pO1xuICB9XG5cbiAgZ2V0RGlzaChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxEaXNoPiB7XG4gICAgcmV0dXJuICB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAnZGlzaGVzLycrIGlkKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiB7IHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpOyB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcbiAgfVxuXG4gIGdldEZlYXR1cmVkRGlzaCgpOiBPYnNlcnZhYmxlPERpc2g+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2Rpc2hlcz9mZWF0dXJlZD10cnVlJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKVswXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XG4gIH1cblxufSJdfQ==