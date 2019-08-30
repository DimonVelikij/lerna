import { NgModule } from '@angular/core';

import { AccordionDesktopModule } from "../td-shared-accordion";
import { AccordionMobileModule } from "../td-shared-accordion";

import { AlertDesktopModule } from "../td-shared-alert";
import { AlertMobileModule } from "../td-shared-alert";

@NgModule({
    declarations: [],
    imports: [
        AccordionDesktopModule,
        AccordionMobileModule,
        AlertDesktopModule,
        AlertMobileModule
    ],
    providers: [],
    exports: [
        AccordionDesktopModule,
        AccordionMobileModule,
        AlertDesktopModule,
        AlertMobileModule
    ]
})
export class SharedDesktopModule { }
