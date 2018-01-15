"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var position_component_1 = require("../position/position.component");
var SideDrawerExamplesModule = (function () {
    function SideDrawerExamplesModule() {
    }
    SideDrawerExamplesModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                position_component_1.SideDrawerPositionComponent
            ]
        })
    ], SideDrawerExamplesModule);
    return SideDrawerExamplesModule;
}());
exports.SideDrawerExamplesModule = SideDrawerExamplesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWRyYXdlci1leGFtcGxlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlZHJhd2VyLWV4YW1wbGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsc0RBQXVFO0FBQ3ZFLGtFQUF3RjtBQUd4RixxRUFBNkU7QUFhN0U7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQVhwQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDVixnREFBMkI7YUFDOUI7U0FDSixDQUFDO09BQ1csd0JBQXdCLENBQUk7SUFBRCwrQkFBQztDQUFBLEFBQXpDLElBQXlDO0FBQTVCLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuXG5pbXBvcnQgeyBTaWRlRHJhd2VyUG9zaXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9wb3NpdGlvbi9wb3NpdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgICAgICAgIFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNpZGVEcmF3ZXJQb3NpdGlvbkNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlckV4YW1wbGVzTW9kdWxlIHsgfVxuIl19