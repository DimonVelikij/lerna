import { Component } from '@angular/core';
import { AccordionBaseComponent } from './accordion.base.component';

@Component({
    selector: 'td-accordion',
    templateUrl: './accordion.desktop.component.html'
})
export class AccordionDesktopComponent extends AccordionBaseComponent {
    constructor() {
        super();
    }
}
