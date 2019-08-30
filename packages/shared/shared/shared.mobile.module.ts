import { NgModule } from '@angular/core';

import { AccordionMobileModule } from "../shared-accordion";
import { AlertMobileModule } from "../shared-alert";

@NgModule({
    declarations: [],
    imports: [
        AccordionMobileModule,
        AlertMobileModule
    ],
    providers: [],
    exports: [
        AccordionMobileModule,
        AlertMobileModule
    ]
})
export class SharedMobileModule { }
