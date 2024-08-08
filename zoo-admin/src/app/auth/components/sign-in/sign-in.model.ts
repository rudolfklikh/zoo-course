import { EInputTypes } from "../base-form/base-form.model";

export interface ISignInFormValue {
  email: string;
  password: string;
}

export interface ISignInFormTypes {
  email: EInputTypes,
  password: EInputTypes,

  [key: string]: EInputTypes;
}