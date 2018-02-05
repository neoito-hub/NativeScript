"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var Observable_1 = require("rxjs/Observable");
var couchbase_service_1 = require("../services/couchbase.service");
require("rxjs/add/operator/map");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return Observable_1.Observable.throw('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService, couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDhDQUE2QztBQUM3QyxtRUFBaUU7QUFFakUsaUNBQStCO0FBRy9CO0lBSUkseUJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUR4RixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQSxDQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBQyxXQUFXLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDO0lBQ1QsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxFQUFFLEVBQVQsQ0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUM5QixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUE5Q1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUt3QiwwQkFBVyxFQUE0QixvQ0FBZ0I7T0FKL0UsZUFBZSxDQWdEM0I7SUFBRCxzQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoYmFzZS5zZXJ2aWNlJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVTZXJ2aWNlIHtcblxuICAgIGZhdm9yaXRlczogQXJyYXk8bnVtYmVyPjtcbiAgICBkb2NJZDogc3RyaW5nID0gXCJmYXZvcml0ZXNcIjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSwgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gW107XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gW107XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcbiAgICAgICAgICAgIGlmKCBkb2MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoe1wiZmF2b3JpdGVzXCI6IFtdfSwgdGhpcy5kb2NJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBkb2MuZmF2b3JpdGVzO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xuICAgIH1cblxuICAgIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcbiAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoZXMoKVxuICAgICAgICAgICAgLm1hcChkaXNoZXMgPT4gZGlzaGVzLmZpbHRlcihkaXNoID0+IHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGRpc2guaWQpKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZhdm9yaXRlcy5pbmRleE9mKGlkKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJywgaWQpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxufSJdfQ==