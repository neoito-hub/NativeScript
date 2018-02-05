"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseService = /** @class */ (function () {
    function CouchbaseService() {
        this.database = new nativescript_couchbase_1.Couchbase("confusion");
    }
    CouchbaseService.prototype.getDatabase = function () {
        return this.database;
    };
    CouchbaseService.prototype.getDocument = function (docId) {
        return this.database.getDocument(docId);
    };
    CouchbaseService.prototype.createDocument = function (data, docId) {
        return this.database.createDocument(data, docId);
    };
    CouchbaseService.prototype.updateDocument = function (docId, data) {
        return this.database.updateDocument(docId, data);
    };
    CouchbaseService.prototype.deleteDocument = function (docId) {
        return this.database.deleteDocument(docId);
    };
    CouchbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseService);
    return CouchbaseService;
}());
exports.CouchbaseService = CouchbaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFJSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBUyxFQUFFLEtBQWE7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLElBQVM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTFCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0EyQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jb3VjaGJhc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291Y2hiYXNlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKFwiY29uZnVzaW9uXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERvY3VtZW50KGRvY0lkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuZ2V0RG9jdW1lbnQoZG9jSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVEb2N1bWVudChkYXRhOiBhbnksIGRvY0lkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoZGF0YSwgZG9jSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVEb2N1bWVudChkb2NJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UudXBkYXRlRG9jdW1lbnQoZG9jSWQsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEb2N1bWVudChkb2NJZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmRlbGV0ZURvY3VtZW50KGRvY0lkKTtcbiAgICB9XG59Il19