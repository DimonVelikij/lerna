import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionDesktopComponent } from './accordion.desktop.component';

@NgModule({
    declarations: [
        AccordionDesktopComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AccordionDesktopComponent
    ]
})
export class AccordionDesktopModule { }
