import { Component } from '@angular/core';
import { AccordionBaseComponent } from './accordion.base.component';

@Component({
    selector: 'td-accordion',
    templateUrl: './accordion.mobile.component.html'
})
export class AccordionMobileComponent extends AccordionBaseComponent {
    constructor() {
        super();
    }
}
