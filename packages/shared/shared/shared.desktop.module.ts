import { NgModule } from '@angular/core';

import { AccordionDesktopModule } from "../shared-accordion";
import { AlertDesktopModule } from "../shared-alert";

@NgModule({
    declarations: [],
    imports: [
        AccordionDesktopModule,
        AlertDesktopModule
    ],
    providers: [],
    exports: [
        AccordionDesktopModule,
        AlertDesktopModule
    ]
})
export class SharedDesktopModule { }
