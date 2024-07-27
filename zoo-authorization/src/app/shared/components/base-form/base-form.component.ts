import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { IFormControls } from './base-form.model';

@Component({
  selector: 'zoo-base-form',
  template: '',
  standalone: true,
})
export abstract class BaseFormComponent<T extends { [key: string]: any }>  {
  private cdr = inject(ChangeDetectorRef);

  form!: FormGroup<IFormControls<T>>;

    
  get formValue(): T {
    return this.form.value as T;
  }

  get formControls(): IFormControls<T> {
    return this.form.controls as IFormControls<T>;
  }

  get controlNames(): Array<keyof T> {
    return Object.keys(this.formControls);
  }

  initializeForm(controlsConfig: IFormControls<T>): void {
    this.form = new FormGroup(controlsConfig);
  }

  getControl<K extends keyof T>(key: K): AbstractControl {
    return this.form.get(key as string) as AbstractControl;
  }

  isRequiredControl<K extends keyof T>(key: K): boolean {
    const formControl = this.getControl(key);

    return formControl.hasValidator(Validators.required); 
  }

  showError<K extends keyof T>(key: K): boolean {
    const formControl = this.getControl(key);

    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  clearForm(): void {
    this.form.markAsUntouched();
    this.form.reset();

    this.cdr.markForCheck();
  }
}