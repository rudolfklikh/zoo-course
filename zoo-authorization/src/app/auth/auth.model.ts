import { InjectionToken } from "@angular/core";
import { FormGroup } from "@angular/forms";

export interface IAuthSection {
    form: FormGroup;
    clearForm: () => void;
}

export const AUTH_SECTION_TOKEN = new InjectionToken<IAuthSection>('AUTH_SECTION_TOKEN');