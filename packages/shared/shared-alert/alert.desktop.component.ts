import { Component } from '@angular/core';
import { AlertBaseComponent } from './alert.base.component';

@Component({
    selector: 'td-alert',
    templateUrl: './alert.desktop.component.html'
})
export class AlertDesktopComponent extends AlertBaseComponent {
    constructor() {
        super();
    }
}
