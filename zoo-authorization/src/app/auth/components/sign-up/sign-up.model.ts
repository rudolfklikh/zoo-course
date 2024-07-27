import { InjectionToken } from "@angular/core";
import { BaseFormComponent } from "../../../shared";

export interface ISignUpFormValue {
  email: string;
  userName: string;
  password: string;
}