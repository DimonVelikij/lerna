import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertMobileComponent } from './alert.mobile.component';

@NgModule({
    declarations: [
        AlertMobileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AlertMobileComponent
    ]
})
export class AlertMobileModule { }
