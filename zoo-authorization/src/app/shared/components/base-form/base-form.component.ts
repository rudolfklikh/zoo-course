import { ChangeDetectorRef, Component, inject, output, OutputEmitterRef } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { EInputTypes, IFormControls } from './base-form.model';

@Component({
  template: '',
  standalone: true,
})
export abstract class BaseFormComponent<V extends Record<string, any>, T extends Record<keyof V, EInputTypes>>  {
  private readonly cdr = inject(ChangeDetectorRef);

  abstract onSubmit: OutputEmitterRef<V>;

  form!: FormGroup<IFormControls<V>>;
  controlTypes!: T;

  get formValue(): V {
    return this.form.value as V;
  }

  get formControls(): IFormControls<V> {
    return this.form.controls as IFormControls<V>;
  }

  get controlNames(): Array<keyof V> {
    return Object.keys(this.formControls);
  }

  initializeForm(controlsConfig: IFormControls<V>, controlsType: T): void {
    this.form = new FormGroup(controlsConfig);
    this.controlTypes = controlsType;
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

    this.cdr.markForCheck();
  }
}