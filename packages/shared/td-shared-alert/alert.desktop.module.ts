import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertDesktopComponent } from './alert.desktop.component';

@NgModule({
    declarations: [
        AlertDesktopComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AlertDesktopComponent
    ]
})
export class AlertDesktopModule { }
