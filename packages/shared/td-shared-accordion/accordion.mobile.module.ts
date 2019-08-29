import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionMobileComponent } from './accordion.mobile.component';

@NgModule({
    declarations: [
        AccordionMobileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AccordionMobileComponent
    ]
})
export class AccordionMobileModule { }
