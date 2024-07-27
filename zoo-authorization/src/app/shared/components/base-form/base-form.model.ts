import { AbstractControl } from "@angular/forms";

export type IFormControls<T> =  Record<keyof T, AbstractControl>;