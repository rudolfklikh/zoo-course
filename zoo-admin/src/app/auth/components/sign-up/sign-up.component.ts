import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, output } from '@angular/core';
import { BaseFormComponent } from '../../../shared';
import { ISignUpFormTypes, ISignUpFormValue } from './sign-up.model';
import { EAuthTextElements } from '../../enums';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AUTH_SECTION_TOKEN } from '../../auth.model';
import { EInputTypes } from '../base-form/base-form.model';
import { ZooErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'zoo-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ZooErrorMessageComponent],
  providers: [
    { provide: AUTH_SECTION_TOKEN, useExisting: SignUpComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent extends BaseFormComponent<ISignUpFormValue, ISignUpFormTypes> {
  protected readonly TEXT_ELEMENTS = EAuthTextElements;
  protected readonly controlsConfig = {
    email: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  };
  protected readonly controlTypes = {
    email: EInputTypes.EMAIL,
    userName: EInputTypes.TEXT,
    password: EInputTypes.PASSWORD
  };
}
