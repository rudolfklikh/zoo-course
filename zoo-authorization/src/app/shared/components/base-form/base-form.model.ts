import { AbstractControl } from "@angular/forms";

export type IFormControls<T> =  Record<keyof T, AbstractControl>;

export enum EInputTypes {
    EMAIL = 'email',
    PASSWORD = 'password',
    TEXT = 'text',
}