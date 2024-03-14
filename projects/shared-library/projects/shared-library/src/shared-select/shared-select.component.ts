import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-shared-select',
  templateUrl: './shared-select.component.html',
  styleUrls: ['./shared-select.component.scss'],
})
export class SharedSelectComponent {
  @Input() label = '';
  @Input() panelClassName = '';
  @Input() options: any[] = [];
  @Input() required = false;
  @Input() defaultValue: any;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter();
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() labelKey = '';
  @Input() valueKey = '';

  selectForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.selectForm = this.fb.group({
      selectValue: [this.defaultValue],
    });
  }
  ngOnInit() {
    if (this.required) {
      this.selectForm.controls['selectValue'].setValidators([Validators.required]);
    }
  }

  get selectInitValue() {
    return this.selectForm.controls['selectValue'].value;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectForm.controls['selectValue'].setValue(this.defaultValue);
    if (this.disabled) {
      this.selectForm.controls['selectValue'].disable();
    }
  }

  onChangeSelectValue(event: any) {
    this.selectedValue.emit(event);
  }

  getDisplayValue(option: any) {
    return typeof option === 'string' || typeof option === 'number' ? option : option[this.labelKey];
  }

  getValueKey(option: any) {
    return typeof option === 'string' || typeof option === 'number' ? option : option[this.valueKey];
  }
}
