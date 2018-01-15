import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SideDrawerPositionComponent } from "./position/position.component";


const routes: Routes = [
    { path: "", redirectTo: "/SideDrawerPositionComponent", pathMatch: "full" },
    { path: "SideDrawerPositionComponent",component:SideDrawerPositionComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }