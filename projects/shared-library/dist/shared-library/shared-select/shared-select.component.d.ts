import { EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SharedSelectComponent {
    private readonly fb;
    label: string;
    panelClassName: string;
    options: any[];
    required: boolean;
    defaultValue: any;
    selectedValue: EventEmitter<any>;
    disabled: boolean;
    placeholder: string;
    labelKey: string;
    valueKey: string;
    selectForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    get selectInitValue(): any;
    ngOnChanges(changes: SimpleChanges): void;
    onChangeSelectValue(event: any): void;
    getDisplayValue(option: any): any;
    getValueKey(option: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SharedSelectComponent, "lib-shared-select", never, { "label": "label"; "panelClassName": "panelClassName"; "options": "options"; "required": "required"; "defaultValue": "defaultValue"; "disabled": "disabled"; "placeholder": "placeholder"; "labelKey": "labelKey"; "valueKey": "valueKey"; }, { "selectedValue": "selectedValue"; }, never, never, false, never>;
}
