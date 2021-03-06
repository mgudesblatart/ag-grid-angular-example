import {Component,OnDestroy} from '@angular/core';

import {AgRendererComponent} from 'ag-grid-angular/main';

@Component({
    selector: 'currency-cell',
    template: `{{params.value | currency:'EUR'}}`
})
export class CurrencyComponent implements AgRendererComponent {
    public params:any;

    agInit(params:any):void {
        this.params = params;
    }
}