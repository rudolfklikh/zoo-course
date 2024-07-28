import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../shared';
import { ISignInFormTypes, ISignInFormValue } from './sign-in.model';
import { EAuthTextElements } from '../../enums';
import { AUTH_SECTION_TOKEN } from '../../auth.model';
import { EInputTypes } from '../../../shared/components/base-form/base-form.model';
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
export class SignInComponent extends BaseFormComponent<ISignInFormValue, ISignInFormTypes> implements OnInit {
  protected readonly TEXT_ELEMENTS = EAuthTextElements;

  onSubmit = output<ISignInFormValue>();

  ngOnInit(): void {
    this.initForm();
  }

  submit(): void {
    this.onSubmit.emit(this.formValue);
  }

  private initForm(): void {
    const controlsConfig = {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    };
    const controlsType = {
      email: EInputTypes.EMAIL,
      password: EInputTypes.PASSWORD
    };

    this.initializeForm(controlsConfig, controlsType);
  }
}
