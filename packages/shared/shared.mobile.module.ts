import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionMobileModule } from "./accordion/accordion.mobile.module";
import { AlertMobileModule } from "./alert/alert.mobile.module";

import { AccordionMobileComponent } from "./accordion/accordion.mobile.component";
import { AlertMobileComponent } from "./alert/alert.mobile.component";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AccordionMobileModule,
        AlertMobileModule
    ],
    providers: [],
    exports: [
        AccordionMobileComponent,
        AlertMobileComponent
    ]
})
export class SharedMobileModule { }
