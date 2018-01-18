"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/observable/throw");
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.url = 1;
    }
    ItemService.prototype.getMessage = function () {
        this.url += 1;
        console.log("in");
        return this.http
            .get("https://jsonplaceholder.typicode.com/posts/1");
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//.get(`https://api.github.com/users?since=${this.url}`);   get(`https://jsonplaceholder.typicode.com/posts/1`); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFxRDtBQUlyRCxxQ0FBbUM7QUFJbkM7SUFFRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQURwQyxRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQytCLENBQUM7SUFFeEMsZ0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBVFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLFdBQVcsQ0FXdkI7SUFBRCxrQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLGtDQUFXO0FBWXhCLGdIQUFnSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgdXJsID0gMTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLnVybCArPSAxO1xuICAgIGNvbnNvbGUubG9nKFwiaW5cIilcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMWApO1xuICB9XG5cbn1cbi8vLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycz9zaW5jZT0ke3RoaXMudXJsfWApOyAgIGdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzFgKTsiXX0=