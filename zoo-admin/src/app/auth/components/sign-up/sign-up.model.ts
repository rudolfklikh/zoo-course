import { EInputTypes } from "../base-form/base-form.model";

export interface ISignUpFormValue {
  email: string;
  userName: string;
  password: string;
}

export interface ISignUpFormTypes {
  email: EInputTypes,
  userName: EInputTypes,
  password: EInputTypes,

  [key: string]: EInputTypes;
}