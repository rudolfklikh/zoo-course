import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../shared';
import { ISignInFormTypes, ISignInFormValue } from './sign-in.model';
import { EAuthTextElements } from '../../enums';
import { AUTH_SECTION_TOKEN } from '../../auth.model';
import { EInputTypes } from '../base-form/base-form.model';
import { ZooErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'zoo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ZooErrorMessageComponent],
  providers: [
    { provide: AUTH_SECTION_TOKEN, useExisting: SignInComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends BaseFormComponent<ISignInFormValue, ISignInFormTypes> {
  protected readonly TEXT_ELEMENTS = EAuthTextElements;
  protected readonly controlsConfig  = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  };
  protected readonly controlTypes = {
    email: EInputTypes.EMAIL,
    password: EInputTypes.PASSWORD
  };
}
