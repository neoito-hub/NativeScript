"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent() {
        firebase.init({
            onPushTokenReceivedCallback: function (token) {
                console.log('token from firebase now');
                alert(token);
            },
        })
            .then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
        firebase.getCurrentPushToken().then(function (token) {
            console.log("Current push token: " + token);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdURBQTJEO0FBTzNEO0lBQ0U7UUFFQSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osMkJBQTJCLEVBQUUsVUFBVSxLQUFLO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLENBQUM7U0FFRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRCxVQUFVLEtBQUs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDRixDQUFDO1FBRUEsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQXJCWSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsMkNBQTJDO1NBQ3RELENBQUM7O09BQ1csWUFBWSxDQXlCeEI7SUFBRCxtQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAgKiBhcyBmaXJlYmFzZSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cbiAgZmlyZWJhc2UuaW5pdCh7XG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiBmcm9tIGZpcmViYXNlIG5vdycpO1xuICAgICAgYWxlcnQodG9rZW4pO1xuICAgIH0sXG4gICBcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgKTtcbiAgIFxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgIH0pO1xufVxuXG5cbiBcbn1cblxuIl19