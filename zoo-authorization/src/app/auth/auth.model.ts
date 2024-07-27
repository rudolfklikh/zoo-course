import { InjectionToken } from "@angular/core";
import { BaseFormComponent } from "../shared";
import { ISignUpFormValue } from "./components/sign-up/sign-up.model";
import { ISignInFormValue } from "./components/sign-in/sign-in.model";

export const AUTH_SECTION_TOKEN = new InjectionToken<BaseFormComponent<ISignUpFormValue | ISignInFormValue>>('AUTH_SECTION_TOKEN');