import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionDesktopModule } from "./accordion/accordion.desktop.module";
import { AlertDesktopModule } from "./alert/alert.desktop.module";

import { AccordionDesktopComponent } from "./accordion/accordion.desktop.component";
import { AlertDesktopComponent } from "./alert/alert.desktop.component";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AccordionDesktopModule,
        AlertDesktopModule
    ],
    providers: [],
    exports: [
        AccordionDesktopComponent,
        AlertDesktopComponent
    ]
})
export class SharedDesktopModule { }
