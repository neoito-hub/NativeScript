import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";


import { SideDrawerPositionComponent } from '../position/position.component';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,        
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule
    ],
    declarations: [
        SideDrawerPositionComponent
    ]
})
export class SideDrawerExamplesModule { }
