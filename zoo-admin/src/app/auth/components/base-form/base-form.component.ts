import { ChangeDetectorRef, Component, inject, OnInit, output, OutputEmitterRef } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { EInputTypes, IFormControls } from './base-form.model';

@Component({
  template: '',
  standalone: true,
})
export abstract class BaseFormComponent<V extends Record<string, any>, T extends Record<keyof V, EInputTypes>> implements OnInit  {
  private readonly _cdr = inject(ChangeDetectorRef);

  public form!: FormGroup<IFormControls<V>>;
  public onSubmit = output<V>();

  protected abstract controlTypes: T;
  protected abstract controlsConfig: IFormControls<V>;

  get formValue(): V {
    return this.form.value as V;
  }

  get formControls(): IFormControls<V> {
    return this.form.controls as IFormControls<V>;
  }

  get controlNames(): Array<keyof V> {
    return Object.keys(this.formControls);
  }

  ngOnInit(): void {
    this._initForm();
  }

  submit(): void {
    this.onSubmit.emit(this.formValue);
  }

  getControl<K extends keyof V>(key: K): AbstractControl {
    return this.form.get(key as string) as AbstractControl;
  }

  getControlType<K extends keyof V>(key: K): EInputTypes {
    return this.controlTypes[key] || EInputTypes.TEXT;
  }

  isRequiredControl<K extends keyof V>(key: K): boolean {
    const formControl = this.getControl(key);

    return formControl.hasValidator(Validators.required); 
  }

  showError<K extends keyof V>(key: K): boolean {
    const formControl = this.getControl(key);

    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  clearForm(): void {
    this.form.markAsUntouched();
    this.form.reset();

    this._cdr.markForCheck();
  }

  private _initForm(): void {
    this.form = new FormGroup(this.controlsConfig);
  }
}