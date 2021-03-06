import {Component,ViewEncapsulation} from '@angular/core';

import {GridOptions} from 'ag-grid/main';

import ProficiencyFilter from './proficiencyFilter';
import SkillFilter from './skillFilter';
import RefData from './refData';

// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';
import {HeaderGroupComponent} from "./header-group-component.component";
import {DateComponent} from "./date-component.component";
import {HeaderComponent} from "./header-component.component";

@Component({
    moduleId: module.id,
    selector: 'ag-rich-grid-declarative',
    templateUrl: 'rich-grid-declarative.component.html',
    styleUrls: ['rich-grid.css', 'proficiency-renderer.css'],
    encapsulation: ViewEncapsulation.None
})
export class RichGridDeclarativeComponent {

    public gridOptions:GridOptions;
    public showGrid:boolean;
    private rowData:any[];
    public rowCount:string;
    public components = {
        headerGroupComponent:HeaderGroupComponent
    }

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.showGrid = true;
        this.gridOptions.dateComponentFramework = DateComponent;
        this.gridOptions.defaultColDef = {
            headerComponentFramework : <{new():HeaderComponent}>HeaderComponent,
            headerComponentParams : {
                menuIcon: 'fa-bars'
            }
        }
    }

    private createRowData() {
        var rowData:any[] = [];

        for (var i = 0; i < 10000; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                dob: RefData.DOBs[i % RefData.DOBs.length],
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }

        this.rowData = rowData;
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    public onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    private countryCellRenderer(params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    }

    //noinspection JSUnusedLocalSymbols
    private skillsCellRenderer(params) {
        var data = params.data;
        var skills = [];
        RefData.IT_SKILLS.forEach(function (skill) {
            if (data && data.skills && data.skills[skill]) {
                skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
            }
        });
        return skills.join(' ');
    }

    //noinspection JSUnusedLocalSymbols
    private percentCellRenderer(params) {
        var value = params.value;

        var eDivPercentBar = document.createElement('div');
        eDivPercentBar.className = 'div-percent-bar';
        eDivPercentBar.style.width = value + '%';
        if (value < 20) {
            eDivPercentBar.style.backgroundColor = 'red';
        } else if (value < 60) {
            eDivPercentBar.style.backgroundColor = '#ff9900';
        } else {
            eDivPercentBar.style.backgroundColor = '#00A000';
        }

        var eValue = document.createElement('div');
        eValue.className = 'div-percent-value';
        eValue.innerHTML = value + '%';

        var eOuterDiv = document.createElement('div');
        eOuterDiv.className = 'div-outer-div';
        eOuterDiv.appendChild(eValue);
        eOuterDiv.appendChild(eDivPercentBar);

        return eOuterDiv;
    }

    //noinspection JSUnusedLocalSymbols
    private getSkillFilter():any {
        return SkillFilter;
    }

    //noinspection JSUnusedLocalSymbols
    private getProficiencyFilter():any {
        return ProficiencyFilter;
    }

    //noinspection JSUnusedLocalSymbols
    private getCountryFilterParams():any {
        return {
            cellRenderer: this.countryCellRenderer,
            cellHeight: 20
        }
    }

    private createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

    public parseDate (params) {
        return  pad(params.value.getDate(), 2) + '/' +
            pad(params.value.getMonth() + 1, 2)+ '/' +
            params.value.getFullYear();
    }
}

//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
    let asString = num + "";
    while (asString.length < totalStringSize) asString = "0" + asString;
    return asString;
}